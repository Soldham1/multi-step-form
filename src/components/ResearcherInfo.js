import React from "react";

import OtherSchool from "./formElements/OtherSchool";

function ResearcherInfo({ formData, setFormData }) {
  return (
    <div className="ui form">
      <div className="ui field">
        <label>Full Name</label>
        <input
          id="fullName"
          type="text"
          placeholder="Your Name"
          value={formData.fullName}
          onChange={(event) =>
            setFormData({ ...formData, fullName: event.target.value })
          }
        ></input>
      </div>
      <div className="two fields">
        <div className="field">
          <label>Faculty</label>
          <select
            value={formData.faculty}
            onChange={(event) => {
              setFormData({ ...formData, faculty: event.target.value });
            }}
            className="ui fluid dropdown"
          >
            <option value="">Select</option>
            <option value="SAGE">SAGE</option>
            <option value="HASS">HASS</option>
            <option value="FMS">FMS</option>
          </select>
        </div>
        <div className="field">
          <label>School/ Institute</label>
          <select
            value={formData.school}
            onChange={(event) => {
              setFormData({ ...formData, school: event.target.value });
            }}
            className="ui fluid dropdown"
          >
            <option value="">Select</option>
            <option value="Computing">School of Computing</option>
            <option value="Business">Business School</option>
            <option value="Engineering">Engineering School</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div>
        <OtherSchool formData={formData} setFormData={setFormData} />
      </div>
      <div className="field">
        <label>Career Stage</label>
        <select
          value={formData.careerStage}
          onChange={(event) => {
            setFormData({ ...formData, careerStage: event.target.value });
          }}
          className="ui fluid dropdown"
        >
          <option value="">Select</option>
          <option value="PostDoc">Post-Doc</option>
          <option value="PhD">PhD</option>
          <option value="EarlyCareer">Early Career</option>
          <option value="MidCareer">Mid-Career</option>
          <option value="Senior">Senior</option>
        </select>
      </div>
    </div>
  );
}

export default ResearcherInfo;
