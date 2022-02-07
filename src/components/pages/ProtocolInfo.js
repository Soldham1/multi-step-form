import React from "react";

import TextInput from "../formElements/TextInput";
import BooleanInput from "../formElements/BooleanInput";

function ProtocolInfo({ formData, setFormData }) {
  return (
    <div className="step">
      <h2>Protocols</h2>
      <h3 className="main_question">
        Please fill with details about your protocol
      </h3>
      <TextInput
        name="protocolURL"
        placeholder="Protocol URL"
        value={formData.protocolURL}
        onChange={(event) => {
          setFormData({ ...formData, protocolURL: event.target.value });
        }}
      />
      <BooleanInput
        name="protocolSharing"
        label="Does it facilitate sharing, editing, forking, and further development?"
        a="Yes"
        b="No"
        value={formData.protocolSharing}
        onChange={(event) => {
          setFormData({ ...formData, protocolSharing: event.target.value });
        }}
      />
    </div>
  );
}

export default ProtocolInfo;
