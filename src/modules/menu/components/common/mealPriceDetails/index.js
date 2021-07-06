import React from "react";
import "./index.scss";

const MealPriceDetail = ({ mealTotalprices }) => {
  return (
    <div className='d-flex flex-column justify-content-end'>
      <p className='item-price'>Price : AED {mealTotalprices}</p>
    </div>
  );
};

export default MealPriceDetail;
