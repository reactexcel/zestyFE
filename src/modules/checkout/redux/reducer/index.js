import * as constants from "../action/types";
import * as constant from "src/modules/menu/redux/action/types";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  data: {},
};

const SaveFoodPlan = (state = initialState, action) => {
  switch (action.type) {
    case constants.SAVE_FOOD_PLAN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case constants.SAVE_FOOD_PLAN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        ...action.payload.response,
      };
    case constants.SAVE_FOOD_PLAN_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        data: { ...action.payload },
      };
    case constant.RESET_FOOD_PLAN_REQUEST:
      return {
        ...state,

        isSuccess: false,
      };
    default:
      return {
        ...state,
      };
  }
};
export default SaveFoodPlan;
