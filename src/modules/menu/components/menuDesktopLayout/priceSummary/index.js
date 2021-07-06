import React from "react";
import PriceDetail from "../priceDetail";
import "./index.scss";

const PriceSummary = ({ totalPrice, handleCheckout }) => {
  return (
    <div className='px-3 py-4 price_summary'>
      <p className='total_price_heading'>Summary</p>
      <hr />
      <PriceDetail title='Subtotal' amount={totalPrice} />
      <PriceDetail title='Delivery' amount='0' />
      <PriceDetail title='Order Total' amount={totalPrice} />
      <button className='proceed_for_checkout' onClick={handleCheckout}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default PriceSummary;
