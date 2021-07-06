import * as constants from "src/modules/menu/redux/action/types";
import cloneDeep from "lodash/cloneDeep";
import { getUpdatedMenuList, editFoodPlan } from "src/Utils/menu";
import { setData } from "src/Utils/localStorageUtil";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  data: {},
};

const foodList = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_FOOD_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };

    case constants.GET_FOOD_SUCCESS:
      if (Object.keys(state.data).length > 0 && action?.payload?.isSwipe) {
        const day = Object.keys(action?.payload.response.data)[0];
        const foodTime = Object.keys(action?.payload.response.data[day])[0];
        let updatedDayData = {
          ...state.data[day],
          [foodTime]: action?.payload.response.data[day][foodTime],
        };
        let updatedData = {
          ...state.data,
          [day]: updatedDayData,
        };
        setData(getUpdatedMenuList(updatedData), "AllFoodList");

        return {
          ...state,
          isLoading: false,
          isError: false,
          isSuccess: true,
          data: getUpdatedMenuList(updatedData),
        };
      } else {
        const updatedList = {
          ...state,
          isSuccess: true,
          ...action.payload.response,
          data: getUpdatedMenuList(action.payload.response.data),
        };
        setData(
          getUpdatedMenuList(action.payload.response.data),
          "AllFoodList"
        );
        return {
          ...updatedList,
        };
      }

    case constants.GET_FOOD_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        ...action.payload.response,
      };

    case constants.EXTRA_ITEM_COUNT_REQUEST: {
      setData(false, "isSwipe");
      const updatedData = editFoodPlan(state, action.payload);
      return {
        ...cloneDeep(updatedData),
      };
    }
    default:
      return {
        ...state,
      };
  }
};
export default foodList;
