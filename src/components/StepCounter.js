import React from "react";

function StepCounter(props) {
  return (
    <div>
      <strong className="step-counter">
        {props.page + 1}/{props.formTitles.length}
      </strong>
    </div>
  );
}

export default StepCounter;
