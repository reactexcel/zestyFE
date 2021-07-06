import React, { memo } from "react";
import RightArrowIcon from "src/assets/images/ChevronRight.svg";
import LeftArrowIcon from "src/assets/images/Chevronleft.svg";
import "./index.scss";

const Footer = ({ handleBack, handleNext, isMobile = false }) => {
  return (
    <div className={`row pagination-row mr-5`}>
      <div className='col'>
        <div
          onClick={handleBack}
          className={`${isMobile && "previous-button"}`}
        >
          <img src={RightArrowIcon} alt='previous-button' />
          <span className={`ml-2 ${!isMobile && "back-btn"}`}>BACK</span>
        </div>
      </div>
      {!isMobile && (
        <div className='mt-4 col d-flex justify-content-center'></div>
      )}
      <div className='col d-flex justify-content-center'>
        <div>
          <button type='submit' onClick={handleNext} className='next-btn'>
            NEXT <img src={LeftArrowIcon} alt='next-button' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(Footer);
