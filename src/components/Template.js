import React from "react";
import { useState } from "react";

import CodeInfo from "./pages/CodeInfo";
import DatasetInfo from "./pages/DatasetInfo";
import LeftContent from "./pages/LeftContent";
import ProjectInfo from "./pages/ProjectInfo";
import ResearcherInfo from "./pages/ResearcherInfo";
import ArticleInfo from "./pages/ArticleInfo";
import StepCounter from "./StepCounter";
import Summary from "./pages/Summary";
import FormBuilder from "./pages/FormBuilder";
import MonographInfo from "./pages/MonographInfo";
import MaterialInfo from "./pages/MaterialInfo";
import ProtocolInfo from "./pages/ProtocolInfo";
import DigitalScholarshipInfo from "./pages/DigitalScholarshipInfo";
import PreprintInfo from "./pages/PreprintInfo";
import PeerReviewInfo from "./pages/PeerReviewInfo";
import PreRegInfo from "./pages/PreRegInfo";
import RegisteredReportInfo from "./pages/RegisteredReportInfo";
import ThesisInfo from "./pages/ThesisInfo";

function Template() {
  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    fullName: "",
    faculty: "",
    school: "",
    otherSchool: "",
    careerStage: "",

    projectName: "",
    researchArea: "",
    funder: "",
    otherFunder: "",
    length: 0,

    articleURL: "",
    articleDOI: "",
    articleEmbargo: false,
    articleLicence: "",

    monographURL: "",
    monographDOI: "",
    monographEmbargo: false,
    monographLicence: "",

    dataURL: "",
    dataDOI: "",
    format: "",
    dataLicence: "",

    codeURL: "",
    codeDOI: "",
    openSource: false,
    codeLicence: "",

    protocolURL: "",
    protocolSharing: "",

    materialURL: "",
    materialReproduction: false,
    materialRelease: false,

    dsURL: "",
    dsEmbargo: false,
    dsLicence: "",

    preprintURL: "",
    preprintDOI: "",
    preprintRelease: false,

    peerRevURL: "",
    peerRevResponse: false,

    preRegURL: "",
    preRegDistinction: false,

    regReportURL: "",
    regReportFunding: false,
    regReportPeerRev: false,
    regReportChanges: false,

    thesisURL: "",
    thesisDOI: "",
    thesisEmbargo: false,
    thesisLicence: "",
  });

  const [formBuilder, setFormBuilder] = useState({
    article: false,
    monograph: false,
    dataset: false,
    code: false,
    researchMaterial: false,
    protocol: false,
    digitalScholarship: false,
    preprints: false,
    openPeerReview: false,
    analysisPlan: false,
    registeredReport: false,
    dissertation: false,
  });

  const formTitles = [];

  const formBuilderFunc = () => {
    const form = [];

    if (formBuilder.article) {
      formTitles.push("Articles");
      form.push(
        <ArticleInfo
          formData={formData}
          setFormData={setFormData}
        ></ArticleInfo>
      );
    }

    if (formBuilder.monograph) {
      formTitles.push("Monographs, Books, Book Chapters and Edited Volumes");
      form.push(
        <MonographInfo formData={formData} setFormData={setFormData} />
      );
    }

    if (formBuilder.dataset) {
      formTitles.push("Data");
      form.push(<DatasetInfo formData={formData} setFormData={setFormData} />);
    }

    if (formBuilder.code) {
      formTitles.push("Code");
      form.push(<CodeInfo formData={formData} setFormData={setFormData} />);
    }

    if (formBuilder.researchMaterial) {
      formTitles.push("Research Material");
      form.push(<MaterialInfo formData={formData} setFormData={setFormData} />);
    }

    if (formBuilder.protocol) {
      formTitles.push("Protocols");
      form.push(<ProtocolInfo formData={formData} setFormData={setFormData} />);
    }

    if (formBuilder.digitalScholarship) {
      formTitles.push("Digital Scholarship");
      form.push(
        <DigitalScholarshipInfo formData={formData} setFormData={setFormData} />
      );
    }

    if (formBuilder.preprints) {
      formTitles.push("Preprints");
      form.push(<PreprintInfo formData={formData} setFormData={setFormData} />);
    }

    if (formBuilder.openPeerReview) {
      formTitles.push("Open Peer-reviews");
      form.push(
        <PeerReviewInfo formData={formData} setFormData={setFormData} />
      );
    }

    if (formBuilder.analysisPlan) {
      formTitles.push("Pre-registration Analysis Plans");
      form.push(<PreRegInfo formData={formData} setFormData={setFormData} />);
    }

    if (formBuilder.registeredReport) {
      formTitles.push("Registered Reports");
      form.push(
        <RegisteredReportInfo formData={formData} setFormData={setFormData} />
      );
    }

    if (formBuilder.dissertation) {
      formTitles.push("Theses and Dissertation");
      form.push(<ThesisInfo formData={formData} setFormData={setFormData} />);
    }

    return form;
  };

  let form = formBuilderFunc();

  const displayPage = (currPage) => {
    if (form.length > currPage) {
      return (
        <div>
          <StepCounter page={page - 3} formTitles={formTitles} />
          {form[currPage]}
        </div>
      );
    } else {
      return <Summary />;
    }
  };

  const PageDisplay = () => {
    switch (page) {
      case 0: {
        return (
          <div>
            <ResearcherInfo formData={formData} setFormData={setFormData} />
          </div>
        );
      }
      case 1: {
        return (
          <div>
            <ProjectInfo formData={formData} setFormData={setFormData} />
          </div>
        );
      }
      case 2: {
        return (
          <div>
            <FormBuilder
              formBuilder={formBuilder}
              setFormBuilder={setFormBuilder}
            />
          </div>
        );
      }
      case 3:
        return displayPage(0);
      case 4:
        return displayPage(1);
      case 5:
        return displayPage(2);
      case 6:
        return displayPage(3);
      case 7:
        return displayPage(4);
      case 8:
        return displayPage(5);
      case 9:
        return displayPage(6);
      case 10:
        return displayPage(7);
      case 11:
        return displayPage(8);
      case 12:
        return displayPage(9);
      case 13:
        return displayPage(10);
      case 14:
        return displayPage(11);
      case 15:
        return <Summary />;
      default:
        return <div>Default Case</div>;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.school === "other" && formData.otherSchool !== "") {
      formData.school = formData.otherSchool;
    }

    if (formData.funder === "other" && formData.otherFunder !== "") {
      formData.funder = formData.otherFunder;
    }

    console.log(formData);

    alert("Submitted");
  };

  return (
    <div>
      <div className="container-fluid full-height">
        <div className="row row-height">
          <div className="col-lg-6 content-left">
            <div className="content-left-wrapper">
              <a href="index.html" id="logo">
                <img src="img/ncl_logo.png" alt="" width="48" height="56" />
              </a>
              <LeftContent />
              <div className="copy">© 2022 Newcastle University</div>
            </div>
            {/*<!-- /content-left-wrapper -->*/}
          </div>
          {/*<!-- /content-left -->*/}

          <div className="col-lg-6 content-right" id="start">
            <div id="wizard_container">
              <div id="top-wizard">
                <div id="progressbar"></div>
              </div>
              {/*<!-- /top-wizard -->*/}
              <form id="wrapped" method="POST">
                <input id="website" name="website" type="text" value="" />
                {/*<!-- Leave for security protection, read docs for details -->*/}
                <div id="middle-wizard">{PageDisplay()}</div>
                {/*<!-- /middle-wizard -->*/}
                <div id="bottom-wizard">
                  <button
                    type="button"
                    name="backward"
                    className="backward"
                    disabled={page === 0}
                    onClick={() => {
                      setPage((currentPage) => currentPage - 1);
                    }}
                  >
                    Prev
                  </button>
                  <button
                    type="button"
                    name="forward"
                    className="forward"
                    disabled={page === formTitles.length + 3}
                    onClick={() => {
                      setPage((currentPage) => currentPage + 1);
                    }}
                  >
                    Next
                  </button>
                  <button
                    type="submit"
                    name="process"
                    className="submit"
                    disabled={!(page === formTitles.length + 3)}
                    onClick={(e) => handleSubmit(e)}
                  >
                    Submit
                  </button>
                </div>
                {/*<!-- /bottom-wizard -->*/}
              </form>
            </div>
            {/*<!-- /Wizard container -->*/}
          </div>
          {/*<!-- /content-right-->*/}
        </div>
        {/*<!-- /row-->*/}
      </div>
    </div>
  );
}

export default Template;
