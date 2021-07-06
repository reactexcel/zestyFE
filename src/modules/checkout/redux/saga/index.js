import { call, put, takeLatest } from "redux-saga/effects";
import { saveFoodPlanSuccess, saveFoodPlanError } from "../action";
import * as actions from "../action/types";
import axiosCall from "src/services";
import { API } from "src/services/api";

export function* SaveFoodPlan(action) {
  try {
    const response = yield call(
      axiosCall,
      "POST",
      API.SAVEFOOD,
      action.payload
    );
    if (response) {
      yield put(saveFoodPlanSuccess({ response: response }));
    } else {
      yield put(saveFoodPlanError({ error: "Invalid  details" }));
    }
  } catch (error) {
    yield put(saveFoodPlanError({ error: "Invalid  details" }));
  }
}

export function* watchSaveFoodPlanRequest() {
  yield takeLatest(actions.SAVE_FOOD_PLAN_REQUEST, SaveFoodPlan);
}
