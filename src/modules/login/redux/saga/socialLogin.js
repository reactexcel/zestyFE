import { call, put,takeLatest } from "redux-saga/effects";
import { getSocialSuccess, getSocialError } from "../action";
import * as actions from "../action/types";
import axiosCall from "src/services";
import { setData } from "src/Utils/localStorageUtil";
import { API } from "src/services/api";

export function* SocialLogin(action) {
  try {
    const response = yield call(
      axiosCall,
      "POST",
      API.SOCIALLOGIN,
      action.payload
    );
    if (response) {
      setData(response.data.token, "accessToken");
      setData(response.data.id, "userid");
      yield put(getSocialSuccess({ response: response }));
    } else {
      yield put(getSocialError({ error: "Invalid  details" }));
    }
  } catch (error) {
    yield put(getSocialError({ error: "Invalid  details" }));
  }
}

export function* watchSocialLogin() {
    yield takeLatest(actions.SOCIAL_REQUEST, SocialLogin);
  }
  