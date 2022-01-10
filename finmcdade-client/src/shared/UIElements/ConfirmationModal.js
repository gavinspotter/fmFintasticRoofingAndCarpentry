import React from "react";
import { useNavigate } from "react-router";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import "../../css/style.css";

const Overlay = (props) => {
  const content = (
    <div className="confirmation">
      <div className="confirmation-title">
        <h1>Are you sure?</h1>
      </div>
      <div className="confirmation-yesButton">{props.yes}</div>
      <div className="confirmation-noButton">{props.no}</div>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById("cModal-hook"));
};

const ConfirmationModal = (props) => {
  return (
    <CSSTransition
      in={props.show}
      mountOnEnter
      unmountOnExit
      timeout={200}
      classNames="modal"
    >
      <Overlay {...props} />
    </CSSTransition>
  );
};

export default ConfirmationModal;
