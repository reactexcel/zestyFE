import React from "react";
import { questionniarSelectionRequest } from "src/modules/questionnaire/redux/action";
import { useDispatch, useSelector } from "react-redux";
import FavoriteFoodDetails from "src/modules/questionnaire/components/common/allItemList";
import { getSelection } from "src/Utils/questionniars";

function FavoriteFoodList({ title }) {
  const dispatch = useDispatch();
  const QuestionnairesStatus = useSelector((state) => state.Questionnaires);

  const handleFood = (val) => {
    let foodList = getSelection(QuestionnairesStatus?.favoriteFood, val);
    dispatch(
      questionniarSelectionRequest({
        selectionType: "favoriteFood",
        value: foodList,
      })
    );
  };

  return (
    <FavoriteFoodDetails
      list={title?.data}
      selections={QuestionnairesStatus?.favoriteFood}
      handleSelectionChnage={handleFood}
      isFavoriteFood={true}
    />
  );
}
export default FavoriteFoodList;
