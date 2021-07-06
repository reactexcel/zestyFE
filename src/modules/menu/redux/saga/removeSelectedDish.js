import { put, takeLatest } from "redux-saga/effects";
import { getFoodSuccess } from "../action";
import * as actions from "../action/types";

function* RemoveSelectDishes(action) {
  try {
    let currentData = action.payload.foodlist;

    Object.keys(currentData).map((val) => {
      if (val === action.payload.day) {
        Object.keys(currentData[val]).map((rx) => {
          if (rx === action.payload.type) {
            currentData[val][rx].pop();
          }
        });
      }
    });

    yield put(
      getFoodSuccess({
        response: {
          data: currentData,
          isRemove: action.payload.type + action.payload.day,
        },
      })
    );
  } catch (error) {
    console.log(error, "currentData");
  }
}

export function* watchRemoveSelectedDishesRequest() {
  yield takeLatest(actions.REMOVE_DISHES, RemoveSelectDishes);
}
