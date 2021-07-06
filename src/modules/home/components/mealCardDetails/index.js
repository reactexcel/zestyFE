import React from "react";
import "./index.scss";

const MealCardDetails = ({ source, heading, description }) => {
  return (
    <div className='card-item'>
      <div className='card_img'>
        <img
          src={source}
          alt='create-menu'
          className='mt-2 card_img_item'
        ></img>
      </div>
      <div>
        <p className='card-heading text-center'>{heading}</p>
        <p className='card-desc text-center'>{description}</p>
      </div>
    </div>
  );
};

export default MealCardDetails;
