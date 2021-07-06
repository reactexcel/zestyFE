import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import HomeNavbar from "src/components/common/primaryHeader";
import LandingHeader from "src/modules/home/components/landingHeader";
import MealCardList from "src/modules/home/components/mealCardList";
import LandingFeatures from "src/modules/home/components/landingFeatures";
import MemberShipPlan from "src/modules/home/components/membershipPlan";
import LandingCheckPlan from "src/modules/home/components/landingCheckPlan";
import Footer from "src/components/common/primaryFooter";
import { getSignUpClear } from "src/modules/signUp/redux/action";
import { clearQuestionnnair } from "src/modules/questionnaire/redux/action";
import { getData, clearLocalStorage } from "src/Utils/localStorageUtil";
import "./index.scss";

function LandingPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSignUpClear());
    if (!getData("accessToken")) {
      clearLocalStorage();
      dispatch(clearQuestionnnair());
    }
  }, []);

  return (
    <>
      <div className='header'>
        <HomeNavbar />
        <LandingHeader />
      </div>
      <div className='about-meals'>
        <MealCardList />
        <LandingFeatures />
        <MemberShipPlan
          membershipPeriod='Weekly'
          membershipMessage='Plus fresh personalized affordable home cooked meals and unlimited free delivery.'
          membershipPrice='9'
        />
        <MemberShipPlan
          membershipPeriod='Monthly'
          membershipPrice='29'
          membershipMessage='Save almost 20% and let Zesty take care of your meals.'
        />
        <MemberShipPlan
          membershipPeriod='Yearly'
          membershipPrice='219'
          membershipMessage='Get your own personal chef for 55% off! Pause anytime.'
        />
      </div>
      <div className='customer-review-section'>
        <LandingCheckPlan />
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </>
  );
}
export default LandingPage;
