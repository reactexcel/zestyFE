import React from "react";
import Vector from "src/assets/images/Vector.svg";
import "./index.scss";

const FoodDetails = ({ details }) => {
  return (
    <div className='row ml-2 '>
      <div className='col-1 icon '>
        <img src={Vector}  alt='Vector' />{" "}
      </div>
      <p className='col-10 meal_feature_text'>{details}</p>
    </div>
  );
};

export default FoodDetails;
