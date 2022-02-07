import React from "react";

import UrlInput from "../formElements/UrlInput";
import BooleanInput from "../formElements/BooleanInput";

function PeerReviewInfo({ formData, setFormData }) {
  return (
    <div className="step">
      <h2>Open Peer Review</h2>
      <h3 className="main_question">
        Please fill with details about your open peer review
      </h3>
      <UrlInput
        name="dsURL"
        placeholder="Digital Scholarship URL"
        value={formData.dsURL}
        onChange={(event) => {
          setFormData({ ...formData, dsURL: event.target.value });
        }}
      />
      <BooleanInput
        name="peerRevResponse"
        label="Does the peer review include the authors response?"
        a="Yes"
        b="No"
        value={formData.peerRevResponse}
        onChange={(event) => {
          setFormData({ ...formData, peerRevResponse: event.target.value });
        }}
      />
    </div>
  );
}

export default PeerReviewInfo;
