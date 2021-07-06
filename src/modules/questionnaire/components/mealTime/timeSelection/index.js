import React from "react";
import {
  breakFastTimingHour,
  lunchTimingHour,
  dinnerTimingHour,
} from "src/Utils/questionniars";
import "./index.scss";

const TimeSelection = ({
  QuestionnairesStatus,
  title,
  handleBreakfastClick,
  handleLunchClick,
  handleDinnerClick,
  handleDietary,
  startBreakFast,
  startLunch,
  startDinner,
}) => {
  return (
    <div className='select-time'>
      <p className='select-time-text text-start pl-3 pt-4'>
        Select a time between
      </p>
      <div className='d-flex justify-content-around set-time mx-3 my-4'>
        {title == "Breakfast" ? (
          <>
            <select
              onChange={(e) => handleBreakfastClick(e)}
              value={startBreakFast}
            >
              {breakFastTimingHour.map((val, i) => {
                return (
                  <option value={val} key={i}>
                    {val}
                  </option>
                );
              })}
            </select>
          </>
        ) : title == "Lunch" ? (
          <>
            <select onChange={(e) => handleLunchClick(e)} value={startLunch}>
              {lunchTimingHour.map((val, i) => {
                return (
                  <option value={val} key={i}>
                    {val}
                  </option>
                );
              })}
            </select>
          </>
        ) : (
          <>
            <select onChange={(e) => handleDinnerClick(e)} value={startDinner}>
              {dinnerTimingHour.map((val, i) => {
                return (
                  <option value={val} key={i}>
                    {val}
                  </option>
                );
              })}
            </select>
          </>
        )}
      </div>
      <div className='confirm-button my-4 d-flex justify-content-center'>
        <button className=' ' onClick={() => handleDietary(title)}>
          {QuestionnairesStatus?.mealType?.indexOf(title) >= 0
            ? "Cancel"
            : "Confirm"}
        </button>
      </div>
    </div>
  );
};

export default TimeSelection;
