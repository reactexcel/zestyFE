import { fork, all } from "redux-saga/effects";
import { watchSignUpRequest } from "src/modules/signUp/redux/saga";
import { watchForgetPasswordRequest } from "src/modules/forgetPassword/redux/saga";
import { watchUpdatePasswordRequest } from "src/modules/updatePassword/redux/saga";
import { watchSaveFoodPlanRequest } from "src/modules/checkout/redux/saga";
import { watchSaveNextWeekPlanRequest } from "src/modules/saveNextWeekPlan/redux/saga";
import { watchChefListRequest } from "src/modules/chef/redux/saga";
import {
  watchGetFoodRequest,
  watchRemoveSelectedDishesRequest,
  watchAddSideDishRequest,
} from "src/modules/menu/redux/saga";
import {
  watchAllSelection,
  watchAllergiesList,
  watchFavoriteFoodListRequest,
  watchPersonalizedBreakfastRequest,
  watchPersonalizedDinnerRequest,
  watchPersonalizedLunchRequest,
} from "src/modules/questionnaire/redux/saga";
import {
  watchLoginRequest,
  watchSocialLogin,
  watchFacebookLogin,
} from "src/modules/login/redux/saga";
import {
  watchUserDetailsRequest,
  watchUpdateProfileRequest,
  watchShowFoodPlanRequest,
  watchPastAndCurrentFoodPlanRequest,
} from "src/modules/profile/redux/saga";

export default function* rootSaga() {
  {
    yield all([
      fork(watchGetFoodRequest),
      fork(watchSignUpRequest),
      fork(watchForgetPasswordRequest),
      fork(watchUpdatePasswordRequest),
      fork(watchSaveFoodPlanRequest),
      fork(watchShowFoodPlanRequest),
      fork(watchUpdateProfileRequest),
      fork(watchUserDetailsRequest),
      fork(watchAllergiesList),
      fork(watchPastAndCurrentFoodPlanRequest),
      fork(watchSaveNextWeekPlanRequest),
      fork(watchPersonalizedBreakfastRequest),
      fork(watchPersonalizedDinnerRequest),
      fork(watchPersonalizedLunchRequest),
      fork(watchFavoriteFoodListRequest),
      fork(watchAddSideDishRequest),
      fork(watchRemoveSelectedDishesRequest),
      fork(watchAllSelection),
      fork(watchChefListRequest),
      fork(watchLoginRequest),
      fork(watchSocialLogin),
      fork(watchFacebookLogin),
    ]);
  }
}
