import * as constants from "../action/types";

const initialState = {};

const addSideDish = (state = initialState, action) => {
  switch (action.type) {
    case constants.ADD_SIDE_DISH_REQUEST:
      action.payload &&
        localStorage.setItem(
          `${Object.keys(action.payload)}Extralist`,
          JSON.stringify(action.payload)
        );
      return {
        ...state,
        ...action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
export default addSideDish;
