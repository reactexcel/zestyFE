import { call, put, takeLatest } from "redux-saga/effects";
import { updateProfileSuccess, updateProfileError } from "../action";
import * as actions from "../action/types";
import axiosCall from "src/services";
import { API } from "src/services/api";

function* UpdateProfile(action) {
  try {
    const response = yield call(
      axiosCall,
      "POST",
      API.UPDATEPROFILE,
      action.payload
    );
    if (response) {
      yield put(updateProfileSuccess({ response: response }));
    } else {
      yield put(updateProfileError({ error: "Invalid  details" }));
    }
  } catch (error) {
    yield put(updateProfileError({ error: "Invalid  details" }));
  }
}

export function* watchUpdateProfileRequest() {
  yield takeLatest(actions.UPDATE_PROFILE_REQUEST, UpdateProfile);
}
