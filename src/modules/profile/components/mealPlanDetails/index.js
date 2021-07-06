import React from "react";
import MealPlanDetailsBox from "../mealPlanDetailsBox";
import "./index.scss";

const MealPlanDetails = ({ mealDetails }) => {
  const mealDay = Object.keys(mealDetails)[0];
  const mealDetailsList = Object.values(mealDetails);
  return (
    <p className='text-center subscription_day'>
      {mealDay}
      <br />
      <div className='d-flex flex-column justify-content-start align-content-start'>
        {mealDetailsList.map((mealval) => {
          return (
            mealval.Breakfast?.length > 0 &&
            mealval?.Breakfast?.map((breakfasts) => (
              <MealPlanDetailsBox
                key={breakfasts._id}
                mealTime='Breakfast'
                mealImage={
                  breakfasts?.images.length > 0 &&
                  breakfasts?.images[0]?.secure_url
                }
                mealName={breakfasts.name}
                mealId={breakfasts._id}
              />
            ))
          );
        })}
        {mealDetailsList.map((mealval) => {
          return (
            mealval.Lunch?.length > 0 &&
            mealval?.Lunch?.map((lunch) => (
              <MealPlanDetailsBox
                key={lunch._id}
                mealTime='Lunch'
                mealImage={
                  lunch?.images.length > 0 && lunch?.images[0]?.secure_url
                }
                mealName={lunch.name}
                mealId={lunch._id}
              />
            ))
          );
        })}
        {mealDetailsList.map((mealval) => {
          return (
            mealval.Dinner?.length > 0 &&
            mealval?.Dinner?.map((dinner) => (
              <MealPlanDetailsBox
                key={dinner._id}
                mealTime='Dinner'
                mealImage={
                  dinner?.images.length > 0 && dinner?.images[0]?.secure_url
                }
                mealName={dinner.name}
                mealId={dinner._id}
              />
            ))
          );
        })}
      </div>
    </p>
  );
};

export default MealPlanDetails;
