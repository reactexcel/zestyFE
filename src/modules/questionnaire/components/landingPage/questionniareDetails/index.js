import React from "react";
import { useHistory } from "react-router";
import logo from "src/assets/images/logo.svg";
import { PATH } from "src/constants/path";
import "./index.scss";

export default function QuestionnairesDetails() {
  const router = useHistory();

  const handleChange = () => {
    router.push(PATH.QUESTIONNAIRES);
  };
  return (
    <div className='mealCenter'>
      <img className='meallogo' src={logo} alt='meal-logo' />
      <div className='mealtagline'>Your own Personal Chef</div>
      <div className='autopilot'>
        Designing the perfect homemade menu for you.
      </div>
      <div className='foodchoice'>
        Tell us about your food choices and preferences in a few short questions
        to help us
      </div>
      <div className='foodchoice'>personalise your experience. </div>
      <button className='startbutton' onClick={handleChange}>
        START
      </button>
      <button className='startbuttonmobile' onClick={handleChange}>
        Let's Go
      </button>
    </div>
  );
}
