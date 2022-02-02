import React from "react";

function FormBuilder({ formBuilder, setFormBuilder }) {
  return (
    <div className="step">
      <h2>Output Types</h2>
      <h3 className="main_question">
        Please select the output types you have used in your project
      </h3>
      <div class="form-group">
        <label class="container_check version_2">
          Code
          <input
            type="checkbox"
            name="Code"
            checked={formBuilder.code}
            onChange={(event) => {
              setFormBuilder({ ...formBuilder, code: event.target.checked });
            }}
          />
          <span class="checkmark"></span>
        </label>
      </div>
      <div class="form-group">
        <label class="container_check version_2">
          Paper
          <input
            type="checkbox"
            name="Paper"
            checked={formBuilder.paper}
            onChange={(event) => {
              setFormBuilder({ ...formBuilder, paper: event.target.checked });
            }}
          />
          <span class="checkmark"></span>
        </label>
      </div>
      <div class="form-group">
        <label class="container_check version_2">
          Dataset
          <input
            type="checkbox"
            name="Dataset"
            checked={formBuilder.dataset}
            onChange={(event) => {
              setFormBuilder({ ...formBuilder, dataset: event.target.checked });
            }}
          />
          <span class="checkmark"></span>
        </label>
      </div>
    </div>
  );
}

export default FormBuilder;
