import { call, put,takeLatest } from "redux-saga/effects";
import { showFoodPlanSuccess, showFoodPlanError } from "../action";
import * as actions from "../action/types";
import axiosCall from "src/services";
import { API } from "src/services/api";

function* ShowFoodPlan(action) {
  try {
    const response = yield call(
      axiosCall,
      "POST",
      API.FOODPLAN,
      action.payload
    );
    if (response) {
      yield put(showFoodPlanSuccess({ response: response }));
    } else {
      yield put(showFoodPlanError({ error: "Invalid  details" }));
    }
  } catch (error) {
    yield put(showFoodPlanError({ error: "Invalid  details" }));
  }
}


export function* watchShowFoodPlanRequest() {
  yield takeLatest(actions.SHOW_FOOD_PLAN_REQUEST, ShowFoodPlan);
}