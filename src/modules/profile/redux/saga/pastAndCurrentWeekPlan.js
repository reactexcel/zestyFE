import { call, put, takeLatest } from "redux-saga/effects";
import {
  pastAndCurrentFoodPlanSuccess,
  pastAndCurrentFoodPlanError,
} from "../action";
import * as actions from "../action/types";
import axiosCall from "src/services";
import { API } from "src/services/api";

function* pastAndCurrentFoodPlan(action) {
  try {
    const response = yield call(
      axiosCall,
      "POST",
      API.CURRENTANDPASTFOODPLAN,
      action.payload
    );
    if (response) {
      yield put(pastAndCurrentFoodPlanSuccess({ response: response }));
    } else {
      yield put(pastAndCurrentFoodPlanError({ error: "No data Found" }));
    }
  } catch (error) {
    yield put(pastAndCurrentFoodPlanError({ error: "No data Found" }));
  }
}

export function* watchPastAndCurrentFoodPlanRequest() {
  yield takeLatest(
    actions.PAST_AND_CURRENT_FOODPLAN_REQUEST,
    pastAndCurrentFoodPlan
  );
}
