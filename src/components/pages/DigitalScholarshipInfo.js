import React from "react";

import UrlInput from "../formElements/UrlInput";
import BooleanInput from "../formElements/BooleanInput";
import TextInput from "../formElements/TextInput";

function DigitalScholarshipInfo({ formData, setFormData }) {
  return (
    <div className="step">
      <h2>Digital Scholarship</h2>
      <h3 className="main_question">
        Please fill with details about your project
      </h3>
      <UrlInput
        name="dsURL"
        placeholder="Digital Scholarship URL"
        value={formData.dsURL}
        onChange={(event) => {
          setFormData({ ...formData, dsURL: event.target.value });
        }}
      />
      <TextInput
        name="dsLicence"
        placeholder="Licence"
        value={formData.dsLicence}
        onChange={(event) => {
          setFormData({ ...formData, dsLicence: event.target.value });
        }}
      />
      <BooleanInput
        name="dsEmargo"
        label="Was there an embargo period?"
        a="Yes"
        b="No"
        value={formData.dsEmbargo}
        onChange={(event) => {
          setFormData({ ...formData, dsEmbargo: event.target.value });
        }}
      />
    </div>
  );
}

export default DigitalScholarshipInfo;
