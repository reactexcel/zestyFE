import { call, put, takeLatest } from "redux-saga/effects";
import { getFoodSuccess, getFoodError } from "../action";
import * as actions from "../action/types";
import axiosCall from "src/services";
import { API } from "src/services/api";
import { getData } from "src/Utils/localStorageUtil";
import { getStandardDishprice } from "src/Utils/menu";

function* GetFood(action) {
  try {
    const response = yield call(axiosCall, "POST", API.GETFOOD, action.payload);
    if (response) {
      const updatedData = {
        ...response,
        data: { ...getStandardDishprice(response.data) },
      };
 
      yield put(
        getFoodSuccess({
          response: updatedData,
          isSwipe: getData("isSwipe") ? true : false,
        })
      );
    } else {
      yield put(getFoodError({ error: "Invalid  details" }));
    }
  } catch (error) {
    yield put(getFoodError({ error: "Invalid  details" }));
  }
}

export function* watchGetFoodRequest() {
  yield takeLatest(actions.GET_FOOD_REQUEST, GetFood);
}
