import { getData } from "src/Utils/localStorageUtil";

export const getFoodIdList = () => {
  const updatedList = getData("AllFoodList");
  let foodDetails = {};

  Object.entries(updatedList).map(async ([day, menu]) => {
    foodDetails = { ...foodDetails };
    const { Breakfast, Lunch, Dinner } = menu;
    if (Breakfast?.length > 0 || Lunch?.length > 0 || Dinner?.length > 0) {
      foodDetails = {
        ...foodDetails,
        [day]: {
          ...foodDetails[day],
          Breakfast: Breakfast && Breakfast[0]?._id ? [Breakfast[0]?._id] : [],
          Lunch: Lunch && Lunch[0]?._id ? [Lunch[0]?._id] : [],
          Dinner: Dinner && Dinner[0]?._id ? [Dinner[0]?._id] : [],
        },
      };
    }
  });

  return foodDetails;
};

export const userCheckoutDetails = (details) => {
  const {
    firstName: first = "",
    lastName: last = "",
    email: receiverEmail = "",
    shippingAddress,
    city: shippingState,
    zipCode: shippingZipcode,
    mobile: mobile,
  } = details;
  const userDetails = {
    receiverName: { first, last },
    receiverEmail,
    shippingAddress,
    shippingState,
    shippingZipcode,
    mobile: mobile,
  };

  return userDetails;
};

export const personalizedItemUtil = (breakfast, lunch, dinner) => {
  let payload = {
    other_breakfast_choices_data: {
      name: "other breakfast choices",
    },
    other_lunch_choices_data: {
      name: "other lunch choices",
    },
    other_dinner_choices_data: {
      name: "other dinner choices",
    },
  };

  breakfast.forEach((breakfastdata, key) => {
    payload["other_breakfast_choices_data"][`dish_${key + 1}`] = breakfastdata;
  });

  lunch.forEach((lunchdata, index) => {
    payload["other_lunch_choices_data"][`dish_${index + 1}`] = lunchdata;
  });

  dinner.forEach((dinnerdata, keyvalue) => {
    payload["other_dinner_choices_data"][`dish_${keyvalue + 1}`] = dinnerdata;
  });

  return payload;
};

export const noOfDishes = (foodList={}) => {
  let count = 0;
  Object.keys(foodList).map((val) => {
    if (foodList[val]?.Breakfast?.length > 0) {
      count = count + 1;
    }
    if (foodList[val]?.Dinner?.length) {
      count = count + 1;
    }
    if (foodList[val]?.Lunch?.length) {
      count = count + 1;
    }
  });

  return count;
};
