import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { questionniarSelectionRequest } from "src/modules/questionnaire/redux/action";
import { setData } from "src/Utils/localStorageUtil";
import CuisinesList from "src/modules/questionnaire/components/cuisines/cuisinesList";
import PrimaryCuisineDescription from "./primaryCuisineDescription";
import { allCuisinesLists, getSelection } from "src/Utils/questionniars";
import "./index.scss";

function PrimaryCuisines({ primary, handleAlert }) {
  const dispatch = useDispatch();
  const QuestionnairesStatus = useSelector((state) => state.Questionnaires);

  useEffect(() => {
    setData(1, "stepperValue");
  }, []);

  const handlePrimaryCuisines = (val) => {
    const primaryCuisines = getSelection(
      QuestionnairesStatus.primaryCuisine,
      val
    );
    dispatch(
      questionniarSelectionRequest({
        selectionType: "primaryCuisine",
        value: primaryCuisines,
      })
    );
    handleAlert();
  };

  return (
    <>
      <div className='container-cuisines'>
        <PrimaryCuisineDescription isSelected={primary} />
        <CuisinesList
          cuisines={allCuisinesLists}
          handleCuisineChange={handlePrimaryCuisines}
          list={QuestionnairesStatus?.primaryCuisine}
        />
      </div>
    </>
  );
}
export default PrimaryCuisines;
