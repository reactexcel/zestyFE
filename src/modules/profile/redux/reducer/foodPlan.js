import * as constants from "../action/types";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  data: {},
};

const showFoodPlan = (state = initialState, action) => {
  switch (action.type) {
    case constants.SHOW_FOOD_PLAN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case constants.SHOW_FOOD_PLAN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        ...action.payload.response,
      };
    case constants.SHOW_FOOD_PLAN_ERROR:
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

export default showFoodPlan;
