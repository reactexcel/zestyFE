import * as constants from "../action/types";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  data: {},
};

const SocialLogin = (state = initialState, action) => {
  switch (action.type) {
    case constants.SOCIAL_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case constants.SOCIAL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        ...action.payload.response,
      };

    case constants.SOCIAL_RESET:
      return {
        ...state,
        isSuccess: false,
      };
    case constants.SOCIAL_ERROR:
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
export default SocialLogin;
