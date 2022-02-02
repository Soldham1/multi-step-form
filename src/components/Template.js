import React from "react";
import { useState } from "react";

import CodeInfo from "./CodeInfo";
import DatasetInfo from "./DatasetInfo";
import LeftContent from "./LeftContent";
import ProjectInfo from "./ProjectInfo";
import ResearcherInfo from "./ResearcherInfo";
import PaperInfo from "./PaperInfo";
import StepCounter from "./StepCounter";
import Summary from "./Summary";
import FormBuilder from "./FormBuilder";

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
    codeURL: "",
    codeDOI: "",
    openSource: false,
    codeLicence: "",
    paperEmbargo: false,
    paperURL: "",
    paperDOI: "",
    paperLicence: "",
    dataURL: "",
    dataDOI: "",
    format: "",
    dataLicence: "",
  });

  const [formBuilder, setFormBuilder] = useState({
    code: false,
    paper: false,
    dataset: false,
  });

  const formTitles = [];

  const formBuilderFunc = () => {
    const form = [];

    if (formBuilder.code) {
      formTitles.push("Code");
      form.push(<CodeInfo formData={formData} setFormData={setFormData} />);
    }

    if (formBuilder.paper) {
      formTitles.push("Paper");
      form.push(<PaperInfo formData={formData} setFormData={setFormData} />);
    }

    if (formBuilder.dataset) {
      formTitles.push("Data");
      form.push(<DatasetInfo formData={formData} setFormData={setFormData} />);
    }

    return form;
  };

  let form = formBuilderFunc();

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <div>
          <ResearcherInfo formData={formData} setFormData={setFormData} />;{" "}
        </div>
      );
    } else if (page === 1) {
      return (
        <div>
          <ProjectInfo formData={formData} setFormData={setFormData} />;
        </div>
      );
    } else if (page === 2) {
      return (
        <div>
          <FormBuilder
            formBuilder={formBuilder}
            setFormBuilder={setFormBuilder}
          />
        </div>
      );
    } else if (page === 3) {
      if (form.length > 0) {
        return (
          <div>
            <StepCounter page={page - 3} formTitles={formTitles} />
            {form[0]}
          </div>
        );
      } else {
        return <Summary />;
      }
    } else if (page === 4) {
      if (form.length > 1) {
        return (
          <div>
            <StepCounter page={page - 3} formTitles={formTitles} />
            {form[1]}
          </div>
        );
      } else {
        return <Summary />;
      }
    } else if (page === 5) {
      if (form.length > 2) {
        return (
          <div>
            <StepCounter page={page - 3} formTitles={formTitles} />
            {form[2]}
          </div>
        );
      } else {
        return <Summary />;
      }
    } else if (page === 6) {
      return <Summary />;
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
                <div id="middle-wizard">
                  <div>{PageDisplay()}</div>
                </div>
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
