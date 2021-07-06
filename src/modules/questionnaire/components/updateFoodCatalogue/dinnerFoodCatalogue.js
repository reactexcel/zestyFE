import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import PersonalizedDinner from "src/modules/questionnaire/components/foodCatalogue/personalizedDinner";
import "./index.scss";

function DinnerFoodCatalogue() {
  const QuestionnairesStatus = useSelector((state) => state.Questionnaires);
  const router = useHistory();

  const handleDinnerNextButton = () => {
    router.push(`/menu/${QuestionnairesStatus.day[0]}`);
  };

  return (
    <div>
      <PersonalizedDinner />
      <div className='d-flex justify-content-end mx-5 px-5 mt-5'>
        <button
          className='update_Time text-right'
          onClick={handleDinnerNextButton}
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default DinnerFoodCatalogue;
