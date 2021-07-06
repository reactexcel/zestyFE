import { createAction } from "redux-actions";
import * as constants from "./types";

export const chefListRequest = createAction(constants.CHEF_LIST_REQUEST);
export const chefListSucces = createAction(constants.CHEF_LIST_SUCCESS);
export const chefListError = createAction(constants.CHEF_LIST_ERROR);
