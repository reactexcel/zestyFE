import React from "react";
import { BiPlus, BiX, BiMinus } from "react-icons/bi";
import "./index.scss";

const StandardMeal = ({
  mealId,
  day,
  foodType,
  standardDishDetails,
  handleItemCount,
  isMobile = false,
}) => {
  const {
    name: standardMealName,
    price: standardMealPrice,
    default_count: standardMealCount,
    _id: standardMealId,
  } = standardDishDetails;
  return (
    <div className={`d-flex extra_yoghurt_list mx-2 ${isMobile && "my-2"}`}>
      <span className='py-1'>
        <BiPlus
          size='20'
          color='#fff'
          onClick={() =>
            handleItemCount(
              mealId,
              day,
              standardMealId,
              "Add",
              foodType,
              standardMealName,
              standardMealPrice
            )
          }
        />
      </span>
      <span className='px-1 py-1'>{standardMealCount}</span>
      <span className='px-1 py-1'>{standardMealName}</span>
      {standardMealCount > 1 ? (
        <span className='py-1'>
          <BiMinus
            size='20'
            color='#fff'
            onClick={() =>
              handleItemCount(
                mealId,
                day,
                standardMealId,
                "Substract",
                foodType,
                standardMealName,
                standardMealPrice
              )
            }
          />
        </span>
      ) : null}
      <span className='py-1'>
        <BiX
          size='20'
          color='#fff'
          onClick={() =>
            handleItemCount(
              mealId,
              day,
              standardMealId,
              "Delete",
              foodType,
              standardMealName,
              standardMealPrice
            )
          }
        />
      </span>
    </div>
  );
};

export default StandardMeal;
