import React from "react";
import FoodPlanDetail from "src/modules/chef/components/chefFoodPlanMobile/foodPlanDetail";
import DayDetail from "src/modules/chef/components/chefFoodPlanMobile/dayDetail";
import { updatedMealTime } from "src/Utils/chefPlan";
import "./index.scss";

function ChefPlanTableMobile({ checfFoodPlanData }) {
  const getClassName = (mealTime) => {
    return `${
      mealTime === "Dinner"
        ? "dinner px-3 py-3"
        : mealTime === "Lunch"
        ? "lunch px-3 py-3"
        : "breakfast px-3 py-3"
    }`;
  };
  return (
    <div className='mobile_chef_table'>
      {Object.keys(checfFoodPlanData).map((val, i) => (
        <div>
          <DayDetail day={val} />
          {Object.keys(checfFoodPlanData[val]).map((el) => (
            <div className={getClassName(el)}>
              {checfFoodPlanData[val][el].map((kl) => (
                <div>
                  <FoodPlanDetail
                    customerName={kl.Customer_Name}
                    dishName={kl.dish}
                    adultCount={kl.adult_count}
                    childrenCount={kl.children_count}
                    mealTiming={el}
                    time={updatedMealTime(kl.Timing)}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
export default ChefPlanTableMobile;
