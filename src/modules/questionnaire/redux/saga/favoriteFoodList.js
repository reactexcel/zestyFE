import { call, put, takeLatest } from "redux-saga/effects";
import {
  getFavoriteSuccess,
  getFavoriteError,
} from "src/modules/questionnaire/redux/action";
import * as actions from "../action/types";
import axiosCall from "src/services";
import { API } from "src/services/api";

export function* FavoriteFoodList(action) {
  try {
    const response = yield call(
      axiosCall,
      "GET",
      API.FAVORITEFOOD,
      action.payload
    );
    if (response) {
      yield put(getFavoriteSuccess({ response: response }));
    } else {
      yield put(getFavoriteError({ error: "Invalid  details" }));
    }
  } catch (error) {
    yield put(getFavoriteError({ error: "Invalid  details" }));
  }
}

export function* watchFavoriteFoodListRequest() {
  yield takeLatest(actions.FAVORITE_FOOD_REQUEST, FavoriteFoodList);
}
