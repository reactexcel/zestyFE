import { createAction } from "redux-actions";
import * as constants from "./types";

export const allergiesListRequest = createAction(constants.ALLERGIESLIST_REQUEST);
export const allergiesListSuccess = createAction(constants.ALLERGIESLIST_SUCCESS);
export const allergiesListError = createAction(constants.ALLERGIESLIST_ERROR);

export const getFavoriteRequest = createAction(constants.FAVORITE_FOOD_REQUEST);
export const getFavoriteSuccess = createAction(constants.FAVORITE_FOOD_SUCCESS);
export const getFavoriteError = createAction(constants.FAVORITE_FOOD_ERROR);

export const getpersonalizedBreakFastRequest = createAction(constants.PERSONALIZED_BREAKFAST_REQUEST);
export const getpersonalizedBreakFastSuccess = createAction(constants.PERSONALIZED_BREAKFAST_SUCCESS);
export const getpersonalizedBreakFastError = createAction( constants.PERSONALIZED_BREAKFAST_ERROR);

export const getpersonalizedLunchRequest = createAction(constants.PERSONALIZED_LUNCH_REQUEST);
export const getpersonalizedLunchSuccess = createAction(constants.PERSONALIZED_LUNCH_SUCCESS);
export const getpersonalizedLunchError = createAction(constants.PERSONALIZED_LUNCH_ERROR);

export const getpersonalizedDinnerRequest = createAction(constants.PERSONALIZED_DINNER_REQUEST);
export const getpersonalizedDinnerSuccess = createAction(constants.PERSONALIZED_DINNER_SUCCESS);
export const getpersonalizedDinnerError = createAction(constants.PERSONALIZED_DINNER_ERROR);

export const questionniarSelectionRequest = createAction(constants.QUESTIONNAIRES_SELECTION_REQUEST);
export const updateQuestionnaireData = createAction(constants.UPDATE_QUESTIONNAIRE_DATA);
export const clearQuestionnnair = createAction(constants.CLEARQUESTIONNAIR);


