import React from "react";
import "./index.scss";

const DietaryButton = ({ handleDietary, foodType, val }) => {
  return (
    <button
      type='button'
      className={`btn  ${
        foodType?.indexOf(val) >= 0 ? "vegetarian-active" : "vegetarian"
      }`}
      value={"Vegetarian"}
      onClick={() => handleDietary(val)}
    >
      {val}
    </button>
  );
};

export default DietaryButton;
