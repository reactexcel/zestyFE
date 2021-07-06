import React, { useState } from "react";
import { useHistory } from "react-router";
import Stepper from "react-stepper-horizontal";
import { useSelector } from "react-redux";
import BackButton from "src/modules/questionnaire/components/footer/backButton";
import NextAndBackButton from "src/modules/questionnaire/components/footer/nextAndBackButton";
import PersonalizedBreakFast from "src/modules/questionnaire/components/foodCatalogue/personalizedbreakfast";
import PersonalizedLunch from "src/modules/questionnaire/components/foodCatalogue/personalizedLunch";
import PersonalizedDinner from "src/modules/questionnaire/components/foodCatalogue/personalizedDinner";
import PeopleCount from "src/modules/questionnaire/components/peopleCount";
import PrimaryCuisines from "src/modules/questionnaire/components/cuisines/primaryCuisines";
import SecondaryCuisines from "src/modules/questionnaire/components/cuisines/secondaryCuisines";
import DietRequirements from "src/modules/questionnaire/components/dietaryRequirements";
import SpiceLevel from "src/modules/questionnaire/components/spicyLevel";
import Allergies from "src/modules/questionnaire/components/allergy";
import ExtraMentions from "src/modules/questionnaire/components/extraMentions";
import MealTime from "src/modules/questionnaire/components/mealTime";
import DeliveryDay from "src/modules/questionnaire/components/deliveryDay";
import FavoriteFood from "src/modules/questionnaire/components/favoriteFood";
import { getData } from "src/Utils/localStorageUtil";

