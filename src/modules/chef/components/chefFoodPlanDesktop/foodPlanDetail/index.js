import React, { Fragment } from "react";
import "./index.scss";

const FoodPlanDetail = ({
  customerName,
  dishName,
  adultCount,
  childrenCount,
  time,
}) => {
  return (
    <Fragment>
      <div className='py-3 customer_names item_list  text-center'>
        {customerName}
      </div>
      <div className='py-3 customer_dish item_list text-center'>{dishName}</div>
      <div className='py-3 customer_adult_count item_list text-center'>
        <p>Adult :{adultCount}</p>
        <p>{childrenCount ? `Children : ${childrenCount}` : null} </p>
      </div>
      <div className='py-3  customer_timing item_list text-center'>
        Time food should be ready by : {time}
      </div>
    </Fragment>
  );
};

export default FoodPlanDetail;
