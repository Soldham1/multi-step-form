import React from "react";

import UrlInput from "../formElements/UrlInput";
import TextInput from "../formElements/TextInput";
import BooleanInput from "../formElements/BooleanInput";

function PreprintInfo({ formData, setFormData }) {
  return (
    <div className="step">
      <h2>Preprint</h2>
      <h3 className="main_question">
        Please fill with details about your preprint
      </h3>
      <UrlInput
        name="preprintURL"
        placeholder="Preprint URL"
        value={formData.preprintURL}
        onChange={(event) => {
          setFormData({ ...formData, preprintURL: event.target.value });
        }}
      />
      <TextInput
        name="preprintDOI"
        placeholder="Preprint DOI"
        value={formData.preprintDOI}
        onChange={(event) => {
          setFormData({ ...formData, preprintDOI: event.target.value });
        }}
      />
      <BooleanInput
        name="preprintRelease"
        label="Was the preprint released at the time of first submission to a journal?"
        a="Yes"
        b="No"
        value={formData.preprintRelease}
        onChange={(event) => {
          setFormData({ ...formData, preprintRelease: event.target.value });
        }}
      />
    </div>
  );
}

export default PreprintInfo;
