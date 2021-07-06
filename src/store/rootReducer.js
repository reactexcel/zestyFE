import { combineReducers } from "redux";
import SignUp from "src/modules/signUp/redux/reducer";
import ForgetPassword from "src/modules/forgetPassword/redux/reducer";
import UpdatePassword from "src/modules/updatePassword/redux/reducer";
import SaveFoodPlan from "src/modules/checkout/redux/reducer";
import saveNextWeekPlanReducer from "src/modules/saveNextWeekPlan/redux/reducer";
import ChefFoodPlanList from "src/modules/chef/redux/reducer";
import {
  Questionnaires,
  AllergiesList,
  FavoriteFoodList,
  PersonalizedBreakfast,
  PersonalizedLunch,
  PersonalizedDinner,
} from "src/modules/questionnaire/redux/reducer";
import {
  Login,
  SocialLogin,
  FacebookLogin,
} from "src/modules/login/redux/reducer";
import {
  userDetails,
  updateProfile,
  showFoodPlan,
  pastAndCurrentWeekFoodPlan,
} from "src/modules/profile/redux/reducer";
import { foodList, addSideDish } from "src/modules/menu/redux/reducer";

export default combineReducers({
  GetFood: foodList,
  SignUp: SignUp,
  Login: Login,
  SocialLogin: SocialLogin,
  ForgetPassword: ForgetPassword,
  UpdatePassword: UpdatePassword,
  SaveFoodPlan: SaveFoodPlan,
  ShowFoodPlan: showFoodPlan,
  UpdateProfile: updateProfile,
  UserDetails: userDetails,
  Questionnaires: Questionnaires,
  AllergiesList: AllergiesList,
  pastAndCurrentFoodPlanStatus: pastAndCurrentWeekFoodPlan,
  saveNextWeekPlanStatus: saveNextWeekPlanReducer,
  personalizedFoodPlanStatus: PersonalizedBreakfast,
  PersonalizedLunchStatus: PersonalizedLunch,
  PersonalizedDinnerStatus: PersonalizedDinner,
  favoriteFoodStatus: FavoriteFoodList,
  facebookEmail: FacebookLogin,
  SelectExtraYoghurt: addSideDish,
  ChefList: ChefFoodPlanList,
});
