import React from "react";
import MenuTypeDetails from "../menuTypeDetails";
import EmptyState from "src/modules/menu/components/common/emptyState";

const MenuDetails = ({
  foodList = {},
  selectedFoodType,
  day,
  handleSwipeDish,
  handleItemCount,
  handelAddExtra,
  sideDishDetails,
  isSideDishOpen,
  handleSelectExtraDish,
  handleRemoveDishes,
  paginationedList,
  handleFoodSwipe,
  getClassName,
  selectedMealTypes,
  isMobile = false,
}) => {
  const { Breakfast, Lunch, Dinner } = foodList;
  const {
    breakfastDots: breakfastPaginatedList,
    lunchDots: lunchPaginatedList,
    dinnerDots: dinnerPaginatedList,
  } = paginationedList;
  const { isSwipe, timeSelected, daySelected } = selectedFoodType;

  return (
    <>
      {selectedMealTypes.includes(`Breakfast`) ? (
        <div>
          {Breakfast?.length > 0 ? (
            <MenuTypeDetails
              foodList={Breakfast}
              foodType='Breakfast'
              day={day}
              handleItemCount={handleItemCount}
              handelAddExtra={handelAddExtra}
              sideDishDetails={sideDishDetails}
              isSideDishOpen={isSideDishOpen}
              handleSelectExtraDish={handleSelectExtraDish}
              handleRemoveDishes={handleRemoveDishes}
              paginationedList={breakfastPaginatedList}
              handleFoodSwipe={handleFoodSwipe}
              selectedFoodType={selectedFoodType}
              getClassName={getClassName}
              isMobile={isMobile}
            />
          ) : (
            <div>
              {Breakfast?.length === 0 && (
                <EmptyState
                  day={day}
                  foodType={"Breakfast"}
                  handleSwipeDish={handleSwipeDish}
                  isDefault={Breakfast?.length === 0 && !isSwipe}
                  isSwiped={
                    Breakfast?.length === 0 &&
                    timeSelected === "Dinner" &&
                    daySelected === day &&
                    isSwipe
                  }
                />
              )}
            </div>
          )}
        </div>
      ) : null}
      {selectedMealTypes.includes(`Lunch`) ? (
        <div>
          {Lunch?.length > 0 ? (
            <MenuTypeDetails
              foodList={Lunch}
              foodType='Lunch'
              day={day}
              handleItemCount={handleItemCount}
              handelAddExtra={handelAddExtra}
              sideDishDetails={sideDishDetails}
              isSideDishOpen={isSideDishOpen}
              handleSelectExtraDish={handleSelectExtraDish}
              handleRemoveDishes={handleRemoveDishes}
              paginationedList={lunchPaginatedList}
              handleFoodSwipe={handleFoodSwipe}
              selectedFoodType={selectedFoodType}
              getClassName={getClassName}
              isMobile={isMobile}
            />
          ) : (
            <EmptyState
              day={day}
              foodType={"Lunch"}
              handleSwipeDish={handleSwipeDish}
              isDefault={Lunch?.length === 0 && !isSwipe}
              isSwiped={
                Lunch?.length === 0 &&
                timeSelected === "Lunch" &&
                daySelected === day &&
                isSwipe
              }
            />
          )}
        </div>
      ) : null}
      {selectedMealTypes.includes(`Dinner`) ? (
        <div>
        
          {Dinner?.length > 0 ? (
            <MenuTypeDetails
              foodList={Dinner}
              foodType='Dinner'
              day={day}
              handleItemCount={handleItemCount}
              handelAddExtra={handelAddExtra}
              sideDishDetails={sideDishDetails}
              isSideDishOpen={isSideDishOpen}
              handleSelectExtraDish={handleSelectExtraDish}
              handleRemoveDishes={handleRemoveDishes}
              paginationedList={dinnerPaginatedList}
              handleFoodSwipe={handleFoodSwipe}
              selectedFoodType={selectedFoodType}
              getClassName={getClassName}
              isMobile={isMobile}
            />
          ) : (
            <div>
              {console.log(Dinner?.length === 0 &&daySelected === day, "CCCCCCCCC",isSwipe,daySelected,day)}
              <EmptyState
                day={day}
                foodType={"Dinner"}
                handleSwipeDish={handleSwipeDish}
                isDefault={Dinner?.length === 0}
                isSwiped={
                  Dinner?.length === 0 &&
                  timeSelected === "Dinner" &&
                  daySelected === day &&
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
