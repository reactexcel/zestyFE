import React from "react";
import { useHistory } from "react-router-dom";
import CurrentWeekPlan from "src/modules/profile/components/currentWeekPlan/weeklyPlan";
import LastWeekPlan from "src/modules/profile/components/lastWeekPlan";
import UserSelections from "src/modules/profile/components/currentWeekPlan/userSelections";
import DeliveryDetails from "src/modules/profile/components/currentWeekPlan/deliveryDetails";

function UserSubscription(props) {
  const history = useHistory();
  const isSubscribed = history.location.pathname.includes("subscribe");
  const { ShowFoodPlanStaus, currentAndPastFoodPlan } = props;

  return (
    <>
      {!isSubscribed && currentAndPastFoodPlan.isSuccess && (
        <LastWeekPlan lastweekplan={currentAndPastFoodPlan.data} />
      )}
      <div>
        <UserSelections ShowFoodPlanStaus={ShowFoodPlanStaus} />
        <DeliveryDetails ShowFoodPlanStaus={ShowFoodPlanStaus} />
        <div className='row mt-5'>
          <CurrentWeekPlan
            ShowFoodPlanStatu={ShowFoodPlanStaus}
            currentAndPastFoodPlan={currentAndPastFoodPlan}
          />
        </div>
      </div>
    </>
  );
}
export default UserSubscription;
