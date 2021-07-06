import { call, put,takeLatest } from "redux-saga/effects";
import { getLoginSuccess, getLoginError } from "../action";
import * as actions from "../action/types";
import { setAccessToken, setUserId } from "src/Utils/localStorageUtil";
import axiosCall from "src/services";
import { API } from "src/services/api";

export function* Login(action) {
  try {
    const response = yield call(axiosCall, "POST", API.LOGIN, action.payload);
    if (response) {
      setAccessToken(response);
      setUserId(response);
      yield put(getLoginSuccess({ response: response }));
    } else {
      yield put(getLoginError({ error: "Invalid  details" }));
    }
  } catch (error) {
    yield put(getLoginError({ error: error.response }));
  }
}

export function* watchLoginRequest() {
  yield takeLatest(actions.LOGIN_REQUEST, Login);
}
