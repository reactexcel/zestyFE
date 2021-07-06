import moment from "moment";
import cloneDeep from "lodash/cloneDeep";
import { allDayList, setData } from "src/Utils/localStorageUtil";
import { mealTimeList } from "src/Utils/questionniars";

export const getShortedDateAndTime = (selectedDaysMenu) => {
  const selectedDayList = Object.keys(selectedDaysMenu);
  const currentDaysList = allDayList.filter((val) =>
    selectedDayList.includes(val)
  );

  const startOfWeek = moment().add(1, "weeks").startOf("week");
  const endOfWeek = moment().add(1, "weeks").endOf("week");
  let days = [];
  let day = startOfWeek;
  while (day <= endOfWeek) {
    days.push({ date: day.toDate(), day: day.format("dddd") });
    day = day.clone().add(1, "d");
  }

  const shortedDaysAndDate = days.filter((val) =>
    currentDaysList.includes(val.day)
  );

  return shortedDaysAndDate;
};

//calculate Price
export const getUpdatedMenuList = (menu) => {
  const newData = menu && Object.entries(menu);

  const menuList = [...newData];

  const allNew = {
    ...menu,
  };

  const selectedDaysMenuList = menuList.filter(
    (val) => allDayList.indexOf(val[0]) !== -1
  );
  let newTotalprice = 0;

  selectedDaysMenuList.forEach((val) => {
    let newUpdate = {
      ["Breakfast"]: [],
      ["Lunch"]: [],
      ["Dinner"]: [],
    };
    const isBreakFastAvailable =
      val[1]["Breakfast"] && val[1]["Breakfast"][0]?.price;
    const isLunchAvailable = val[1]["Lunch"] && val[1]["Lunch"][0]?.price;
    const isDinnerAvailable = val[1]["Dinner"] && val[1]["Dinner"][0]?.price;

    if (isBreakFastAvailable) {
      let standardPrices = 0;
      let mealTotalprices = 0;
      const meal = val[1]["Breakfast"][0].standard_meal || [];
      meal.map(({ price, default_count }) => {
        standardPrices = standardPrices + price * default_count;
      });
      newTotalprice =
        newTotalprice +
          val[1]["Breakfast"][0].price +
          standardPrices -
          val[1]["Breakfast"][0]?.standard_dish_price || 0;
      mealTotalprices = standardPrices + val[1]["Breakfast"][0]?.price;
      newUpdate = {
        ...newUpdate,
        ["Breakfast"]: [
          {
            ...val[1]["Breakfast"][0],
            ["standardMealPrice"]: standardPrices,
            ["mealTotalprices"]: mealTotalprices,
          },
        ],
      };
    }

    if (isLunchAvailable) {
      let standadprice = 0;
      let mealTotalprices = 0;
      const meallunch = val[1]["Lunch"][0].standard_meal || [];
      meallunch.map(({ price, default_count }) => {
        standadprice = standadprice + price * default_count;
      });
      newTotalprice =
        newTotalprice +
          val[1]["Lunch"][0].price +
          standadprice -
          val[1]["Lunch"][0]?.standard_dish_price || 0;
      mealTotalprices = standadprice + val[1]["Lunch"][0]?.price;
      newUpdate = {
        ...newUpdate,
        ["Lunch"]: [
          {
            ...val[1]["Lunch"][0],
            ["standardMealPrice"]: standadprice,
            ["mealTotalprices"]: mealTotalprices,
          },
        ],
      };
    }

    if (isDinnerAvailable) {
      let standadprice = 0;
      let mealTotalprices = 0;
      const mealDinner = val[1]["Dinner"][0].standard_meal || [];
      mealDinner.map(({ price, default_count }) => {
        standadprice = standadprice + price * default_count;
      });
      newTotalprice =
        newTotalprice +
          val[1]["Dinner"][0].price +
          standadprice -
          val[1]["Dinner"][0]?.standard_dish_price || 0;
      mealTotalprices = standadprice + val[1]["Dinner"][0]?.price;
      newUpdate = {
        ...newUpdate,
        ["Dinner"]: [
          {
            ...val[1]["Dinner"][0],
            ["standardMealPrice"]: standadprice,
            ["mealTotalprices"]: mealTotalprices,
          },
        ],
      };
    }

    allNew["totalAmount"] = newTotalprice;
    allNew[val[0]] = Object.assign(newUpdate);
  });

  return { ...cloneDeep(allNew) };
};

