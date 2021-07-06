import { createAction } from "redux-actions";
import * as constants from "./types";

export const forgetpassRequest = createAction(constants.FORGET_PASSWORD_REQUEST);
export const forgetpassSuccess = createAction(constants.FORGET_PASSWORD_SUCCESS);
export const forgetpassError = createAction(constants.FORGET_PASSWORD_ERROR);
