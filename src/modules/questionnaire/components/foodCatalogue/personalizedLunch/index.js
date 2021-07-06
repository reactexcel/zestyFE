import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodPlan from "src/modules/questionnaire/components/foodCatalogue/foodPlanList";
import LoadingState from "src/components/common/spinner";
import {
  getpersonalizedLunchRequest,
  questionniarSelectionRequest,
} from "src/modules/questionnaire/redux/action";
import { getData, removeData } from "src/Utils/localStorageUtil";
import {
  personalizedFoodCatalogueKeys,
  mostPrefered,
} from "src/Utils/questionniars";

const PersonalizedLunch = () => {
  const dispatch = useDispatch();
  const [selectedMenu, setSelectedMenu] = useState([]);

  const personalizedLunchData = useSelector(
    (state) => state.PersonalizedLunchStatus
  );
  const favoriteFood = useSelector(
    (state) => state.Questionnaires.favoriteFood
  );
  const selectedLunch = useSelector(
    (state) => state.Questionnaires.PreferedLunch
  );

  useEffect(() => {
    removeData("PreferedLunch");
    const payload = {
      mealType: "Lunch",
    };
    personalizedFoodCatalogueKeys.map((val) => {
      payload[val] = getData(val) || "";
    });
    payload["primary_ingredeints"] = [...favoriteFood];
    dispatch(getpersonalizedLunchRequest(payload));
  }, []);

  useEffect(() => {
    if (personalizedLunchData?.data && selectedMenu?.length) {
      if (personalizedLunchData?.data?.Lunch) {
        const mostPreferedDish = mostPrefered(
          personalizedLunchData?.data?.Lunch || [],
          selectedLunch || []
        );
        dispatch(
          questionniarSelectionRequest({
            selectionType: "mostPreferedLunch",
            value: mostPreferedDish || "",
          })
        );
      }
    }
  }, [personalizedLunchData?.data, selectedLunch]);

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
        selectionType: "PreferedLunch",
        value: newMenu,
      })
    );
  };

  return (
    <>
      {personalizedLunchData.isLoading && <LoadingState />}
      {personalizedLunchData.isSuccess && (
        <FoodPlan
          title='Lunch'
          selectedMenu={selectedMenu}
          handlePersonalize={handlePersonalize}
          personalizedMenu={personalizedLunchData.data.Lunch}
        />
      )}
    </>
  );
};

export default PersonalizedLunch;
