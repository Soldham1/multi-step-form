import React from "react";

function OtherFunder({ formData, setFormData }) {
  if (formData.funder === "other") {
    return (
      <div className="ui field">
        <label>If other, please enter here</label>
        <input
          id="otherFunder"
          type="text"
          placeholder="Other Funder"
          value={formData.otherFunder}
          onChange={(event) => {
            setFormData({ ...formData, otherFunder: event.target.value });
          }}
        ></input>
      </div>
    );
  } else {
    return null;
  }
}

export default OtherFunder;
