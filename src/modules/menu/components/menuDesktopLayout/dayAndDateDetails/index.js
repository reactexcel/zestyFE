import React, { memo } from "react";
import moment from "moment";
import "./index.scss";

const DayAndDateDetails = ({ day, date }) => {
  return (
    <p className='menu_date mt-2'>{`${day.toUpperCase()}  ${moment(date).format(
      "Do MMM YYYY"
    )}`}</p>
  );
};

export default memo(DayAndDateDetails);
