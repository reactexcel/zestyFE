import { call, put,takeLatest } from "redux-saga/effects";
import { facebookEmailSuccess, facebookEmailError } from "../action";
import * as actions from "../action/types";
import axiosCall from "src/services";
import { API } from "src/services/api";

export function* FacebookLogin(action) {
  try {
    const response = yield call(
      axiosCall,
      "GET",
      `${API.USERDATA}/${action.payload.facebookId}`,
      action.payload
    );
    if (response) {
      yield put(facebookEmailSuccess({ response: response }));
    } else {
      yield put(facebookEmailError({ error: "Invalid  details" }));
    }
  } catch (error) {
    yield put(facebookEmailError({ error: "Invalid  details" }));
  }
}

export function* watchFacebookLogin() {
  yield takeLatest(actions.FACEBOOK_EMAIL_REQUEST, FacebookLogin);
}
