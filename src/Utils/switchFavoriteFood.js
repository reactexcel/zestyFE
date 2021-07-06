export const switchFavoriteFood = (selectedTime) => {
  let val = 1;
  if (selectedTime.length === 1) {
    if (selectedTime.includes("BreakFast")) val = 1;
    else if (selectedTime.includes("Lunch")) val = 2;
    else if (selectedTime.includes("Dinner")) val = 3;
  } else if (selectedTime.length === 2) {
    if (selectedTime[0] === "BreakFast") val = 1;

    if (selectedTime[0] === "Lunch") val = 2;

    if (selectedTime[0] === "Dinner") val = 3;
  } else if (selectedTime.length === 3) val = 3;

  return val;
};
