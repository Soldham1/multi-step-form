import React from "react";

import OtherFunder from "./formElements/OtherFunder";

function ProjectInfo({ formData, setFormData }) {
  return (
    <div className="ui form">
      <div className="ui field">
        <label>Project Name</label>
        <input
          id="projectName"
          type="text"
          placeholder="Project Name"
          value={formData.projectName}
          onChange={(event) =>
            setFormData({ ...formData, projectName: event.target.value })
          }
        ></input>
      </div>
      <div className="ui field">
        <label>Research Area</label>
        <input
          id="area"
          type="text"
          placeholder="Research Area"
          value={formData.researchArea}
          onChange={(event) =>
            setFormData({ ...formData, researchArea: event.target.value })
          }
        ></input>
      </div>
      <div className="field">
        <label>Funder</label>
        <select
          value={formData.funder}
          onChange={(event) => {
            setFormData({ ...formData, funder: event.target.value });
          }}
          className="ui fluid dropdown"
        >
          <option value="">Select</option>
          <option value="EPSRC">EPSRC</option>
          <option value="UKRI">UKRI</option>
          <option value="AHRC">AHRC</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <OtherFunder formData={formData} setFormData={setFormData} />
      </div>
      <div className="three wide field">
        <label>Project Length</label>
        <input
          type="number"
          min="0"
          placeholder="Months"
          value={formData.length}
          onChange={(event) =>
            setFormData({ ...formData, length: event.target.value })
          }
        />
      </div>
    </div>
  );
}

export default ProjectInfo;
