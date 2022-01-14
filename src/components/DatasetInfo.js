import React from "react";

function DatasetInfo({ formData, setFormData }) {
  return (
    <div className="ui form">
      <div className="ui field">
        <label>Data URL</label>
        <input
          id="DataURL"
          type="url"
          placeholder="Data URL"
          value={formData.dataURL}
          onChange={(event) =>
            setFormData({ ...formData, dataURL: event.target.value })
          }
        ></input>
      </div>
      <div className="field">
        <label>Dataset Format</label>
        <select
          value={formData.format}
          onChange={(event) => {
            setFormData({ ...formData, format: event.target.value });
          }}
          className="ui fluid dropdown"
        >
          <option value="">Select</option>
          <option value="CSV">CSV</option>
          <option value="Plain Text">Plain Text</option>
        </select>
      </div>
    </div>
  );
}

export default DatasetInfo;
