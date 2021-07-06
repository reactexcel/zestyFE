import React from "react";
import logo from "src/assets/images/logo.svg";
import "./index.scss";

const BackButton = ({ handleBack }) => {
  return (
    <div className='question_header'>
      <div className='left_f' onClick={handleBack}>
        <img src={logo} alt='logo' />
      </div>
    </div>
  );
};

export default BackButton;
