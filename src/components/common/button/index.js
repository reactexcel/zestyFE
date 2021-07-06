import React from "react";
import { Spinner } from "react-bootstrap";
import "./index.scss"

function LoginBtn({ handleSubmit, loader, buttonText, type }) {
  return (
    <button className='login-btn' type={type} onClick={handleSubmit}>
      {loader ? (
        <Spinner animation='border' role='status'>
          <span className='sr-only'>Loading...</span>
        </Spinner>
      ) : (
        buttonText
      )}
    </button>
  );
}
export default LoginBtn;
