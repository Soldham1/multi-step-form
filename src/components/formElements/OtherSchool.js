import React from "react";

function OtherSchool({ formData, setFormData }) {
  if (formData.school === "other") {
    return (
      <div className="ui field">
        <label>If other, please enter here</label>
        <input
          id="otherSchool"
          type="text"
          placeholder="Other School/ Institute"
          value={formData.otherSchool}
          onChange={(event) => {
            setFormData({ ...formData, otherSchool: event.target.value });
          }}
        ></input>
      </div>
    );
  } else {
    return null;
  }
}

export default OtherSchool;
