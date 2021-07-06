import { put, takeEvery, takeLatest } from "redux-saga/effects";
import { updateQuestionnaireData } from "../action";
import * as actions from "../action/types";
import * as constant from "src/modules/menu/redux/action/types";
import { setData } from "src/Utils/localStorageUtil";

export function* addDislikedFood(action) {
  setData(action.payload, "dislikedFood");
  yield put(updateQuestionnaireData({ dislikedFood: action.payload }));
}

export function* questionniarSelection(action) {
  const { selectionType, value } = action.payload;
  setData(value, selectionType);
  yield put(updateQuestionnaireData({ [selectionType]: value }));
}

export function* watchAllSelection() {
  yield takeLatest(constant.ADD_DISLIKED_FOOD_REQUEST, addDislikedFood);
  yield takeEvery(
    actions.QUESTIONNAIRES_SELECTION_REQUEST,
    questionniarSelection
  );
}
