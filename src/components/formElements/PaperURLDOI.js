import React from "react";

function PaperURLDOI({ formData, setFormData }) {
  if (formData.openAccess) {
    return (
      <div>
        <div className="ui field">
          <label>Paper URL</label>
          <input
            id="paperURL"
            type="url"
            placeholder="Paper URL"
            value={formData.paperURL}
            onChange={(event) =>
              setFormData({ ...formData, paperURL: event.target.value })
            }
          ></input>
        </div>
        <div className="ui six wide field">
          <label>Paper DOI</label>
          <input
            id="paperDOI"
            type="text"
            placeholder="Paper DOI"
            value={formData.paperDOI}
            onChange={(event) =>
              setFormData({ ...formData, paperDOI: event.target.value })
            }
          ></input>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default PaperURLDOI;
