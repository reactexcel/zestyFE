import React, { Fragment } from "react";
import "./index.scss";

const ChefMessage = ({ chefName, isDayAvailable }) => {
  return (
    <Fragment>
      <p className='chef_name pt-3'>Hey {chefName},</p>
      <p className='chef_message'>
        Your menu for the {isDayAvailable == 0 ? "Week" : "day"}{" "}
      </p>
    </Fragment>
  );
};

export default ChefMessage;
