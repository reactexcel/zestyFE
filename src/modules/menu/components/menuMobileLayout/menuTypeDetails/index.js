import React from "react";
import DishDetailCard from "src/modules/menu/components/common/dishDetailCard";
import Pagination from "src/modules/menu/components/common/pagination";
import SwipeFood from "src/modules/menu/components/common/swipeFood";
import MealTypeMessage from "src/modules/menu/components/menuMobileLayout/mealTypeMessage";

const MenuTypeDetails = ({
  foodList,
  foodType,
  day,
  handleItemCount,
  handelAddExtra,
  sideDishDetails,
  isSideDishOpen,
  handleSelectExtraDish,
  handleRemoveDishes,
  paginationedList,
  handleFoodSwipe,
  getClassName,
  isMobile = false,
}) => {
  return (
    <>
      {foodList?.length && <MealTypeMessage foodType={foodType} />}

      {foodList?.map((val, i) => {
        return (
          <div className={getClassName(val?._id)} key={i}>
            <div className='d-flex flex-column '>
              <DishDetailCard
                dishDetails={val}
                day={day}
                foodType={foodType}
                handleItemCount={handleItemCount}
                handelAddExtra={handelAddExtra}
                additionalFoodItem={sideDishDetails}
                isSideDishOpen={isSideDishOpen}
                handleSelectExtraDish={handleSelectExtraDish}
                handleRemoveDishes={handleRemoveDishes}
                isMobile={isMobile}
              />
            </div>
            <div className='d-flex justify-content-between align-items-center my-3'>
              <Pagination paginationList={paginationedList} />
              <SwipeFood
                day={day}
                foodType={foodType}
                handleFoodSwipe={handleFoodSwipe}
                isMobile={isMobile}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MenuTypeDetails;
