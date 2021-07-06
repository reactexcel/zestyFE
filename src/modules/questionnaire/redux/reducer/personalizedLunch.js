import * as constants from "../action/types";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  data: [],
};

const PersonalizedLunch = (state = initialState, action) => {
  switch (action.type) {
    case constants.PERSONALIZED_LUNCH_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case constants.PERSONALIZED_LUNCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        ...action.payload.response,
      };
    case constants.PERSONALIZED_LUNCH_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        ...action.payload.response,
      };
    default:
      return {
        ...state,
      };
  }
};
export default PersonalizedLunch;
