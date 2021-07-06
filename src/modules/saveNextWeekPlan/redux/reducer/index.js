import * as constants from "../action/types";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
};

const saveNextWeekPlanReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SAVE_NEXT_WEEK_PLAN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case constants.SAVE_NEXT_WEEK_PLAN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        ...action.payload.response,
      };
    case constants.SAVE_NEXT_WEEK_PLAN_ERROR:
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
export default saveNextWeekPlanReducer;
