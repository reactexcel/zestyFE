import { call, put, takeLatest } from "redux-saga/effects";
import { getSignUpSuccess, getSignUpError } from "../action";
import * as actions from "../action/types";
import axiosCall from "src/services";
import { setData } from "src/Utils/localStorageUtil";
import { API } from "src/services/api";

export function* SignUp(action) {
  try {
    const response = yield call(
      axiosCall,
      "POST",
      API.CREATEUSER,
      action.payload
    );
    if (response) {
      setData(response.data.token, "accessToken");
      setData(response.data.id, "userid");
      yield put(getSignUpSuccess({ response: response }));
    } else {
      yield put(getSignUpError({ error: "Invalid  details" }));
    }
  } catch (error) {
    yield put(getSignUpError({ error: error.response }));
  }
}

export function* watchSignUpRequest() {
  yield takeLatest(actions.SIGN_UP_REQUEST, SignUp);
}
