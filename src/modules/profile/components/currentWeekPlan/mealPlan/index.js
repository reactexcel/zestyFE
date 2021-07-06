import React from "react";
import MealPlanDetails from "src/modules/profile/components/mealPlanDetails";
import "./index.scss";

const MealPlan = (props) => {
  const { foodPlanMenu: daysMenu } = props;
  return (
    <>
      <div className='meal-active-plan-text'>
        {daysMenu?.length === 0 &&
          "You haven't selected your next week food plan"}
        {daysMenu?.length > 0 && <></>}
      </div>

      <div className='d-flex flex-wrap justify-content-around'>
        {daysMenu &&
          daysMenu.map((value, i) => {
            return (
              <div className='subscription-box' key={i}>
                <MealPlanDetails mealDetails={value} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default MealPlan;