function Questionnaires(props) {
  const { activeStep, steps } = props;
  const [state, setState] = useState({
    tab: getData("stepperValue") || 0,
    primary: false,
    secondary: false,
    diet: false,
    spicy: false,
    order: false,
    mealtime: false,
    deliveryDay: false,
    allergies: false,
    personalizedBreakfast: false,
    personalizedLunch: false,
    personalizedDinner: false,
    favoritefood: false,
  });
  const QuestionnairesStatus = useSelector((state) => state.Questionnaires);
  const router = useHistory();

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <PeopleCount
            orderFors={state.order}
            handleAlert={() => handleSelctionAlert("order")}
          />
        );
      case 1:
        return (
          <PrimaryCuisines
            primary={state.primary}
            handleAlert={() => handleSelctionAlert("primary")}
          />
        );
      case 2:
        return <SecondaryCuisines />;

      case 3:
        return (
          <DietRequirements
            diet={state.diet}
            handleAlert={() => handleSelctionAlert("diet")}
          />
        );
      case 4:
        return (
          <SpiceLevel
            spicyTypes={state.spicy}
            handleAlert={() => handleSelctionAlert("spicy")}
          />
        );
      case 5:
        return <Allergies allergies={state.allergies} />;
      case 6:
        return <ExtraMentions />;
      case 7:
        return (
          <MealTime
            mealtimes={state.mealtime}
            handleAlert={() => handleSelctionAlert("mealtime")}
          />
        );
      case 8:
        return (
          <DeliveryDay
            deliveryDays={state.deliveryDay}
            handleAlert={() => handleSelctionAlert("deliveryDay")}
          />
        );
      case 9:
        return (
          <FavoriteFood
            //  personalizedBreakfast={state.personalizedBreakfast}
            // handleAlert={handleAlertDeliveryDay}
            handleAlert={() => handleSelctionAlert("favoritefood")}
          />
        );
      case 10:
        return (
          <PersonalizedBreakFast
            //  personalizedBreakfast={state.personalizedBreakfast}
            // handleAlert={handleAlertDeliveryDay}
            handleAlert={() => handleSelctionAlert("personalizedBreakfast")}
          />
        );
      case 11:
        return (
          <PersonalizedLunch
            //  personalizedBreakfast={state.personalizedBreakfast}
            // handleAlert={handleAlertDeliveryDay}
            handleAlert={() => handleSelctionAlert("personalizedLunch")}
          />
        );
      case 12:
        return (
          <PersonalizedDinner
            //  personalizedBreakfast={state.personalizedBreakfast}
            // handleAlert={handleAlertDeliveryDay}
            handleAlert={() => handleSelctionAlert("personalizedDinner")}
          />
        );

      default:
        return <PrimaryCuisines />;
    }
  };

  const handleSelctionAlert = (type) => {
    setState({ ...state, [type]: false });
  };

  const handleBackPage = () => {
    if (state.tab === 0) {
      router.push("/meallanding");
    } else if (
      state.tab === 2 &&
      QuestionnairesStatus?.primaryCuisine?.length === 4
    ) {
      setState({ ...state, tab: state.tab - 2 });
    } else {
      setState({ ...state, tab: state.tab - 1 });
    }
  };

  const handleStartPage = () => {
    const {
      adultCount,
      childrenCount,
      primaryCuisine,
      foodType,
      spicy,
      allergies,
      mealType,
      day,
      favoriteFood,
      PreferedBreakFast,
      PreferedLunch,
      PreferedDinner,
    } = QuestionnairesStatus;

    if (state.tab === 0) {
      if (adultCount === 0 && childrenCount === 0) {
        setState({ ...state, order: true });
      } else {
        setState({ ...state, tab: state.tab + 1 });
      }
    }
    if (state.tab === 1) {
      if (primaryCuisine?.length === 0) {
        setState({ ...state, primary: true });
      } else if (primaryCuisine?.length === 4) {
        setState({ ...state, tab: state.tab + 2 });
      } else {
        setState({ ...state, tab: state.tab + 1 });
      }
    }
    if (state.tab === 2) {
      setState({ ...state, tab: state.tab + 1 });
    }

    if (state.tab === 3) {
      if (foodType?.length === 0) {
        setState({ ...state, diet: true });
      } else {
        setState({ ...state, tab: state.tab + 1 });
      }
    }
    if (state.tab === 5) {
      setState({ ...state, tab: state.tab + 1 });
    }
    if (state.tab === 4) {
      if (spicy?.length === 0) {
        setState({ ...state, spicy: true });
      } else {
        setState({ ...state, tab: state.tab + 1 });
      }
    }
    if (state.tab === 5) {
      if (allergies?.length === 0) {
        setState({ ...state, allergies: true });
      } else {
        setState({ ...state, tab: state.tab + 1 });
      }
    }

    if (state.tab === 6) {
      setState({ ...state, tab: state.tab + 1 });
    }

    if (state.tab === 7) {
      if (mealType?.length === 0) {
        setState({ ...state, mealtime: true });
      } else {
        setState({ ...state, tab: state.tab + 1 });
      }
    }
    if (state.tab === 8) {
      if (day?.length === 0) {
        setState({ ...state, deliveryDay: true });
      } else {
        setState({ ...state, tab: state.tab + 1 });
      }
    }
    if (state.tab === 9) {
      if (favoriteFood?.length === 0) {
        setState({ ...state, favoritefood: true });
      } else {
        if (mealType.includes("Breakfast")) {
          setState({ ...state, tab: state.tab + 1 });
        } else if (mealType.includes("Lunch")) {
          setState({ ...state, tab: state.tab + 2 });
        } else if (mealType.includes("Dinner")) {
          setState({ ...state, tab: state.tab + 3 });
        } else {
          router.push(`/menu/${day[0]}`);
        }
      }
    }

    if (state.tab === 10) {
      if (PreferedBreakFast?.length === 0) {
        setState({ ...state, personalizedBreakfast: true });
      } else {
        if (mealType.includes("Lunch")) {
          setState({ ...state, tab: state.tab + 1 });
        } else if (mealType.includes("Dinner")) {
          setState({ ...state, tab: state.tab + 2 });
        } else {
          router.push(`/menu/${day[0]}`);
        }
      }
    }
    if (state.tab === 11) {
      if (PreferedLunch?.length === 0) {
        setState({ ...state, personalizedLunch: true });
      } else {
        if (mealType.includes("Dinner")) {
          setState({ ...state, tab: state.tab + 1 });
        } else {
          router.push(`/menu/${day[0]}`);
        }
      }
    }
    if (state.tab === 12) {
      if (PreferedDinner?.length === 0) {
        setState({ ...state, personalizedDinner: true });
      } else {
        router.push(`/menu/${day[0]}`);
      }
    }
  };

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div>
      <BackButton handleBack={handleBack} />
      <div>{getStepContent(state.tab)}</div>
      <NextAndBackButton
        buttonType={
          state.tab == 5 && QuestionnairesStatus?.allergens?.length == 0
            ? "Skip"
            : "Next"
        }
        handleStartPage={handleStartPage}
        handleBackPage={handleBackPage}
      />
      <Stepper
        steps={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
        size={20}
        completeOpacity='1'
        circleFontSize={0}
        activeStep={state.tab}
        defaultBarColor='#828282'
        completeBarColor='#E6BE3E'
        activeColor='#E6BE3E'
        completeColor='#E6BE3E'
      />
    </div>
  );
}
export default Questionnaires;
