import React from "react";
import "./index.scss";

const DietaryDetails = ({ isSelected = false }) => {
  return (
    <>
      <div className='dietary-question text-center'>
        What is your dietary requirement?
      </div>
      <p className='dietary-text text-center'>
        If you would like to alternate between 2 or even 3 options, you can
        choose more than one.
      </p>
      {isSelected ? (
        <p className='text-center text-danger'>
          Please Select Atleast One Dietary
        </p>
      ) : null}
    </>
  );
};

export default DietaryDetails;
