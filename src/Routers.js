import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import PrivateRoute from "src/PrivateRoute";
import { PATH } from "src/constants/path";
import LandingPage from "src/modules/home/pages";
import LoginPage from "src/modules/login/pages";
import SignUpPage from "src/modules/signUp/pages";
import ForgetPassword from "src/modules/forgetPassword/pages";
import UpdatePassword from "src/modules/updatePassword/pages";
import { UserProfile, UpdateProfile } from "src/modules/profile/pages";
import ChefFoodPlan from "src/modules/chef/pages";
import MenuList from "src/modules/menu/pages";
import Checkout from "src/modules/checkout/pages";
import {
  Questionnaires,
  QuestionnaireLandingPage,
  MealTime,
  BreakfastFoodCatalogue,
  DinnerFoodCatalogue,
  LunchFoodCatalogue,
} from "src/modules/questionnaire/pages";
import SaveNextWeekPlan from "src/modules/saveNextWeekPlan/pages";

function Routers() {
  return (
    <Router>
      <Switch>
        <Route exact path={PATH.HOME} component={LandingPage} />
        <Route
          exact
          path={[
            PATH.LOGIN,
            `${PATH.MENU}/:day${PATH.LOGIN}`,
            `${PATH.MENU}${PATH.LOGIN}`,
          ]}
        >
          <LoginPage />
        </Route>
        <Route exact path={[PATH.SIGNUP, `${PATH.MENU}/:day${PATH.SIGNUP}`]}>
          <SignUpPage />
        </Route>

        <Route
          exact
          onUpdate={() => window.scrollTo(0, 0)}
          history={createBrowserHistory()}
          path={`${PATH.MENU}/:id`}
          component={MenuList}
        />
        <Route
          exact
          path={PATH.MEALLANDING}
          component={QuestionnaireLandingPage}
        />
        <Route exact path={PATH.SUBSCRIBE} component={SaveNextWeekPlan} />
        <PrivateRoute exact path={PATH.PROFILE} component={UserProfile} />
        <PrivateRoute exact path={PATH.CHECKOUT} component={Checkout} />
        <PrivateRoute exact path={PATH.EDITUPDATE} component={UpdateProfile} />
        <Route exact path={PATH.FORGETPASSWORD} component={ForgetPassword} />
        <Route
          exact
          path={`${PATH.UPDATEPASSWORD}/:id`}
          component={UpdatePassword}
        />
        <Route exact path={PATH.QUESTIONNAIRES} component={Questionnaires} />
        <Route
          exact
          path={`${PATH.CHEF}/:chef_name`}
          component={ChefFoodPlan}
        />
        <Route exact path={PATH.UPDATETIME} component={MealTime} />
        <Route
          exact
          path={PATH.BREAKFASTCATALOGUE}
          component={BreakfastFoodCatalogue}
        />
        <Route
          exact
          path={PATH.LUNCHCATALOGUE}
          component={LunchFoodCatalogue}
        />
        <Route
          exact
          path={PATH.DINNERCATALOGUE}
          component={DinnerFoodCatalogue}
        />
      </Switch>
    </Router>
  );
}
export default Routers;
