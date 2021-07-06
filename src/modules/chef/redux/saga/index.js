import { call, put, takeLatest } from "redux-saga/effects";
import { chefListSucces, chefListError } from "../action";
import * as actions from "../action/types";
import axiosCall from "src/services";
import { API } from "src/services/api";

export function* ChefList(action) {
  try {
    const response = yield call(
      axiosCall,
      "GET",
      `${API.CHEF}/${action.payload.chef_name}/?day=${action.payload.day}`
    );

    if (response) {
      yield put(chefListSucces({ response: response }));
    } else {
      yield put(chefListError({ error: "Invalid  details" }));
    }
  } catch (error) {
    yield put(chefListError({ error: "Invalid  details" }));
  }
}

export function* watchChefListRequest() {
  yield takeLatest(actions.CHEF_LIST_REQUEST, ChefList);
}
