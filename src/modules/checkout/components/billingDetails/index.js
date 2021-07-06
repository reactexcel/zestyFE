import React from "react";
import { Spinner } from "react-bootstrap";
import InputDetails from "src/components/common/input";
import { ChevronLeft } from "react-bootstrap-icons";
import AlertMessage from "../alert";
import "./index.scss";

function BillingDetails({
  address,
  setAddress,
  toggleAlert,
  alertStatus,
  handleCheckout,
  saveFoodPlanState,
  handleBack,
}) {
  const {
    firstName = "",
    lastName = "",
    email = "",
    shippingAddress = "",
    city = "",
    mobile = "",
    mobileAlert = false,
  } = address;

  return (
    <div className='billing-details'>
      {saveFoodPlanState?.isError && (
        <div style={{ margin: "10px" }}>
          <button className='backtoQuestionnaire' onClick={handleBack}>
            <ChevronLeft /> Back to Questionnaire
          </button>
          <AlertMessage
            showA={alertStatus}
            toggleShowA={toggleAlert}
            autohide={true}
          />
        </div>
      )}

      <form onSubmit={(e) => handleCheckout(e)}>
        <div className='row'>
          <div className='col-lg-6 mb-3'>
            <p className='field-name'>First Name</p>
            <InputDetails
              placeholder='First Name'
              currentValue={firstName}
              isCheckout={true}
              handleOnChange={(e) => {
                setAddress({ ...address, firstName: e.target.value });
              }}
            />
          </div>
          <div className='col-lg-6 mb-3'>
            <p className='field-name'>Last Name</p>
            <InputDetails
              placeholder='Last Name'
              currentValue={lastName}
              isCheckout={true}
              inputType='text'
              handleOnChange={(e) => {
                setAddress({ ...address, lastName: e.target.value });
              }}
            />
          </div>
          <div className='col-lg-12 mb-3'>
            <p className='field-name'>Email Address</p>
            <InputDetails
              currentValue={email}
              inputType='email'
              isCheckout={true}
              handleOnChange={(e) => {
                setAddress({ ...address, email: e.target.value });
              }}
            />
          </div>
          <div className='col-lg-6 mb-3'>
            <p className='field-name'>Delivery Address</p>
            <InputDetails
              currentValue={shippingAddress}
              inputType='text'
              isCheckout={true}
              handleOnChange={(e) => {
                setAddress({ ...address, shippingAddress: e.target.value });
              }}
            />
          </div>
          <div className='col-lg-6 mb-3'>
            <p className='field-name'> State / City</p>
            <InputDetails
              currentValue={city}
              inputType='text'
              isCheckout={true}
              handleOnChange={(e) => {
                setAddress({ ...address, city: e.target.value });
              }}
            />
          </div>
          <div className='col-lg-6 mb-3'>
            <p className='field-name'>Phone No</p>
            <div className='input-details'>
              <input
                value={mobile}
                required
                type='text'
                name='country_code'
                title='Enter valid mobile no'
                pattern='[0-9]{0,1}[0-9]{9}'
                onChange={(e) => {
                  setAddress({ ...address, mobile: e.target.value });
                }}
              />
            </div>
            {mobileAlert ? (
              <p className='text-danger'>please enter valid mobile no*</p>
            ) : null}
          </div>
        </div>
        <div className='checkout-button'>
          <button disabled={saveFoodPlanState?.isError} type='submit'>
            {saveFoodPlanState?.isLoading ? (
              <Spinner animation='border' variant='light' size='md' />
            ) : (
              "Checkout"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
export default BillingDetails;
