import * as constants from "../action/types";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
};

const pastAndCurrentWeekFoodPlan = (state = initialState, action) => {
  switch (action.type) {
    case constants.PAST_AND_CURRENT_FOODPLAN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case constants.PAST_AND_CURRENT_FOODPLAN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        ...action.payload.response,
      };
    case constants.PAST_AND_CURRENT_FOODPLAN_ERROR:
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
export default pastAndCurrentWeekFoodPlan;
