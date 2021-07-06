import { call, put,takeLatest } from "redux-saga/effects";
import {
  getpersonalizedDinnerSuccess,
  getpersonalizedDinnerError,
} from "../action";
import * as actions from "../action/types";
import axiosCall from "src/services";
import { API } from "src/services/api";

export function* personalizedDinner(action) {
  try {
    const response = yield call(
      axiosCall,
      "POST",
      API.MEALBYTIME,
      action.payload
    );
    if (response) {
      yield put(getpersonalizedDinnerSuccess({ response: response }));
    } else {
      yield put(getpersonalizedDinnerError({ error: "No data Found" }));
    }
  } catch (error) {
    yield put(getpersonalizedDinnerError({ error: "No data Found" }));
  }
}

export function* watchPersonalizedDinnerRequest() {
  yield takeLatest(actions.PERSONALIZED_DINNER_REQUEST, personalizedDinner);
}