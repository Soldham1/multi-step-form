import React from "react";

import UrlInput from "../formElements/UrlInput";
import BooleanInput from "../formElements/BooleanInput";

function PreRegInfo({ formData, setFormData }) {
  return (
    <div className="step">
      <h2>Pre-registration Analysis Plans</h2>
      <h3 className="main_question">
        Please fill with details of your your pre-registration analysis plans
      </h3>
      <UrlInput
        name="preRegURL"
        placeholder="Pre-registration Analysis Plans URL"
        value={formData.preRegURL}
        onChange={(event) => {
          setFormData({ ...formData, preRegURL: event.target.value });
        }}
      />
      <BooleanInput
        name="preRegDistinction"
        label="Is there a clear distinction between the planned research and any unplanned reseach/ analysis that was conducted?"
        a="Yes"
        b="No"
        value={formData.preRegDistinction}
        onChange={(event) => {
          setFormData({ ...formData, preRegDistinction: event.target.value });
        }}
      />
    </div>
  );
}

export default PreRegInfo;
