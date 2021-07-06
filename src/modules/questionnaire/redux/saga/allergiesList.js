import { call, put, takeLatest } from "redux-saga/effects";
import { allergiesListError, allergiesListSuccess } from "../action";
import * as actions from "../action/types";
import axiosCall from "src/services";
import { API } from "src/services/api";

export function* AllergiesList(action) {
  try {
    const response = yield call(
      axiosCall,
      "GET",
      API.LISTALLERGENS,
      action.payload
    );
    if (response) {
      yield put(allergiesListSuccess({ response: response }));
    } else {
      yield put(allergiesListError({ error: "Invalid  details" }));
    }
  } catch (error) {
    yield put(allergiesListError({ error: "Invalid  details" }));
  }
}

export function* watchAllergiesList() {
  yield takeLatest(actions.ALLERGIESLIST_REQUEST, AllergiesList);
}
