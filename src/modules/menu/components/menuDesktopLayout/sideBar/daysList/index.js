import React, { memo } from "react";
import "./index.scss";

const DaysList = ({ selectedDay, daysAnddDates }) => {
  const { day: currentDay, date } = daysAnddDates;
  return (
    <li
      className={
        selectedDay == currentDay ? "active-list my-2" : "inactive-list my-2"
      }
    >
      <span>
        <div className=' px-3 float-left'>
          <span className='float-left pt-1'>{currentDay}</span>
          <p className='date'>{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</p>
        </div>
      </span>
    </li>
  );
};

export default memo(DaysList);
