import React from "react";
import Hot_Sandwich from "src/assets/images/Hot_Sandwich.svg";
import "./index.scss";

function Subscription({
  mealImage = Hot_Sandwich,
  mealName,
  mealId,
  mealTime,
}) {
  return (
    <div className='subscription_item'>
      <img
        src={mealImage}
        width='250px'
        height='250px'
        className='subscription_item_img'
        alt='mealpicture'
      />
      <p key={mealId}>
        {mealTime} :<p className='subscription_item_name'>{mealName}</p>
      </p>
    </div>
  );
}
export default Subscription;
