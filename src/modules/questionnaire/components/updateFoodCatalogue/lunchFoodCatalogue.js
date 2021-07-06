import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import PersonalizedLunch from "src/modules/questionnaire/components/foodCatalogue/personalizedLunch";
import { PATH } from "src/constants/path";
import "./index.scss";

function LunchFoodCatalogue() {
  const QuestionnairesStatus = useSelector((state) => state.Questionnaires);
  const router = useHistory();

  const handleLunchNextButton = () => {
    if (QuestionnairesStatus.mealType.includes("Dinner")) {
      router.push(PATH.DINNERCATALOGUE);
    } else {
      router.push(`/menu/${QuestionnairesStatus.day[0]}`);
    }
  };

  return (
    <div>
      <PersonalizedLunch />
      <div className='d-flex justify-content-end mx-5 px-5 mt-5'>
        <button
          className='update_Time text-right'
          onClick={handleLunchNextButton}
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default LunchFoodCatalogue;
