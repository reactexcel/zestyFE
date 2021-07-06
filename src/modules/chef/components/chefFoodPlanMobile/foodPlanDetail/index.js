import React from "react";
import "./index.scss";

const FoodPlanDetail = ({
  customerName,
  dishName,
  mealTiming,
  adultCount,
  childrenCount,
  time,
}) => {
  return (
    <div>
      <p className='main_food_heading'>{mealTiming}</p>
      <div className='foodTiming d-flex justify-content-between'>
        <p className='timing_heading'>Time food should be prepared by</p>
        <div className='timing text-right'>{time}</div>
      </div>
      <div className='customer d-flex justify-content-between py-3'>
        <div className='customer_name'>Customer Name</div>
        <div className='customer_details text-right'>{customerName}</div>
      </div>
      <div className='customer row py-3 '>
        <div className='customer_name col-6'>Dish Name</div>
        <div className='customer_details col-6 text-right'>{dishName}</div>
      </div>
      <div className='customer row py-3 '>
        <div className='customer_name col-6'>People</div>
        <div className='customer_details col-6 text-right'>
          {adultCount ? `${adultCount} Adults` : null} <br />
          {childrenCount ? `${childrenCount} children ` : null}{" "}
        </div>
      </div>
    </div>
  );
};

export default FoodPlanDetail;
