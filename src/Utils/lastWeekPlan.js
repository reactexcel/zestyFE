import { allDayList } from "src/Utils/localStorageUtil";

const allDaysListSelection = (day) => {
  switch (day) {
    case "Monday":
      return 1;
    case "Tuesday":
      return 2;
    case "Wednesday":
      return 3;
    case "Thursday":
      return 4;
    case "Friday":
      return 5;
    case "Saturday":
      return 6;
    case "Sunday":
      return 7;
    default:
      return 0;
  }
};

const getFormattedFoodDetails = (meal) => {
  let foodArray = [];

  for (let el in meal.data) {
    if (allDayList.includes(el)) {
      let orderValue = allDaysListSelection(el);
      foodArray.push({ [el]: meal.data[el], order: orderValue });
    }
  }

  foodArray = foodArray.sort((a, b) => {
    return a.order - b.order;
  });

  return foodArray;
};

export { getFormattedFoodDetails };
