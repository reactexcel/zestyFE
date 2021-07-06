import React from "react";
import swip_img from "src/assets/images/swip_img.svg";
import "./index.scss";

const SwipeFood = ({ day, foodType, handleFoodSwipe, isMobile = false }) => {
  return (
    <div
      className={`d-flex ${
        !isMobile
          ? "swipe_button_main"
          : "justify-content-end swipe_button_main_mobile"
      }`}
    >
      <button
        onClick={() => handleFoodSwipe(day, foodType)}
        className={`${!isMobile ? "mt-5" : "mr-3"}`}
      >
        Swipe <img src={swip_img} alt='swip_img' className='pl-2' />
      </button>
    </div>
  );
};

export default SwipeFood;
