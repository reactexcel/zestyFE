import { call, put, takeLatest } from "redux-saga/effects";
import { saveNextWeekPlanSuccess, saveNextWeekPlanError } from "../action";
import * as actions from "../action/types";
import axiosCall from "src/services";
import { API } from "src/services/api";

export function* saveNextWeekPlan(action) {
  const userId = action.payload.payload.userId;
  try {
    const response = yield call(
      axiosCall,
      "GET",
      `${API.PREVIOUSWEEKPLAN}/${userId}`
    );
    if (response) {
      yield put(saveNextWeekPlanSuccess({ response: response }));
    } else {
      yield put(saveNextWeekPlanError({ error: "Something went wrong" }));
    }
  } catch (error) {
    yield put(saveNextWeekPlanError({ error: "Something went wrong" }));
  }
}

export function* watchSaveNextWeekPlanRequest() {
  yield takeLatest(actions.SAVE_NEXT_WEEK_PLAN_REQUEST, saveNextWeekPlan);
}
