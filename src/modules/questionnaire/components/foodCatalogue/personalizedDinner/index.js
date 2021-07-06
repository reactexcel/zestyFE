import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getpersonalizedDinnerRequest,
  questionniarSelectionRequest,
} from "src/modules/questionnaire/redux/action";
import FoodPlan from "src/modules/questionnaire/components/foodCatalogue/foodPlanList";
import LoadingState from "src/components/common/spinner";
import { getData, removeData } from "src/Utils/localStorageUtil";
import {
  personalizedFoodCatalogueKeys,
  mostPrefered,
} from "src/Utils/questionniars";

const PersonalizedDinner = () => {
  const dispatch = useDispatch();
  const [selectedMenu, setSelectedMenu] = useState([]);
  const personalizedDinnerdata = useSelector(
    (state) => state.PersonalizedDinnerStatus
  );

  const selectedDinner = useSelector(
    (state) => state.Questionnaires?.PreferedDinner
  );
  const favoriteFood = useSelector(
    (state) => state.Questionnaires.favoriteFood
  );

  useEffect(() => {
    removeData("PreferedDinner");
    const payload = {
      mealType: "Dinner",
    };
    personalizedFoodCatalogueKeys.map((val) => {
      payload[val] = getData(val) || "";
    });

    payload["primary_ingredeints"] = [...favoriteFood];

    dispatch(getpersonalizedDinnerRequest(payload));
  }, []);

  useEffect(() => {
    if (personalizedDinnerdata?.data && selectedDinner?.length) {
      if (personalizedDinnerdata?.data?.Dinner) {
        const mostPreferedDish = mostPrefered(
          personalizedDinnerdata?.data?.Dinner || [],
          selectedDinner || []
        );
        dispatch(
          questionniarSelectionRequest({
            selectionType: "mostPreferedDinner",
            value: mostPreferedDish || "",
          })
        );
      }
    }
  }, [personalizedDinnerdata?.data, selectedDinner]);

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
        selectionType: "PreferedDinner",
        value: newMenu,
      })
    );
  };

  return (
    <>
      {personalizedDinnerdata.isLoading && <LoadingState />}
      {personalizedDinnerdata.isSuccess && (
        <FoodPlan
          title='Dinner'
          selectedMenu={selectedMenu}
          handlePersonalize={handlePersonalize}
          personalizedMenu={personalizedDinnerdata.data.Dinner}
        />
      )}
    </>
  );
};

export default PersonalizedDinner;
