import React from "react";
import BooleanInput from "../formElements/BooleanInput";

import UrlInput from "../formElements/UrlInput";

function MaterialInfo({ formData, setFormData }) {
  return (
    <div className="step">
      <h2>Research Material</h2>
      <h3 className="main_question">
        Please fill with details about your research Material
      </h3>
      <UrlInput
        name="materialURL"
        placeholder="Material URL"
        value={formData.materialURL}
        onChange={(event) => {
          setFormData({ ...formData, materialURL: event.target.value });
        }}
      />
      <BooleanInput
        name="materialReproduction"
        label="Is all the material needed to reproduce the results freely availiable?"
        a="Yes"
        b="No"
        value={formData.materialReproduction}
        onChange={(event) => {
          setFormData({
            ...formData,
            materialReproduction: event.target.value,
          });
        }}
      />
      <BooleanInput
        name="materialRelease"
        label="Was the material released at the time of the publication of the first paper based on the materials?"
        a="Yes"
        b="No"
        value={formData.materialRelease}
        onChange={(event) => {
          setFormData({ ...formData, materialRelease: event.target.value });
        }}
      />
    </div>
  );
}

export default MaterialInfo;
