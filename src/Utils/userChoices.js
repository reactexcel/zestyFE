export const userChoices = (choices, isMenu) => {
  const {
    primaryCuisine,
    secondaryCuisine,
    foodType,
    spicy,
    allergens,
    day,
    mealType,
    adultCount,
    childrenCount,
    extraMention: Other_Mentions,
    orderFor: Order_For,
    favoriteFood: primary_ingredeints,
    Breakfast_Time_Interval = null,
    Lunch_Time_Interval = null,
    Dinner_Time_Interval = null,
    mostPreferedBreakFast: breakfast_primary_ingredient = null,
    mostPreferedLunch: lunch_primary_ingredient = null,
    mostPreferedDinner: dinner_primary_ingredient = null,
  } = choices;

  const menuchoices = {
    primaryCuisine,
    secondaryCuisine,
    foodType,
    allergens,
    spicy,
    mealType,
    day,
    primary_ingredeints,
  };
  const questionnairesChoices = {
    breakfast_primary_ingredient,
    lunch_primary_ingredient,
    dinner_primary_ingredient,
  };
  const checkoutChoices = {
    Breakfast_Time_Interval,
    Lunch_Time_Interval,
    Dinner_Time_Interval,
    Other_Mentions,
    Order_For,
    adult_count:adultCount,
    children_count:childrenCount,
  };
  //Choices while questionnaires
  if (isMenu) {
    return {
      ...menuchoices,
      ...questionnairesChoices,
    };
  }
  //Choices while checkout
  else {
    return {
      ...menuchoices,
      ...checkoutChoices,
    };
  }
};
