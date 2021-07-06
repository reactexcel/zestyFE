import React from "react";
import "./index.scss";

const RemoveDishes = ({
  mealId,
  day,
  foodType,
  handleRemoveDishes,
  isMobile = false,
}) => {
  return (
    <div className={`${!isMobile ? "remove_dishes" : "remove_dishes_mobile"}`}>
      <span
        className='my-2'
        onClick={() => handleRemoveDishes(mealId, day, foodType)}
      >
        Remove
      </span>
    </div>
  );
};

export default RemoveDishes;
