import React from "react";
import EmptyState from "src/modules/menu/components/common/emptyState";
import Pagination from "src/modules/menu/components/common/pagination";
import SwipeFood from "src/modules/menu/components/common/swipeFood";
import MealType from "src/modules/menu/components/menuDesktopLayout/mealType";
import DishDetailCard from "src/modules/menu/components/common/dishDetailCard";
import "./index.scss";

const MenuDetails = ({
  foodType,
  menuItemsList,
  swipeSelection,
  handleSwipeDish,
  selectedMealTypes,
  handleRemoveDishes,
  handleItemCount,
  additionalFoodItem,
  handleFoodSwipe,
  foodData,
  handelAddExtra,
  handleSelectExtraDish,
  paginationedList,
}) => {
  const { timeSelected = "", isSwipe = false } = swipeSelection;
  const { isOpen, id, type, currentday } = additionalFoodItem;
  // const isMealNotAvailableOnSwipe =
  //   menuItemsList?.length === 0 && timeSelected === foodType && isSwipe;

  const isSideDishOpen = (currentMealId) => {
    const checkOpen =
      isOpen &&
      id == currentMealId &&
      type == foodType &&
      foodData.day == currentday
        ? true
        : false;

    return checkOpen;
  };
console.log(menuItemsList,foodData.day,'AAAAAAAAAAAAQQQQ')
  return (
    <>
      {selectedMealTypes.includes(`${foodType}`) ? (
        <div>
          {menuItemsList?.length > 0 ? (
            <div className='menu-list-items'>
              <MealType menuItemsList={menuItemsList} foodType={foodType} />

              <div className='d-flex flex-column justify-content-center '>
                <div className='d-flex flex-row flex-wrap'>
                  <div className='w-100'>
                    <div className='d-flex'>
                      {menuItemsList?.map((rel) => {
                        return (
                          <div className='menu-item-card-list' key={rel._id}>
                            <DishDetailCard
                              dishDetails={rel}
                              day={foodData.day}
                              foodType={foodType}
                              dishDetails={rel}
                              handleItemCount={handleItemCount}
                              handelAddExtra={handelAddExtra}
                              isSideDishOpen={isSideDishOpen}
                              handleSelectExtraDish={handleSelectExtraDish}
                              handleRemoveDishes={handleRemoveDishes}
                            />
                          </div>
                        );
                      })}
                      <SwipeFood
                        day={foodData.day}
                        foodType={foodType}
                        handleFoodSwipe={handleFoodSwipe}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Pagination paginationList={paginationedList} />
            </div>
          ) : (
            <div>
              <EmptyState
                day={foodData.day}
                foodType={foodType}
                handleSwipeDish={handleSwipeDish}
                isDefault={menuItemsList?.length === 0 && !isSwipe}
                isSwiped={
                  menuItemsList?.length === 0 &&
                  timeSelected === foodType &&
                  isSwipe
                }
              />
            </div>
          )}
        </div>
      ) : null}
    </>
  );
};

export default MenuDetails;
