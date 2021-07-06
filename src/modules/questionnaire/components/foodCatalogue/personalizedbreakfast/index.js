import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getpersonalizedBreakFastRequest,
  questionniarSelectionRequest,
} from "src/modules/questionnaire/redux/action";
import FoodPlan from "src/modules/questionnaire/components/foodCatalogue/foodPlanList";
import LoadingState from "src/components/common/spinner";
import { setData, getData, removeData } from "src/Utils/localStorageUtil";
import {
  personalizedFoodCatalogueKeys,
  mostPrefered,
} from "src/Utils/questionniars";

const PersonalizedBreakFast = (props) => {
  const dispatch = useDispatch();
  const [selectedMenu, setSelectedMenu] = useState([]);
  const personalizedBreakFastData = useSelector(
    (state) => state.personalizedFoodPlanStatus
  );
  const selectedBreakFast = useSelector(
    (state) => state.Questionnaires.PreferedBreakFast
  );
  const favoriteFood = useSelector(
    (state) => state.Questionnaires.favoriteFood
  );

  useEffect(() => {
    setData(10, "stepperValue");
    removeData("PreferedBreakFast");
    const payload = {
      mealType: "Breakfast",
    };
    personalizedFoodCatalogueKeys.map((val) => {
      payload[val] = getData(val) || "";
    });
    payload["primary_ingredeints"] = [...favoriteFood];

    dispatch(getpersonalizedBreakFastRequest(payload));
  }, []);

  useEffect(() => {
    if (personalizedBreakFastData?.data && selectedBreakFast.length) {
      if (personalizedBreakFastData?.data?.Breakfast) {
        const mostPreferedDish = mostPrefered(
          personalizedBreakFastData?.data?.Breakfast || [],
          selectedBreakFast || []
        );
        dispatch(
          questionniarSelectionRequest({
            selectionType: "mostPreferedBreakFast",
            value: mostPreferedDish || "",
          })
        );
      }
    }
  }, [personalizedBreakFastData.data, selectedBreakFast]);

  const handlePersonalize = (id) => {
    let newMenu = [...selectedMenu];
    const isFoodSelected = newMenu.includes(id);
    if (isFoodSelected) {
      newMenu = newMenu.filter((val) => val != id);
    } else {
      newMenu.push(id);
    }
    setSelectedMenu(newMenu);
    dispatch(
      questionniarSelectionRequest({
        selectionType: "PreferedBreakFast",
        value: newMenu,
      })
    );
  };

  return (
    <div>
      {personalizedBreakFastData.isLoading && <LoadingState />}
      {personalizedBreakFastData.isSuccess && (
        <FoodPlan
          title='BreakFast'
          personalizedMenu={personalizedBreakFastData.data.Breakfast}
          handlePersonalize={handlePersonalize}
          selectedMenu={selectedMenu}
        />
      )}
    </div>
  );
};

export default PersonalizedBreakFast;
