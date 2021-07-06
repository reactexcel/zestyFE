import { createAction } from "redux-actions";
import * as constants from "./types";

export const saveFoodPlanRequest = createAction(constants.SAVE_FOOD_PLAN_REQUEST);
export const saveFoodPlanSuccess = createAction(constants.SAVE_FOOD_PLAN_SUCCESS);
export const saveFoodPlanError = createAction(constants.SAVE_FOOD_PLAN_ERROR);
