import { createAction } from "redux-actions";
import * as constants from "./types";

export const getSignUpRequest = createAction(constants.SIGN_UP_REQUEST);
export const getSignUpSuccess = createAction(constants.SIGN_UP_SUCCESS);
export const getSignUpError = createAction(constants.SIGN_UP_ERROR);
export const getSignUpClear = createAction(constants.SIGN_UP_CLEAR);
