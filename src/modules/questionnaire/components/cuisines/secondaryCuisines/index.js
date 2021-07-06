import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CuisinesList from "../cuisinesList";
import CuisinesDetails from "../cuisinesDetails";
import { questionniarSelectionRequest } from "src/modules/questionnaire/redux/action";
import { setData } from "src/Utils/localStorageUtil";
import { allCuisinesLists, getSelection } from "src/Utils/questionniars";
import "./index.scss";

function SecondaryCuisines() {
  const dispatch = useDispatch();
  const QuestionnairesStatus = useSelector((state) => state.Questionnaires);

  useEffect(() => {
    setData(2, "stepperValue");
  }, []);

  const secondaryList = allCuisinesLists.filter(
    (value) => !QuestionnairesStatus?.primaryCuisine?.includes(value)
  );

  const handleSecondaryCuisines = (val) => {
    const secondaryCuisines = getSelection(
      QuestionnairesStatus.secondaryCuisine,
      val
    );
    dispatch(
      questionniarSelectionRequest({
        selectionType: "secondaryCuisine",
        value: secondaryCuisines,
      })
    );
  };

  return (
    <>
      <div className='container-sp'>
        <CuisinesDetails
          title='Select Your Secondary Cuisines!'
          description='Choose as many as you like. This is for when you feel you want a
          change of taste and a little variety.'
        />
        <CuisinesList
          cuisines={secondaryList}
          handleCuisineChange={handleSecondaryCuisines}
          list={QuestionnairesStatus.secondaryCuisine}
        />
      </div>
    </>
  );
}
export default SecondaryCuisines;
