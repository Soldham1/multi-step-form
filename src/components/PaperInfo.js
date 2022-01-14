import React from "react";

import PaperURLDOI from "./formElements/PaperURLDOI";

function PaperInfo({ formData, setFormData }) {
  return (
    <div className="ui form">
      <div className="field">
        <label>Paper Type</label>
        <select
          value={formData.paperType}
          onChange={(event) => {
            setFormData({ ...formData, paperType: event.target.value });
          }}
          className="ui fluid dropdown"
        >
          <option value="">Select</option>
          <option value="Journal">Journal</option>
          <option value="Report">Report</option>
          <option value="Thesis">Thesis</option>
        </select>
      </div>
      <div>
        <input
          className="ui toggle checkbox"
          type="checkbox"
          id="openAccess"
          name="openAccess"
          checked={formData.openAccess}
          onChange={(event) =>
            setFormData({ ...formData, openAccess: event.target.checked })
          }
        />
        <label>Is it Open Access?</label>
      </div>
      <PaperURLDOI formData={formData} setFormData={setFormData} />
    </div>
  );
}

export default PaperInfo;
