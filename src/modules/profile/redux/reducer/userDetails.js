import * as constants from "../action/types";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  data: {},
};

const userDetails = (state = initialState, action) => {
  switch (action.type) {
    case constants.USER_DETAILS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case constants.USER_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        ...action.payload.response,
      };
    case constants.USER_DETAILS_ERROR:
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
export default userDetails;
