import React from "react";
import Spice from "src/assets/images/Spice.svg";
import "./index.scss";

const SpiceLevelButton = ({ spiceLevel, handleSpiceLevel, val }) => {
  return (
    <button
      type='button'
      className={`btn  ${
        spiceLevel?.indexOf(val) >= 0 ? "spiceLevel-active" : "spiceLevel"
      }`}
      value='Mild'
      onClick={(e) => handleSpiceLevel(val)}
    >
      {val == "Mild" ? (
        <div>
          <img src={Spice} alt='Spicy' />
        </div>
      ) : val == "Medium" ? (
        <div className='d-flex justify-content-center'>
          <img src={Spice} alt='Spicy' />
          <img src={Spice} alt='Spicy' />
        </div>
      ) : (
        <div className='d-flex justify-content-center'>
          <img src={Spice} alt='Spicy' />
          <img src={Spice} alt='Spicy' />
          <img src={Spice} alt='Spicy' />
        </div>
      )}
      {val}
    </button>
  );
};

export default SpiceLevelButton;
