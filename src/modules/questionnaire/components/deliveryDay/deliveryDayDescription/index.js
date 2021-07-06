import React from "react";
import "./index.scss";

const DeliveryDayDescription = ({ isSelected = false }) => {
  return (
    <>
      <div className='day-description text-center'>
        What days would you like the food to be delivered?
      </div>
      {isSelected ? (
        <p className='text-center text-danger'>Please Select Atleast One Day</p>
      ) : null}
    </>
  );
};

export default DeliveryDayDescription;
