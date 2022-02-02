import React from "react";

import UrlInput from "./formElements/UrlInput";
import TextInput from "./formElements/TextInput";
import BooleanInput from "./formElements/BooleanInput";

function PaperInfo({ formData, setFormData }) {
  return (
    <div className="step">
      <h2>Paper</h2>
      <h3 className="main_question">
        Please fill with your details about your paper
      </h3>
      <UrlInput
        name="paperURL"
        placeholder="Paper URL"
        value={formData.paperURL}
        onChange={(event) => {
          setFormData({ ...formData, paperURL: event.target.value });
        }}
      />
      <TextInput
        name="paperDOI"
        placeholder="Paper DOI"
        value={formData.paperDOI}
        onChange={(event) => {
          setFormData({ ...formData, paperDOI: event.target.value });
        }}
      />
      <TextInput
        name="paperLicence"
        placeholder="Licence"
        value={formData.paperLicence}
        onChange={(event) => {
          setFormData({ ...formData, paperLicence: event.target.value });
        }}
      />
      <BooleanInput
        name="paperEmargo"
        label="Was there an embargo period?"
        a="Yes"
        b="No"
        value={formData.paperEmbargo}
        onChange={(event) => {
          setFormData({ ...formData, paperEmbargo: event.target.value });
        }}
      />
    </div>
  );
}

export default PaperInfo;
