import { createAction } from "redux-actions";
import * as constants from "./types";

export const getLoginRequest = createAction(constants.LOGIN_REQUEST);
export const getLoginSuccess = createAction(constants.LOGIN_SUCCESS);
export const getLoginError = createAction(constants.LOGIN_ERROR);

export const getSocialRequest = createAction(constants.SOCIAL_REQUEST);
export const getSocialSuccess = createAction(constants.SOCIAL_SUCCESS);
export const getSocialError = createAction(constants.SOCIAL_ERROR);
export const resetSocialLogin = createAction(constants.SOCIAL_RESET);

export const facebookEmailRequest= createAction(constants.FACEBOOK_EMAIL_REQUEST);
export const facebookEmailSuccess= createAction(constants.FACEBOOK_EMAIL_SUCCESS);
export const facebookEmailError= createAction(constants.FACEBOOK_EMAIL_ERROR);
