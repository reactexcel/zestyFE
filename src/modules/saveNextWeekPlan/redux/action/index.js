import { createAction } from "redux-actions";
import * as constants from "./types";

export const saveNextWeekPlanRequest = createAction(
  constants.SAVE_NEXT_WEEK_PLAN_REQUEST
);
export const saveNextWeekPlanSuccess = createAction(
  constants.SAVE_NEXT_WEEK_PLAN_SUCCESS
);
export const saveNextWeekPlanError = createAction(
  constants.SAVE_NEXT_WEEK_PLAN_ERROR
);
