import React, { memo } from "react";
import "./index.scss";

const MealType = ({ menuItemsList, foodType }) => {
  return (
    <>
      {menuItemsList?.length ? (
        <p className='menu-list-heading'>{foodType} </p>
      ) : null}
    </>
  );
};

export default memo(MealType);
