import React from "react";
import "./index.scss";

const DeliveryDayButton = ({ day, handledeliveryday, value }) => {
  return (
    <button
      className={`btn  ${day?.indexOf(value) >= 0 ? "dayActive" : "day"} `}
      value='Monday'
      onClick={(e) => handledeliveryday(value)}
    >
      {value.substring(0, 3).toUpperCase()}
    </button>
  );
};

export default DeliveryDayButton;
