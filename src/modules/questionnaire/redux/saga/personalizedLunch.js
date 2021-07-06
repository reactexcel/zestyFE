import { call, put, takeLatest } from "redux-saga/effects";
import {
  getpersonalizedLunchSuccess,
  getpersonalizedLunchError,
} from "../action";
import * as actions from "../action/types";
import axiosCall from "src/services";
import { API } from "src/services/api";

export function* personalizedLunch(action) {
  try {
    const response = yield call(
      axiosCall,
      "POST",
      API.MEALBYTIME,
      action.payload
    );
    if (response) {
      yield put(getpersonalizedLunchSuccess({ response: response }));
    } else {
      yield put(getpersonalizedLunchError({ error: "No data Found" }));
    }
  } catch (error) {
    yield put(getpersonalizedLunchError({ error: "No data Found" }));
  }
}

export function* watchPersonalizedLunchRequest() {
  yield takeLatest(actions.PERSONALIZED_LUNCH_REQUEST, personalizedLunch);
}
