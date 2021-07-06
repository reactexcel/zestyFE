import React from "react";
import MealCardDetails from "src/modules/home/components/mealCardDetails";
import create_menu from "src/assets/images/create_menu.svg";
import automate_meals from "src/assets/images/automate_meals.svg";
import perfect_menu from "src/assets/images/perfect_menu.svg";
import logo from "src/assets/images/feature_icon.svg";
import "./index.scss";

function MealCardList() {
  return (
    <div>
      <p className='text-center meal-list-heading '>
        How Zesty Does it's Magic
        <span>
          <img src={logo} alt='logo' />
        </span>
      </p>
      <div className='meal-card-list row'>
        <div className='meal-card col-lg-3 mx-3'>
          <MealCardDetails
            source={create_menu}
            heading='Understanding your choices'
            description='Tell us your cuisine preferences and diet requirements so we
            know your eating habits exactly.'
          />
        </div>
        <div className='meal-card col-lg-3 mx-3'>
          <MealCardDetails
            source={perfect_menu}
            heading='Perfect Menu Design'
            description='Based on your answers, we design a personalised menu and match
            you with the right chefs to cook the cuisines and dishes you
            like, just the way you like.'
          />
        </div>
        <div className='meal-card col-lg-3 mx-3'>
          <MealCardDetails
            source={automate_meals}
            heading='Automate Your Meal'
            description='Get fresh food delivered daily every week, automate your meals
            and enjoy the better things.'
          />
        </div>
      </div>
    </div>
  );
}

export default MealCardList;
