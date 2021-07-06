import React from "react";
import Checkout_Vector from "src/assets/images/Checkout_Vector.svg";
import ChoosePlan from "src/modules/checkout/components/choosePlan";
import BillingDetails from "src/modules/checkout/components/billingDetails";
import "./index.scss";

const CheckoutDetails = ({
  membership,
  handleSelectMembership,
  address,
  setAddress,
  toggleAlert,
  alertStatus,
  foodDetailsList,
  handleCheckout,
  saveFoodPlanState,
  handleBack,
}) => {
  return (
    <div className='checkout-page'>
      <p className='checkout-paging'>
        Home <img src={Checkout_Vector} alt='Checkout_Vector' /> Checkout
      </p>
      <p className='billing-heading'>Billing Details</p>
      <div className='row'>
        <div className='col-lg-8 mt-5'>
          <BillingDetails
            membership={membership}
            address={address}
            setAddress={setAddress}
            toggleAlert={toggleAlert}
            alertStatus={alertStatus}
            foodDetailsList={foodDetailsList}
            handleCheckout={handleCheckout}
            saveFoodPlanState={saveFoodPlanState}
            handleBack={handleBack}
          />
        </div>
        <div className='col-lg-4 my-5'>
          <ChoosePlan handleSelectMembership={handleSelectMembership} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutDetails;
