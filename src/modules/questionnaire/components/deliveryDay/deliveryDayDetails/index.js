import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { questionniarSelectionRequest } from "src/modules/questionnaire/redux/action";
import { allDayList, setData } from "src/Utils/localStorageUtil";
import DeliveryDayButton from "src/modules/questionnaire/components/deliveryDay/deliveryDayButton";
import DeliveryDayDescription from "src/modules/questionnaire/components/deliveryDay/deliveryDayDescription";
import "./index.scss";

export default function DeliveryDayDetails({ deliveryDays, handleAlert }) {
  const QuestionnairesStatus = useSelector((state) => state.Questionnaires);
  const deliveryday = [...allDayList];

  const dispatch = useDispatch();
  useEffect(() => {
    setData(8, "stepperValue");
  }, []);

  const handledeliveryday = (val) => {
    let day =
      QuestionnairesStatus?.day?.length > 0 ? QuestionnairesStatus?.day : [];
    if (day.indexOf(val) >= 0) {
      day = [...day];
      day = day.filter((value) => value !== val);
    } else {
      day = [
        ...deliveryday.filter(
          (value) => val == value || day.indexOf(value) >= 0
        ),
      ];
    }
    dispatch(
      questionniarSelectionRequest({
        selectionType: "day",
        value: day,
      })
    );
    handleAlert();
  };

  return (
    <div className='dietaryquestion'>
      <DeliveryDayDescription isSelected={deliveryDays} />
      <div className='options-day'>
        {deliveryday.map((val, i) => {
          return (
            <DeliveryDayButton
              key={val}
              value={val}
              day={QuestionnairesStatus?.day}
              handledeliveryday={handledeliveryday}
            />
          );
        })}
      </div>
    </div>
  );
}
