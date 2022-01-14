import React from "react";

function License({ formData, setFormData }) {
  if (formData.openSource) {
    return (
      <div className="ui six wide field">
        <label>License</label>
        <input
          id="license"
          type="text"
          placeholder="License"
          value={formData.license}
          onChange={(event) =>
            setFormData({ ...formData, license: event.target.value })
          }
        ></input>
      </div>
    );
  } else {
    return null;
  }
}

export default License;
