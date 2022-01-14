import React from "react";

import License from "./formElements/License";

function CodeInfo({ formData, setFormData }) {
  return (
    <div className="ui form">
      <div className="ui field">
        <label>Code URL</label>
        <input
          id="codeURL"
          type="url"
          placeholder="Code URL"
          value={formData.codeURL}
          onChange={(event) =>
            setFormData({ ...formData, codeURL: event.target.value })
          }
        ></input>
      </div>

      <div className="ui six wide field">
        <label>Code DOI</label>
        <input
          id="codeDOI"
          type="text"
          placeholder="Code DOI"
          value={formData.codeDOI}
          onChange={(event) =>
            setFormData({ ...formData, codeDOI: event.target.value })
          }
        ></input>
      </div>
      <div>
        <input
          className="ui toggle checkbox"
          type="checkbox"
          id="openSource"
          name="openSource"
          checked={formData.openSource}
          onChange={(event) =>
            setFormData({ ...formData, openSource: event.target.checked })
          }
        />
        <label>Is it Open Source?</label>
      </div>
      <License formData={formData} setFormData={setFormData} />
    </div>
  );
}

export default CodeInfo;
