import React, { memo } from "react";
import "./index.scss";

const SelectDay = ({ day, handleSelectSDay }) => {
  return (
    <div className='d-flex justify-content-between align-items-center mx-3 '>
      <div>
        <p className='menu-day'>{day}</p>
      </div>
      <div>
        <p className='select-day' onClick={handleSelectSDay}>
          Select A Day
        </p>
      </div>
    </div>
  );
};

export default memo(SelectDay);
