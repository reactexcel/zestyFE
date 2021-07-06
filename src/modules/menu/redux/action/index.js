import { createAction } from "redux-actions";
import * as constants from "./types";

export const getFoodRequest = createAction(constants.GET_FOOD_REQUEST);
export const getFoodSuccess = createAction(constants.GET_FOOD_SUCCESS);
export const getFoodError = createAction(constants.GET_FOOD_ERROR);
export const resetFoodPlanRequest = createAction(constants.RESET_FOOD_PLAN_REQUEST);

export const itemCountRequest = createAction(constants.EXTRA_ITEM_COUNT_REQUEST);
export const RemoveDishes = createAction(constants.REMOVE_DISHES);
export const addSideDishRequestt = createAction(constants.ADD_SIDE_DISH_REQUEST);
export const addDislikedFoodRequest=createAction(constants.ADD_DISLIKED_FOOD_REQUEST)