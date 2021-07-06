import React, { memo } from "react";
import "./index.scss";

const EmptyState = ({
  day,
  handleSwipeDish,
  foodType,
  isDefault = false,
  isSwiped = false,
}) => {
  return (
    <>
      {isSwiped ? (
        <div className='d-flex my-3 flex-column mr-5'>
          <p>No More Dishes available for {foodType} !!!</p>
          <button
            className='loadAllData'
            onClick={() => handleSwipeDish([], foodType, day)}
          >
            Load Previous Dishes
          </button>
        </div>
      ) : isDefault ? (
        <p className='my-4'>
          Unfortunately, no dish matching your preference on {day} in {foodType}
        </p>
      ) : null}
    </>
  );
};

export default memo(EmptyState);
