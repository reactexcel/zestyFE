import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ChefPlanTableDesktop from "src/modules/chef/components/chefFoodPlanDesktop";
import ChefPlanTableDesktopMobile from "src/modules/chef/components/chefFoodPlanMobile";
import ChefMessage from "src/modules/chef/components/chefMessage";
import Loading from "src/components/common/spinner";
import { chefListRequest } from "../redux/action";
import { removeEmptyPlan } from "src/Utils/chefPlan";
import "./index.scss";

function ChefFoodPlan(props) {
  const dispatch = useDispatch();
  const chefListStatus = useSelector((state) => state.ChefList);

  useEffect(() => {
    const chefSelectedDay=props.location?.search.substr(5)||''
    dispatch(
      chefListRequest({
        chef_name: props.match.params.chef_name,
        day: chefSelectedDay
      })
    );
  }, []);

  return (
    <>
      <div className='chef_table'>
        {chefListStatus.isLoading && <Loading />}
        {chefListStatus.isSuccess && (
          <div>
            <ChefMessage
              chefName={props.match.params.chef_name}
              isDayAvailable={props.location.search.length === 0}
            />
            <ChefPlanTableDesktop
              checfFoodPlanData={removeEmptyPlan(chefListStatus.data)}
            />
          </div>
        )}
      </div>
      <div className='chef_mobile_table mx-3'>
        <ChefMessage
          chefName={props.match.params.chef_name}
          isDayAvailable={props.location.search.length === 0}
        />
        <ChefPlanTableDesktopMobile
          checfFoodPlanData={removeEmptyPlan(chefListStatus.data)}
        />
      </div>
    </>
  );
}

export default withRouter(ChefFoodPlan);