export const selectedExtraMeals = (
  extraMealList,
  selectedMealName,
  selectedMealId,
  selectedMealPrice
) => {
  const { id, name, price } = extraMealList;
  let mealId = id ? [...id] : [];
  let mealName = name ? [...name] : [];
  let mealPrice = price ? [...price] : [];
  if (!name?.includes(selectedMealName)) {
    mealName.push(selectedMealName);
    mealId.push(selectedMealId);
    mealPrice.push(selectedMealPrice);
  }

  return { mealId, mealName, mealPrice };
};

export const getPaginatedList = (list, mealType) => {
  const { breakfastDots, lunchDots, dinnerDots } = list;
  let breakfastPaginatedList = [...breakfastDots];
  let lunchPaginatedList = [...lunchDots];
  let dinnerPaginatedList = [...dinnerDots];

  if (!breakfastDots.includes(true)) {
    breakfastPaginatedList[0] = true;
  } else {
    if (mealType === "Breakfast") {
      let currentindex = breakfastDots.indexOf(true);

      breakfastPaginatedList = breakfastDots
        ? new Array(Math.ceil(breakfastDots.length)).fill(false)
        : [];
      if (currentindex <= 1) {
        breakfastPaginatedList[currentindex + 1] = true;
      } else {
        breakfastPaginatedList[0] = true;
      }
    }
  }

  if (!lunchDots.includes(true)) {
    lunchPaginatedList[0] = true;
  } else {
    if (mealType === "Lunch") {
      let currentindex1 = lunchDots.indexOf(true);
      lunchPaginatedList = lunchDots
        ? new Array(Math.ceil(lunchDots.length)).fill(false)
        : [];

      if (currentindex1 <= 1) {
        lunchPaginatedList[currentindex1 + 1] = true;
      } else {
        lunchPaginatedList[0] = true;
      }
    }
  }

  if (!dinnerDots.includes(true)) {
    dinnerPaginatedList[0] = true;
  } else {
    if (mealType === "Dinner") {
      let currentindex2 = dinnerDots.indexOf(true);
      dinnerPaginatedList = dinnerDots
        ? new Array(dinnerDots.length).fill(false)
        : [];
      if (currentindex2 <= 1) {
        dinnerPaginatedList[currentindex2 + 1] = true;
      } else {
        dinnerPaginatedList[0] = true;
      }
    }
  }
  return { breakfastPaginatedList, lunchPaginatedList, dinnerPaginatedList };
};

export const editFoodPlan = (state, selectedValues) => {
  const newUpdatedList = {
    ...state,
  };
  const { mealName, day, mealtime, mealId, mealPrice, type } = selectedValues;
  const [currentStandardMeal] = newUpdatedList.data[day][
    mealtime
  ][0]?.standard_meal.filter((val) => val._id == mealId);
  if (type === "Add") {
    if (currentStandardMeal && currentStandardMeal["default_count"]) {
      currentStandardMeal["default_count"] =
        currentStandardMeal["default_count"] + 1;
    } else {
      newUpdatedList.data[day][mealtime][0].standard_meal.push({
        default_count: 1,
        name: mealName,
        price: mealPrice,
        _id: mealId,
      });
    }
  } else if (type === "Substract") {
    if (currentStandardMeal && currentStandardMeal["default_count"] > 1) {
      currentStandardMeal["default_count"] =
        currentStandardMeal["default_count"] - 1;
    } else {
      const findIndex = newUpdatedList.data[day][
        mealtime
      ][0].standard_meal.findIndex((a) => a._id === mealId);
      findIndex !== -1 &&
        newUpdatedList.data[day][mealtime][0].standard_meal.splice(
          findIndex,
          1
        );
    }
  } else {
    const deletesidedishes = newUpdatedList.data[day][
      mealtime
    ][0].standard_meal.findIndex((a) => a._id === mealId);
    deletesidedishes !== -1 &&
      newUpdatedList.data[day][mealtime][0].standard_meal.splice(
        deletesidedishes,
        1
      );
  }
  setData(getUpdatedMenuList(newUpdatedList.data), "AllFoodList");

  return newUpdatedList;
};

export const getStandardDishprice = (data) => {
  let days = [...allDayList];
  let meals = [...mealTimeList];
  Object.keys(data).forEach((day) => {
    if (days.includes(day)) {
      Object.keys(data[day]).forEach((meal) => {
        if (meals.includes(meal)) {
          data[day][meal].forEach((item) => {
            item.standard_dish_price = 0;
            item.standard_meal.forEach((e) => {
              item.standard_dish_price += e.price * e.default_count;
            });
          });
        }
      });
    }
  });

  return { ...cloneDeep(data) };
};
