import React from "react";
import IncreaseIcon from "src/assets/images/Group.svg";
import DecreaseIcon from "src/assets/images/minus.svg";
import "./index.scss";

const CountButton = ({ type, count, handleCountChange }) => {
  const { adultCount, childrenCount } = count;
  return (
    <button type='button' className='peoples-count' value='Personal'>
      <div className='d-flex flex-row justify-content-around'>
        {type === "Adults" ? (
          adultCount ? (
            <img
              src={DecreaseIcon}
              alt='DecreaseIcon'
              onClick={() => handleCountChange(type, "subtract")}
            />
          ) : null
        ) : childrenCount ? (
          <img
            src={DecreaseIcon}
            alt='DecreaseIcon'
            onClick={() => handleCountChange(type, "subtract")}
          />
        ) : null}
        {`${type} (${type === "Adults" ? adultCount : childrenCount})`}
        <img
          src={IncreaseIcon}
          alt='IncreaseIcon'
          onClick={() => handleCountChange(type, "add")}
        />
      </div>
    </button>
  );
};

export default CountButton;
