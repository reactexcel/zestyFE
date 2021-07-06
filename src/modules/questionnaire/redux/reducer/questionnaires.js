import * as constants from "../action/types";
import { getData } from "src/Utils/localStorageUtil";
import { clearQuestionniareState } from "src/Utils/questionniars";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  primaryCuisine: getData("primaryCuisine") || [],
  secondaryCuisine: getData("secondaryCuisine") || [],
  foodType: getData("foodType") || [],
  spicy: getData("spicy") || [],
  allergens: getData("allergens") || [],
  childCount: getData("childrenCount") || "",
  adultCount: getData("adultCount") || "",
  extraMention: getData("extraMention") || "",
  mealType: getData("mealType") || [],
  day: getData("day") || [],
  Breakfast_Time_Interval: getData("Breakfast_Time_Interval") || "",
  Dinner_Time_Interval: getData("Dinner_Time_Interval") || "",
  Lunch_Time_Interval: getData("Lunch_Time_Interval") || "",
  PreferedBreakFast: getData("PreferedBreakFast") || [],
  PreferedLunch: getData("PreferedLunch") || [],
  PreferedDinner: getData("PreferedDinner") || [],
  favoriteFood: getData("favoriteFood") || [],
  mostPreferedBreakFast: getData("mostPreferedBreakFast") || "",
  mostPreferedLunch: getData("mostPreferedLunch") || "",
  mostPreferedDinner: getData("mostPreferedDinner") || "",
  dislikedFood: [],
};

const Questionnaires = (state = initialState, action) => {
  switch (action.type) {
    case constants.UPDATE_QUESTIONNAIRE_DATA:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        ...action.payload,
      };
    case constants.CLEARQUESTIONNAIR:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: false,
        ...clearQuestionniareState(),
      };
    default:
      return {
        ...state,
      };
  }
};
export default Questionnaires;
