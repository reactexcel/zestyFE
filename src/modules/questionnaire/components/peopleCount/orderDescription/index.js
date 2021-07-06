import React, { memo } from "react";
import "./index.scss";

const OrderDescription = ({ isNotSelected = false }) => {
  return (
    <>
      <div className='orderDescription text-center mb-2'>
        How many people are you ordering for ?
      </div>
      <div className=' about_people text-center mb-5 pt-2'>
        Whether you are ordering just for yourself or eating with family, we are
        here to make each meal more beautiful and memorable.
      </div>
      {isNotSelected ? (
        <p className='text-center text-danger'>Please Add Atleast One people</p>
      ) : null}
    </>
  );
};

export default memo(OrderDescription);
