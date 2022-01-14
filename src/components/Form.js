import React, { useState } from "react";
import axios from "axios";

import ResearcherInfo from "./ResearcherInfo";
import ProjectInfo from "./ProjectInfo";
import CodeInfo from "./CodeInfo";
import PaperInfo from "./PaperInfo";
import DatasetInfo from "./DatasetInfo";

function Form() {
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
    license: "",
    paperType: "",
    openAccess: false,
    paperURL: "",
    paperDOI: "",
    dataURL: "",
    format: "",
  });

  const FormTitles = ["Researcher", "Project", "Code", "Paper", "Dataset"];

  const PageDisplay = () => {
    switch (page) {
      case 0:
        return <ResearcherInfo formData={formData} setFormData={setFormData} />;
      case 1:
        return <ProjectInfo formData={formData} setFormData={setFormData} />;
      case 2:
        return <CodeInfo formData={formData} setFormData={setFormData} />;
      case 3:
        return <PaperInfo formData={formData} setFormData={setFormData} />;
      case 4:
        return <DatasetInfo formData={formData} setFormData={setFormData} />;
      default:
        return <div>Default Case</div>;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (page === FormTitles.length - 1) {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        const {
          fullName,
          faculty,
          school,
          otherSchool,
          careerStage,
          projectName,
          researchArea,
          funder,
          otherFunder,
          length,
          codeURL,
          codeDOI,
          openSource,
          license,
          paperType,
          openAccess,
          paperURL,
          paperDOI,
          dataURL,
          format,
        } = formData;

        const researcherBody = {
          data: {
            fullName,
            faculty,
            school,
            careerStage,
          },
        };

        if (otherSchool) {
          researcherBody.data.school = otherSchool;
        }

        const projectBody = {
          data: {
            projectName,
            researchArea,
            funder,
            length,
          },
        };

        if (otherFunder) {
          projectBody.data.funder = otherFunder;
        }

        const codeBody = {
          data: {
            codeURL,
            codeDOI,
            openSource,
            license,
          },
        };
        const paperBody = {
          data: {
            paperType,
            openAccess,
            paperURL,
            paperDOI,
          },
        };
        const dataBody = {
          data: {
            dataURL,
            format,
          },
        };

        const submissionBody = {
          data: [
            {
              attributes: {
                researcher: {
                  attributes: {
                    data: {
                      fullName,
                      faculty,
                      school,
                      careerStage,
                    },
                  },
                },
                project: {
                  attributes: {
                    data: {
                      projectName,
                      researchArea,
                      funder,
                      length,
                    },
                  },
                },
                codes: {
                  data: [
                    {
                      attributes: {
                        codeURL,
                        codeDOI,
                        openSource,
                        license,
                      },
                    },
                  ],
                },
                papers: {
                  data: [
                    {
                      attributes: {
                        paperType,
                        openAccess,
                        paperURL,
                        paperDOI,
                      },
                    },
                  ],
                },
                datasets: {
                  data: [
                    {
                      attributes: {
                        dataURL,
                        format,
                      },
                    },
                  ],
                },
              },
            },
          ],
        };

        // await axios.post(
        //   "http://localhost:1337/api/researchers",
        //   researcherBody,
        //   config
        // );
        // await axios.post(
        //   "http://localhost:1337/api/projects",
        //   projectBody,
        //   config
        // );
        // await axios.post("http://localhost:1337/api/codes", codeBody, config);
        // await axios.post("http://localhost:1337/api/papers", paperBody, config);
        // await axios.post(
        //   "http://localhost:1337/api/datasets",
        //   dataBody,
        //   config
        // );

        await axios.post(
          "http://localhost:1337/api/submissions",
          submissionBody,
          config
        );

        alert("Form submitted");
      } catch (err) {
        console.log(err);
        console.log(err.response);
        alert(err.response.data);
      }
    } else {
      if (page === 100) {
        if (!formData.fullName) {
          alert("Name is required");
        } else if (!formData.faculty) {
          alert("Faculty is required");
        } else if (!formData.school && !formData.otherSchool) {
          alert("School is required");
        } else if (!formData.careerStage) {
          alert("Career Stage is required");
        } else {
          setPage((currentPage) => currentPage + 1);
        }
      } else {
        setPage((currentPage) => currentPage + 1);
      }
    }
  };

  return (
    <div className="form-container">
      <div>
        <div className="progressBar">
          Step {page + 1}/{FormTitles.length}
        </div>
        <div className="">
          <div className="header">
            <h1>{FormTitles[page]}</h1>
          </div>
          <div className="body">{PageDisplay()}</div>
        </div>
      </div>

      <div className="footer" style={{ marginTop: "20px" }}>
        <button
          className="ui fluid red button"
          disabled={page === 0}
          onClick={() => {
            setPage((currentPage) => currentPage - 1);
          }}
        >
          Prev
        </button>
        <button
          className="ui fluid blue button"
          onClick={(e) => handleSubmit(e)}
        >
          {page === FormTitles.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default Form;
