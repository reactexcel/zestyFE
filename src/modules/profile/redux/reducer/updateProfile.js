import * as constants from "../action/types";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  data: {},
};

const updateProfile = (state = initialState, action) => {
  switch (action.type) {
    case constants.UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case constants.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        ...action.payload.response,
      };
    case constants.UPDATE_PROFILE_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        ...action.payload.response,
      };
    case constants.UPDATE_PROFILE_RESET:
      return {
        isLoading: false,
        isError: false,
        isSuccess: false,
      };
    default:
      return {
        ...state,
      };
  }
};
export default updateProfile;
