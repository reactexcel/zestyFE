import React from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import "./index.scss";

function NextAndBackButton({ handleStartPage, handleBackPage, buttonType }) {
  return (
    <div className='back-close'>
      <div className='left-f1' onClick={handleBackPage}>
        <ChevronLeft /> BACK
      </div>
      <div className='right-f'>
        <button className='next_btn' onClick={handleStartPage}>
          {buttonType} <ChevronRight />
        </button>
      </div>
      <div className='clear'></div>
    </div>
  );
}
export default NextAndBackButton;
