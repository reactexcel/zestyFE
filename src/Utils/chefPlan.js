//remove empty plan

const removeEmptyPlan = (checfFoodPlan) => {
  Object.keys(checfFoodPlan).map((val) => {
    if (checfFoodPlan[val].Breakfast?.length == 0) {
      delete checfFoodPlan[val].Breakfast;
    }
    if (checfFoodPlan[val].Lunch?.length == 0) {
      delete checfFoodPlan[val].Lunch;
    }
    if (checfFoodPlan[val].Dinner?.length == 0) {
      delete checfFoodPlan[val].Dinner;
    }
    if (
      checfFoodPlan[val].Breakfast?.length == 0 &&
      checfFoodPlan[val].Lunch?.length == 0 &&
      checfFoodPlan[val].Dinner?.length == 0
    ) {
      delete checfFoodPlan[val];
    }
    if (checfFoodPlan[val] && Object.keys(checfFoodPlan[val]).length === 0) {
      delete checfFoodPlan[val];
    }
  });

  return {...checfFoodPlan};
};

//chef time will always be absoulte hours or hours with 30 minute
//This will update chef time(15 min before time)

const updatedMealTime = (currentTime) => {
  if (currentTime.slice(3, 5) == "30") {
    return currentTime.replace("30", "15").slice(0, 8);
  }
  if (currentTime.slice(3, 5) == "00") {
    const updatedTime = currentTime[0] + `${parseInt(currentTime[1]) - 1}` + ":45 " + currentTime[6] + "M";
    return updatedTime;
  }
};


export { removeEmptyPlan, updatedMealTime };