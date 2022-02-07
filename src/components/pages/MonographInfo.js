import React from "react";

import UrlInput from "../formElements/UrlInput";
import TextInput from "../formElements/TextInput";
import BooleanInput from "../formElements/BooleanInput";

function MonographInfo({ formData, setFormData }) {
  return (
    <div className="step">
      <h2>Monographs, Books, Book Chapters and Edited Volumes</h2>
      <h3 className="main_question"></h3>
      <UrlInput
        name="monographURL"
        placeholder="Monograph URL"
        value={formData.monographURL}
        onChange={(event) => {
          setFormData({ ...formData, monographURL: event.target.value });
        }}
      />
      <TextInput
        name="monographDOI"
        placeholder="Monograph DOI"
        value={formData.monographDOI}
        onChange={(event) => {
          setFormData({ ...formData, monographDOI: event.target.value });
        }}
      />
      <TextInput
        name="monographLicence"
        placeholder="Licence"
        value={formData.monographLicence}
        onChange={(event) => {
          setFormData({ ...formData, monographLicence: event.target.value });
        }}
      />
      <BooleanInput
        name="monographEmargo"
        label="Was there an embargo period?"
        a="Yes"
        b="No"
        value={formData.monographEmbargo}
        onChange={(event) => {
          setFormData({ ...formData, monographEmbargo: event.target.value });
        }}
      />
    </div>
  );
}

export default MonographInfo;
