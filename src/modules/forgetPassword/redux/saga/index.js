import { call, put, takeLatest } from "redux-saga/effects";
import { forgetpassSuccess, forgetpassError } from "../action";
import * as actions from "../action/types";
import axiosCall from "src/services";
import { API } from "src/services/api";

export function* ForgetPassword(action) {
  try {
    const response = yield call(
      axiosCall,
      "POST",
      API.FORGETPASSWORD,
      action.payload
    );
    if (response) {
      yield put(forgetpassSuccess({ response: response }));
    } else {
      yield put(forgetpassError({ error: "Invalid  details" }));
    }
  } catch (error) {
    yield put(forgetpassError({ error: "Invalid  details" }));
  }
}

export function* watchForgetPasswordRequest() {
  yield takeLatest(actions.FORGET_PASSWORD_REQUEST, ForgetPassword);
}
