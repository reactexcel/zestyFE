import React from "react";
import { formatDate } from "src/Utils/checkDateRange";
import "./index.scss";

const MealSelectionButton = ({
  index,
  open,
  active,
  startdate,
  enddate,
  setLastWeekPlanActive,
}) => {
  return (
    <button
      className={active ? "activeBtn" : "notActiveBtn"}
      onClick={() => setLastWeekPlanActive(index)}
      aria-controls='example-collapse-text'
      aria-expanded={open}
    >
      {formatDate(startdate)} -{" "}
      {formatDate(enddate)}
    </button>
  );
};

export default MealSelectionButton;
