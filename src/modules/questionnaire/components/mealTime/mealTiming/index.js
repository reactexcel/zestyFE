import React, { useState } from "react";
import { withRouter } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import toggle from "src/assets/images/toggle.svg";
import TimeSelection from "src/modules/questionnaire/components/mealTime/timeSelection";
import { questionniarSelectionRequest } from "src/modules/questionnaire/redux/action";
import { getSelection } from "src/Utils/questionniars";
import "./index.scss";

function MealTiming(props) {
  const [showtime, setShowTime] = useState(false);
  const [time, setTime] = useState("00:00");
  const [startBreakFast, setStartBreakFast] = useState("7:00 AM- 7:30 AM");
  const [startLunch, setStartLunch] = useState("12:00 PM - 12:30 PM");
  const [startDinner, setStartDinner] = useState("07:00 PM - 07:30 PM");
  const dispatch = useDispatch();
  const QuestionnairesStatus = useSelector((state) => state.Questionnaires);

  const handleShowTime = () => {
    setShowTime(!showtime);
  };

  const handleCloseTime = () => {
    setShowTime(false);
  };

  const handleBreakfastClick = (e) => {
    setStartBreakFast(e.target.value);
    dispatch(
      questionniarSelectionRequest({
        selectionType: "Breakfast_Time_Interval",
        value: e.target.value,
      })
    );
  };

  const handleLunchClick = (e) => {
    setStartLunch(e.target.value);
    dispatch(
      questionniarSelectionRequest({
        selectionType: "Lunch_Time_Interval",
        value: e.target.value,
      })
    );
  };

  const handleDinnerClick = (e) => {
    setStartDinner(e.target.value);
    dispatch(
      questionniarSelectionRequest({
        selectionType: "Dinner_Time_Interval",
        value: e.target.value,
      })
    );
  };

  const handleDietary = (val) => {
    let mealType = getSelection(QuestionnairesStatus?.mealType, val);
    dispatch(
      questionniarSelectionRequest({
        selectionType: "mealType",
        value: mealType,
      })
    );

    const breakFastSelecated = mealType.includes("Breakfast") || false;
    const lunchSelected = mealType.includes("Lunch") || false;
    const dinnerSelected = mealType.includes("Dinner") || false;
    if (breakFastSelecated) {
      dispatch(
        questionniarSelectionRequest({
          selectionType: "Breakfast_Time_Interval",
          value: startBreakFast,
        })
      );
    } else {
      dispatch(
        questionniarSelectionRequest({
          selectionType: "Breakfast_Time_Interval",
          value: "",
        })
      );
    }
    if (lunchSelected) {
      dispatch(
        questionniarSelectionRequest({
          selectionType: "Lunch_Time_Interval",
          value: startLunch,
        })
      );
    } else {
      dispatch(
        questionniarSelectionRequest({
          selectionType: "Lunch_Time_Interval",
          value: "",
        })
      );
    }

    if (dinnerSelected) {
      dispatch(
        questionniarSelectionRequest({
          selectionType: "Dinner_Time_Interval",
          value: startDinner,
        })
      );
    } else {
      dispatch(
        questionniarSelectionRequest({
          selectionType: "Dinner_Time_Interval",
          value: "",
        })
      );
    }
    if (!(props.match.path === "/updatetime")) {
      props.handleAlert();
    }
    setShowTime(!showtime);
  };

  return (
    <>
      <div className='drop-con'>
        <div
          className={`${
            QuestionnairesStatus?.mealType?.indexOf(props.title) >= 0
              ? "drop-btn-active"
              : "drop-btn"
          }`}
          onClick={handleShowTime}
        >
          <div className='drop-img'>
            <img src={props.icon} alt='logo' className='drop-im' />
          </div>
          <div className='text-center props.title-text'>
            {props.title?.toUpperCase()}
            <span>
              <img src={toggle} alt='toggle' />
            </span>
          </div>
          <p className='show-time  text-center'>
            {props.title === "Breakfast"
              ? `${QuestionnairesStatus.Breakfast_Time_Interval}`
              : props.title === "Lunch"
              ? `${QuestionnairesStatus.Lunch_Time_Interval}`
              : `${QuestionnairesStatus.Dinner_Time_Interval}`}
          </p>
        </div>
      </div>
      {showtime ? (
        <TimeSelection
          handleCloseTime={handleCloseTime}
          title={props.title}
          time={time}
          startBreakFast={startBreakFast}
          startLunch={startLunch}
          startDinner={startDinner}
          QuestionnairesStatus={QuestionnairesStatus}
          handleBreakfastClick={(val) => handleBreakfastClick(val)}
          handleLunchClick={(val) => handleLunchClick(val)}
          handleDinnerClick={(val) => handleDinnerClick(val)}
          handleDietary={(title) => handleDietary(props.title)}
        />
      ) : null}
    </>
  );
}
export default withRouter(MealTiming);
