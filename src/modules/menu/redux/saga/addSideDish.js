import { put, takeLatest } from "redux-saga/effects";
import { getFoodSuccess } from "../action";
import * as actions from "../action/types";

function* addSideDish(action) {
  try {
    let currentData = action.payload?.foodlist;
    let updatedData = action.payload?.foodlist[action.payload.day][
      action.payload.type
    ].map((val) => {
      if (val._id === action.payload.id) {
        val["extradishName"] = action.payload.extradishName;
        val["extradishId"] = action.payload.extradishId;
        val["extraPriceList"] = action.payload.extraPriceList;
      }
      return val;
    });
    currentData[action.payload.day][action.payload.type] = updatedData;
    yield put(getFoodSuccess({ response: { data: currentData } }));
  } catch (error) {}
}

export function* watchAddSideDishRequest() {
  yield takeLatest(actions.ADD_SIDE_DISH_REQUEST, addSideDish);
}
