import React from "react";
import StandardDish from "src/modules/menu/components/common/standardMeal";
import AddExtraMealButton from "src/modules/menu/components/common/addExtralMealButton";
import SideDishesList from "src/modules/menu/components/common/sideDishesList";
import "./index.scss";

const DishDetails = ({
  dishDetails,
  day,
  foodType,
  handelAddExtra,
  handleItemCount,
  handleSelectExtraDish,
  isSideDishOpen,
  isMobile = false,
}) => {
  const { name, standard_meal, side_dish, _id: mealId } = dishDetails;
  return (
    <div className='item-card-header'>
      <p className={`item-name ${isMobile && "mobile-font-size"}`}>{name}</p>
      <div className=''>
        {standard_meal?.length > 0 ? (
          <div className='d-flex flex-wrap mx-1'>
            {standard_meal?.map((stndmeal) =>
              stndmeal.default_count ? (
                <StandardDish
                  standardDishDetails={stndmeal}
                  mealId={mealId}
                  day={day}
                  foodType={foodType}
                  handleItemCount={handleItemCount}
                  isMobile={isMobile}
                />
              ) : null
            )}
          </div>
        ) : null}
      </div>
      <AddExtraMealButton
        day={day}
        foodType={foodType}
        mealId={mealId}
        handelAddExtra={handelAddExtra}
        isMobile={isMobile}
      />

      {isSideDishOpen(mealId) ? (
        <SideDishesList
          sideDishesList={side_dish}
          day={day}
          foodType={foodType}
          mealId={mealId}
          handleSelectExtraDish={handleSelectExtraDish}
          handleItemCount={handleItemCount}
          isMobile={isMobile}
        />
      ) : null}
    </div>
  );
};

export default DishDetails;
