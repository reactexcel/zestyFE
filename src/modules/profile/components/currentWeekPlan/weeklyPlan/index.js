import React, { useEffect, useState } from "react";
import { allDayList } from "src/Utils/localStorageUtil";
import MealPlan from "../mealPlan";

function WeeklyPlan(props) {
  const { ShowFoodPlanStatu } = props;
  const [daysMenu, setDaysMenu] = useState([]);
  const { enddate, startdate } = ShowFoodPlanStatu?.data;

  useEffect(() => {
    if (ShowFoodPlanStatu?.data) {
      const dayList = Object.keys(ShowFoodPlanStatu?.data);
      const newDays = allDayList.filter((val) => dayList.includes(val));
      const data = [];
      newDays.map((val) => {
        let d = {
          [val]: ShowFoodPlanStatu.data[val],
        };
        data.push(d);
      });
      setDaysMenu(data);
    }
  }, [ShowFoodPlanStatu]);

  return (
    <>
      <MealPlan
        foodPlanMenu={daysMenu}
        startDate={startdate}
        endDate={enddate}
      />
    </>
  );
}
export default WeeklyPlan;
