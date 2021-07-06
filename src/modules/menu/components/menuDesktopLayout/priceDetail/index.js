import React, { memo } from "react";
import "./index.scss";

const PriceDetail = ({ title, amount }) => {
  return (
    <div className='row'>
      <p className='col-6 total_price_count'>{title}</p>
      <p className='col-6 total_price_count'>AED {amount}</p>
    </div>
  );
};

export default memo(PriceDetail);
