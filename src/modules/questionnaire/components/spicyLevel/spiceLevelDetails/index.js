import React from "react";
import "./index.scss";

const SpiceLevelDetails = ({ isSelected = false }) => {
  return (
    <>
      <div className='dietary-question text-center'>
        How spicy do you like your food?
      </div>
      <p className='dietary-text text-center'>
        We have chefs cooking different variety of spice level for different
        taste buds. We will make sure the food tastes excatly the way you want!
      </p>
      {isSelected ? (
        <p className='text-center text-danger'>
          Please Select Atleast One Option
        </p>
      ) : null}
    </>
  );
};

export default SpiceLevelDetails;
