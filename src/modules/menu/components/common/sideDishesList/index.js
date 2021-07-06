import React from "react";
import "./index.scss";

const SideDishesList = ({
  sideDishesList,
  day,
  foodType,
  mealId,
  handleSelectExtraDish,
  handleItemCount,
  isMobile = false,
}) => {
  return (
    <div
      className={`${
        !isMobile ? "food_complement" : "food_complement_mobile my-2"
      }`}
    >
      {sideDishesList?.length > 0 ? (
        <div>
          {sideDishesList.map(({ name, _id, price }) => (
            <div
              key={_id}
              className='p-2 food_complement_list'
              id='side_dishes_list'
              onClick={() => {
                handleSelectExtraDish(name, foodType, day, mealId, _id, price);
                handleItemCount(mealId, day, _id, "Add", foodType, name, price);
              }}
            >
              {name}
            </div>
          ))}
        </div>
      ) : (
        <p className='text-center text-danger'>No Side dishes for this food</p>
      )}
    </div>
  );
};

export default SideDishesList;
