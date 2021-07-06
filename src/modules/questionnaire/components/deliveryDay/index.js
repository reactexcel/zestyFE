import React from "react";
import DeliveryDayDetails from "src/modules/questionnaire/components/deliveryDay/deliveryDayDetails";
import "./index.scss";

export default function DeliveryDay({ deliveryDays, handleAlert }) {
  const handleMealTiming = () => {};

  return (
    <div>
      <div className='container-sp'>
        <DeliveryDayDetails
          handleDeliveryDay={handleMealTiming}
          deliveryDays={deliveryDays}
          handleAlert={handleAlert}
        />
      </div>
    </div>
  );
}
