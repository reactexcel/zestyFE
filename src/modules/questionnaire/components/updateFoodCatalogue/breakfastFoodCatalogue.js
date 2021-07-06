import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import PersonalizedBreakFast from "src/modules/questionnaire/components/foodCatalogue/personalizedbreakfast";
import { PATH } from "src/constants/path";
import './index.scss'

function BreakfastFoodCatalogue() {
  const QuestionnairesStatus = useSelector((state) => state.Questionnaires);
  const router = useHistory();

  const handleBreakfastNextButton = () => {
    if (QuestionnairesStatus.mealType.includes("Lunch")) {
      router.push(PATH.LUNCHCATALOGUE);
    } else if (QuestionnairesStatus.mealType.includes("Dinner")) {
      router.push(PATH.DINNERCATALOGUE);
    } else {
      router.push(`/menu/${QuestionnairesStatus.day[0]}`);
    }
  };

  return (
    <div>
      <PersonalizedBreakFast />
      <div className='d-flex justify-content-end mx-5 px-5 mt-5'>
        <button
          className='update_Time text-right'
          onClick={handleBreakfastNextButton}
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default BreakfastFoodCatalogue;
