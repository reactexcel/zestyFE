export const peopleTypesList = ["Adults", "Children"];

export const allCuisinesLists = [
  "North Indian",
  "South Indian",
  "Chinese",
  "Italian",
  "Continental",
];

export const breakFastTimingHour = [
  "07:00 AM - 07:30 AM",
  "07:30 AM - 08:00 AM",
  "08:00 AM - 08:30 AM",
  "08:30 AM - 09:00 AM",
  "09:00 AM - 09:30 AM",
  "09:30 AM - 10:00 AM",
  "10:00 AM - 10:30 AM",
  "10:30 AM - 11:00 AM",
];
export const lunchTimingHour = [
  "12:00 PM - 12:30 PM",
  "12:30 PM - 01:00 PM",
  "01:00 PM - 01:30 PM",
  "01:30 PM - 02:00 PM",
];
export const dinnerTimingHour = [
  "07:00 PM - 07:30 PM",
  "07:30 PM - 08:00 PM",
  "08:00 PM - 08:30 PM",
  "08:30 PM - 09:00 PM",
  "09:00 PM - 09:30 PM",
  "09:30 PM - 10:00 PM",
  "10:00 PM - 10:30 PM",
  "10:30 PM - 11:00 PM",
];

export const allDietaryList = ["Vegetarian", "Vegan", "Non Vegetarian"];

export const spiceLevelList = ["Mild", "Medium", "Hot"];

export const mealTimeList = ["Breakfast", "Lunch", "Dinner"];

export const personalizedFoodCatalogueKeys = [
  "primaryCuisine",
  "secondaryCuisine",
  "foodType",
  "allergens",
  "spicy",
];

export const clearQuestionniareState = () => {
  return {
    primaryCuisine: [],
    secondaryCuisine: [],
    foodType: [],
    spicy: [],
    allergens: [],
    childCount: "",
    adultCount: "",
    extraMention: "",
    mealType: [],
    day: [],
    Breakfast_Time_Interval: "",
    Dinner_Time_Interval: "",
    Lunch_Time_Interval: "",
    PreferedBreakFast: [],
    PreferedLunch: [],
    PreferedDinner: [],
    favoriteFood: [],
    mostPreferedBreakFast: "",
    mostPreferedLunch: "",
    mostPreferedDinner: "",
    dislikedFood: [],
  };
};
export const getSelection = (list, cuisine) => {
  let selection = list?.length > 0 ? list : [];
  if (selection.indexOf(cuisine) >= 0) {
    selection = [...selection];
    selection = selection.filter((value) => value !== cuisine);
  } else {
    selection = [...selection, ...[cuisine]];
  }

  return selection;
};

//Most Prefered Dish
export const mostPrefered = (allDishes, selectedDishes) => {
  const cuisines = [...allDishes];
  const selectedCuisines = [...selectedDishes];

  const filteredArray = cuisines.filter((value) =>
    selectedCuisines.includes(value._id)
  );
  const preferedDish = [];
  filteredArray.map((val) => {
    if (val.primary_ingredeints?.length > 0) {
      preferedDish.push(...val.primary_ingredeints);
    }
  });

  let mf = 1;
  let m = 0;
  let item;
  for (let i = 0; i < preferedDish.length; i++) {
    for (let j = i; j < preferedDish.length; j++) {
      if (preferedDish[i] === preferedDish[j]) m++;
      if (mf < m) {
        mf = m;
        item = preferedDish[i];
      }
    }
    m = 0;
  }

  return item || (preferedDish && preferedDish[0]) || "";
};
