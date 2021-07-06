import React from "react";
import { getData } from "src/Utils/localStorageUtil";
import "./index.scss";

function ChoosePlan({ handleSelectMembership }) {
  return (
    <div className='choose-plan-card d-flex flex-column py-3 pl-3'>
      <div className='plan-type d-flex justify-content-start'>
        <p className='plan-type-text'>Choose Membership -</p>
        <select
          className='choose-plan-button'
          onChange={(e) => handleSelectMembership(e)}
        >
          <option value='weekly'>Weekly</option>
          <option value='monthly'>Monthly</option>
          <option value='yearly'>Yearly</option>
        </select>
      </div>
      <div>
        <div className='plan-type d-flex justify-content-start mt-2'>
          <p className='plan-type-text'>
            Total Amount - AED {getData("AllFoodList")['totalAmount']}
          </p>
        </div>
      </div>
      <div className='plan-type d-flex justify-content-start my-2'>
        <p className='plan-type-text'>Payment -</p>
        <p className='plan-type-text pl-3'>Cash On Delivery</p>
      </div>
    </div>
  );
}

export default ChoosePlan;
