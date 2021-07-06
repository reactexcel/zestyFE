import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import UserSubscription from "src/modules/profile/components/userSubscription";
import ProfileHeader from "src/modules/profile/components/header";
import UserDetails from "src/modules/profile/components/userDetails";
import Footer from "src/components/common/primaryFooter";
import {
  userDetailsRequest,
  updateProfileReset,
  showFoodPlanRequest,
  pastAndCurrentFoodPlanRequest,
} from "src/modules/profile/redux/action";
import { PATH } from "src/constants/path";
import { getData } from "src/Utils/localStorageUtil";
import "./index.scss";

function ProfilePage(props) {
  const [showUpdate, setShowUpdate] = useState(false);
  const [useDetails, setUseDetails] = useState({});
  const history = useHistory();
  const dispatch = useDispatch();
  const showFoodPlanStatus = useSelector((state) => state.ShowFoodPlan);
  const userDetailsStatus = useSelector((state) => state.UserDetails);
  const updateProfileStatus = useSelector((state) => state.UpdateProfile);
  const saveFoodPlanStatus = useSelector((state) => state.SaveFoodPlan);
  const currentAndPastFoodPlan = useSelector(
    (state) => state.pastAndCurrentFoodPlanStatus
  );

  const query = props.location.search;
  // const urlParams = new URLSearchParams(query);
  // const id = urlParams.get("id");

  useEffect(() => {
    if (getData("userid")) {
      const userId = getData("userid");
      dispatch(
        userDetailsRequest({
          userId,
        })
      );
      dispatch(
        pastAndCurrentFoodPlanRequest({
          userId,
        })
      );
      dispatch(updateProfileReset());
    } else {
      history.push(PATH.HOME);
    }
  }, []);

  useEffect(() => {
    if (saveFoodPlanStatus?.data) {
      dispatch(
        showFoodPlanRequest({
          userId: getData("userid"),
        })
      );
    }
  }, [saveFoodPlanStatus.data]);
  
  useEffect(() => {
    if (userDetailsStatus?.data) {
      setUseDetails(userDetailsStatus?.data);
    }
  }, [userDetailsStatus]);

  useEffect(() => {
    if (updateProfileStatus?.data?.error === 0) {
      dispatch(
        userDetailsRequest({
          userId: getData("userid"),
        })
      );
    }
  }, [showUpdate]);

  const handleUpdateProfile = () => {
    history.push(PATH.EDITUPDATE);
  };

  return (
    <div>
      <ProfileHeader userDetailsStatus={userDetailsStatus} />
      <div className='user-details'>
        <UserDetails
          userDetailsStatus={userDetailsStatus}
          handleUpdateProfile={handleUpdateProfile}
        />
        <UserSubscription
          ShowFoodPlanStaus={showFoodPlanStatus}
          currentAndPastFoodPlan={currentAndPastFoodPlan}
        />
      </div>
      <div className='space'></div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}
export default ProfilePage;
