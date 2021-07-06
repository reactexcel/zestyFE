import React from "react";
import { checkDateRange, formatDate } from "src/Utils/checkDateRange";
import './index.scss'

const DateRange = ({ startdate, enddate }) => {
  return (
    <div className='meal-active-plan-text'>
      Your {checkDateRange(startdate, enddate) && "Current "}
      Food Plan : From {formatDate(startdate)}
      &nbsp; to &nbsp;
      {formatDate(enddate)}
    </div>
  );
};

export default DateRange;
