import React, { memo } from "react";
import "./index.scss";

const MealTypeMessage = ({ foodType }) => {
  return (
    <>
      <p className='menu-meal-type mx-3 mt-3'>
        What Would You Like For {foodType} ? Choose One.
      </p>
    </>
  );
};

export default memo(MealTypeMessage);
