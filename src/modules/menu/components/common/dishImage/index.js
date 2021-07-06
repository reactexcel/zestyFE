import React, { memo } from "react";
import Hot_Sandwich from "src/assets/images/Hot_Sandwich.svg";
import "./index.scss";

const DishImage = ({ image = Hot_Sandwich, isMobile = false }) => {
  return (
    <div className={`menu-item-card-img`}>
      <img src={image} alt='dishimage' width='100%' className='common-image' />
    </div>
  );
};

export default memo(DishImage);
