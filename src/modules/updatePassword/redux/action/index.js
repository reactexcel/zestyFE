import { createAction } from "redux-actions";
import * as constants from "./types";

export const updatePassRequest = createAction(constants.UPDATE_PASSWORD_REQUEST);
export const updatePassSuccess = createAction(constants.UPDATE_PASSWORD_SUCCESS);
export const updatePassError = createAction(constants.UPDATE_PASSWORD_ERROR);
