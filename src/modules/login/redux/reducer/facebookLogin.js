import * as constants from "../action/types";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
};

const FacebookLogin = (state = initialState, action) => {
  switch (action.type) {
    case constants.FACEBOOK_EMAIL_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case constants.FACEBOOK_EMAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        ...action.payload.response,
      };
    case constants.FACEBOOK_EMAIL_ERROR:
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
export default FacebookLogin;
