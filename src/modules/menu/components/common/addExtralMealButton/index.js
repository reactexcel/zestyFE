import React from "react";
import ExtraIcon from "src/assets/images/Frame_385.svg";

const AddExtraMealButton = ({ mealId, foodType, day, handelAddExtra }) => {
  return (
    <img
      src={ExtraIcon}
      alt='addExtraMeal'
      onClick={() => handelAddExtra(mealId, foodType, day)}
    />
  );
};

export default AddExtraMealButton;
