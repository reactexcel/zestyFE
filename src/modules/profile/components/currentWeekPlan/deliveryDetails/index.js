import React, { useState, useEffect } from "react";
import "./index.scss";

function DeliveryDetails({ ShowFoodPlanStaus }) {
  const [deliveryDetails, setDeliveryDetails] = useState({});

  useEffect(() => {
    if (ShowFoodPlanStaus?.data) {
      setDeliveryDetails(ShowFoodPlanStaus?.data?.deliveryDetails);
    }
  }, [ShowFoodPlanStaus]);

  return (
    <>
      <p className='active-plan mt-4'> Your Delivery Details</p>
      <div className='questionnaires-details'>
        <div className='row ml-2'>
          <div>
            <div className='d-flex flex-wrap'>
              <p className='choices-list '>ReciverName </p>:
              <p className='pl-4'>
                {deliveryDetails?.Receiver_Name?.first}{" "}
                {deliveryDetails?.Receiver_Name?.last}
              </p>
            </div>
            {deliveryDetails?.Receiver_Email ? (
              <div className='d-flex flex-wrap'>
                <p className='choices-list'>Receiver-Email </p>:
                <p className='pl-4'>{deliveryDetails?.Receiver_Email}</p>
              </div>
            ) : null}
            <div className='d-flex'>
              <p className='choices-list'>Shipping-Address </p>:
              <p className='pl-4'>{deliveryDetails?.Shipping_Address}</p>
            </div>
            <div className='d-flex'>
              <p className='choices-list'>Shipping-State </p>:
              <p className='pl-4'>{deliveryDetails?.Shipping_State}</p>
            </div>
          </div>
          <div className=' col-lg-2 col-md-6 mb-2'></div>
        </div>
      </div>
    </>
  );
}
export default DeliveryDetails;
