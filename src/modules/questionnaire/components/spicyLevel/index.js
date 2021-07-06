import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { questionniarSelectionRequest } from "src/modules/questionnaire/redux/action";
import { setData } from "src/Utils/localStorageUtil";
import SpiceLevelQuestion from "src/modules/questionnaire/components/spicyLevel/spiceLevelQuestion";
import { spiceLevelList } from "src/Utils/questionniars";
import "./index.scss";

export default function SpiceLevel({ spicyTypes, handleAlert }) {
  const dispatch = useDispatch();
  const QuestionnairesStatus = useSelector((state) => state.Questionnaires);

  useEffect(() => {
    setData(4, "stepperValue");
  }, []);

  const handleSpiceLevel = (val) => {
    dispatch(
      questionniarSelectionRequest({ selectionType: "spicy", value: [val] })
    );
    handleAlert();
  };

  return (
    <div>
      <div className='container-sp'>
        <SpiceLevelQuestion
          spicyFood={spiceLevelList}
          QuestionnairesStatus={QuestionnairesStatus}
          spicyTypes={spicyTypes}
          handleSpiceLevel={handleSpiceLevel}
        />
      </div>
    </div>
  );
}
