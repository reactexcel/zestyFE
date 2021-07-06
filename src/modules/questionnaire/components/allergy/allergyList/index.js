import React from "react";
import { questionniarSelectionRequest } from "src/modules/questionnaire/redux/action";
import { useDispatch, useSelector } from "react-redux";
import AllergyDetails from "src/modules/questionnaire/components/common/allItemList";
import { getSelection } from "src/Utils/questionniars";

function Allergy({ title }) {
  const dispatch = useDispatch();
  const QuestionnairesStatus = useSelector((state) => state.Questionnaires);

  const handleAllergy = (val) => {
    let allergens = getSelection(QuestionnairesStatus?.allergens, val);
    dispatch(
      questionniarSelectionRequest({
        selectionType: "allergens",
        value: allergens,
      })
    );
  };

  return (
    <AllergyDetails
      list={title?.data}
      selections={QuestionnairesStatus?.allergens}
      handleSelectionChnage={handleAllergy}
    />
  );
}
export default Allergy;
