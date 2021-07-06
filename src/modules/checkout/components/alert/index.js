import React from "react";
import { Toast } from "react-bootstrap";
import "./index.scss";

const AlertMessage = ({ showA, toggleShowA }) => {
  return (
    <Toast show={showA} onClose={toggleShowA} className='alert-msg'>
      <Toast.Header>
        <img src='holder.js/20x20?text=%20' className='rounded mr-2' alt='' />
        <strong className='mr-auto'>Alert</strong>
      </Toast.Header>
      <Toast.Body>
        Something went wrong.Please make your foodplan again.
        <br />
        and if problem persists... Contact Admin
      </Toast.Body>
    </Toast>
  );
};

export default AlertMessage;