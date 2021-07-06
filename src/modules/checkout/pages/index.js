import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "src/components/common/primaryHeader";
import CheckoutDetails from "src/modules/checkout/components/checkoutDetails";
import Footer from "src/components/common/primaryFooter";
import { userDetailsRequest } from "src/modules/profile/redux/action";
import { saveFoodPlanRequest } from "src/modules/checkout/redux/action";
import { userChoices } from "src/Utils/userChoices";
import { PATH } from "src/constants/path";
import { isAccessToken, getData ,setData} from "src/Utils/localStorageUtil";
import {
  getFoodIdList,
  userCheckoutDetails,
  personalizedItemUtil,
  noOfDishes,
} from "src/Utils/checkout";
import "./index.scss";

const Checkout = ({ history }) => {
  const [foodDetailsList, setFoodDetailsList] = useState({});
  const [alertStatus, setAlertStatus] = useState(false);
  const [totalDishes, setTotalDishes] = useState(0);
  const [membership, setMembership] = useState("weekly");
  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    shippingAddress: "",
    city: "",
    zipCode: "",
    mobile: "",
    mobileAlert: false,
  });
  const dispatch = useDispatch();
  const saveFoodPlanState = useSelector((state) => state.SaveFoodPlan);
  const userDetailsStatus = useSelector((state) => state.UserDetails);
  const QuestionnairesStatus = useSelector((state) => state.Questionnaires);

  useEffect(() => {
    const userId = getData("userid") || "";
    if (userId) {
      dispatch(
        userDetailsRequest({
          userId,
        })
      );

      const getFoodIdListItems = getFoodIdList();
      if (getFoodIdListItems) {
        setFoodDetailsList(getFoodIdListItems);
      }
    } else if (!history.location.state?.isMenu) {
      history.push(PATH.HOME);
    } else if (!isAccessToken()) {
      history.push(PATH.HOME);
    }
  }, []);

  useEffect(() => {
    if (foodDetailsList) {
      const dishCount = noOfDishes();
      setTotalDishes(dishCount);
    }
  }, [foodDetailsList]);

  useEffect(() => {
    if (saveFoodPlanState.isSuccess) {
      history.push(PATH.PROFILE);
    } else if (saveFoodPlanState.isError) {
      setAlertStatus(true);
    }
  }, [saveFoodPlanState.data]);

  useEffect(() => {
    if (userDetailsStatus?.data) {
      const { name: { first: firstName, last: lastName } = {}, email } =
        userDetailsStatus?.data;

      setAddress({ ...address, firstName, lastName, email });
    }
  }, [userDetailsStatus.data]);

  const handleCheckout = (e) => {
    e.preventDefault();

    const {
      PreferedBreakFast = [],
      PreferedLunch = [],
      PreferedDinner = [],
    } = QuestionnairesStatus;

    const personalizedChoices = personalizedItemUtil(
      PreferedBreakFast,
      PreferedLunch,
      PreferedDinner
    );
    const updatedPlan = {
      ...getData("AllFoodList"),
    };

    dispatch(
      saveFoodPlanRequest({
        userId: getData("userid"),
        membership: membership,
        mealcount: totalDishes,
        updatedMealData: updatedPlan,
        totalbill: `AED ${updatedPlan?.totalAmount}`,
        choices: userChoices(QuestionnairesStatus),
        foodDetails: foodDetailsList,
        ...personalizedChoices,
        deliveryInfo: userCheckoutDetails(address),
      })
    );
  };

  const handleSelectMembership = (e) => {
    setMembership(e.target.value);
  };

  const toggleAlert = () => {
    setAlertStatus(false);
  };

  const handleBack = () => {
    setData(0, "stepperValue");
    history.push(PATH.QUESTIONNAIRES);
  };
  return (
    <div>
      <div className='checkout-new-header'>
        <Header />
      </div>
      <CheckoutDetails
        membership={membership}
        handleSelectMembership={handleSelectMembership}
        address={address}
        setAddress={setAddress}
        alertStatus={alertStatus}
        toggleAlert={toggleAlert}
        foodDetailsList={foodDetailsList}
        handleCheckout={handleCheckout}
        saveFoodPlanState={saveFoodPlanState}
        handleBack={handleBack}
      />
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
};

export default Checkout;
