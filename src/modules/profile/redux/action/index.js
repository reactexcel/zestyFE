import { createAction } from "redux-actions";
import * as constants from "./types";

export const userDetailsRequest = createAction(constants.USER_DETAILS_REQUEST);
export const userDetailsSuccess = createAction(constants.USER_DETAILS_SUCCESS);
export const userDetailsError = createAction(constants.USER_DETAILS_ERROR);

export const updateProfileRequest = createAction(constants.UPDATE_PROFILE_REQUEST);
export const updateProfileSuccess = createAction(constants.UPDATE_PROFILE_SUCCESS);
export const updateProfileError = createAction(constants.UPDATE_PROFILE_ERROR);
export const updateProfileReset = createAction(constants.UPDATE_PROFILE_RESET);

export const showFoodPlanRequest = createAction(constants.SHOW_FOOD_PLAN_REQUEST);
export const showFoodPlanSuccess = createAction(constants.SHOW_FOOD_PLAN_SUCCESS);
export const showFoodPlanError = createAction(constants.SHOW_FOOD_PLAN_ERROR);

export const pastAndCurrentFoodPlanRequest=createAction(constants.PAST_AND_CURRENT_FOODPLAN_REQUEST);
export const pastAndCurrentFoodPlanSuccess=createAction(constants.PAST_AND_CURRENT_FOODPLAN_SUCCESS)
export const pastAndCurrentFoodPlanError=createAction(constants.PAST_AND_CURRENT_FOODPLAN_ERROR)