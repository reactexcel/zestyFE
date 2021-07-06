import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { questionniarSelectionRequest} from 'src/modules/questionnaire/redux/action'
import DietaryDetails from "src/modules/questionnaire/components/dietaryRequirements/dietaryDetails";
import DietaryButton from "src/modules/questionnaire/components/dietaryRequirements/dietaryButton";
import { getSelection, allDietaryList } from "src/Utils/questionniars";
import "./index.scss";

const DietarySelection = ({ diet, handleAlert }) => {
  const dispatch = useDispatch();
  const QuestionnairesStatus = useSelector((state) => state.Questionnaires);

  const handleDietary = (val) => {
    let foodType = getSelection(QuestionnairesStatus?.foodType, val);

    dispatch(
      questionniarSelectionRequest({
        selectionType: "foodType",
        value: foodType,
      })
    );
    handleAlert();
  };

  return (
    <div className='dietaryquestion'>
      <DietaryDetails isSelected={diet} />
      <div className='options d-flex'>
        {allDietaryList.map((val, i) => {
          return (
            <DietaryButton
              key={i}
              val={val}
              foodType={QuestionnairesStatus?.foodType}
              handleDietary={handleDietary}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DietarySelection;
