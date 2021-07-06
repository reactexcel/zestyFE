import { call, put, takeLatest } from "redux-saga/effects";
import { userDetailsSuccess, userDetailsError } from "../action";
import * as actions from "../action/types";
import axiosCall from "src/services";
import { API } from "src/services/api";

function* UserDetails(action) {
  try {
    const response = yield call(
      axiosCall,
      "POST",
      API.USERDETAILS,
      action.payload
    );
    if (response) {
      yield put(userDetailsSuccess({ response: response }));
    } else {
      yield put(userDetailsError({ error: "Invalid  details" }));
    }
  } catch (error) {
    yield put(userDetailsError({ error: "Invalid  details" }));
  }
}

export function* watchUserDetailsRequest() {
  yield takeLatest(actions.USER_DETAILS_REQUEST, UserDetails);
}
