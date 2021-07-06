import { call, put, takeLatest } from "redux-saga/effects";
import {
  getpersonalizedBreakFastSuccess,
  getpersonalizedBreakFastError,
} from "src/modules/questionnaire/redux/action";
import * as actions from "../action/types";
import axiosCall from "src/services";
import { API } from "src/services/api";

export function* personalizedBreakfast(action) {
  try {
    const response = yield call(
      axiosCall,
      "POST",
      API.MEALBYTIME,
      action.payload
    );
    if (response) {
      yield put(getpersonalizedBreakFastSuccess({ response: response }));
    } else {
      yield put(getpersonalizedBreakFastError({ error: "No data Found" }));
    }
  } catch (error) {
    yield put(getpersonalizedBreakFastError({ error: "No data Found" }));
  }
}

export function* watchPersonalizedBreakfastRequest() {
  yield takeLatest(
    actions.PERSONALIZED_BREAKFAST_REQUEST,
    personalizedBreakfast
  );
}
