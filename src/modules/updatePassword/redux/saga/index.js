import { call, put,takeLatest } from "redux-saga/effects";
import { updatePassSuccess, updatePassError } from "../action";
import * as actions from "../action/types";
import axiosCall from "src/services";
import { API } from "src/services/api";

export function* UpdatePassword(action) {
  try {
    const response = yield call(
      axiosCall,
      "POST",
      API.UPDATEPASSWORD,
      action.payload
    );
    if (response) {
      yield put(updatePassSuccess({ response: response }));
    } else {
      yield put(updatePassError({ error: "Invalid  details" }));
    }
  } catch (error) {
    yield put(updatePassError({ error: "Invalid  details" }));
  }
}

export function* watchUpdatePasswordRequest() {
  yield takeLatest(actions.UPDATE_PASSWORD_REQUEST, UpdatePassword);
}