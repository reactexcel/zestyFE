import React, { useState, useEffect } from "react";
import { formatDate } from "src/Utils/checkDateRange";
import CuisinesListItem from "src/modules/profile/components/currentWeekPlan/cuisinesList";
import "./index.scss";

function UserSelections({ ShowFoodPlanStaus }) {
  const [cuisinesList, setCuisinesList] = useState({});
  
  useEffect(() => {
    if (ShowFoodPlanStaus?.data) {
      setCuisinesList(ShowFoodPlanStaus?.data?.choices);
    }
  }, [ShowFoodPlanStaus]);

  return (
    <>
      {ShowFoodPlanStaus.data.startdate && (
        <p className='active-plan'>
          Your Next Week Food Plan : From&nbsp;
          {formatDate(ShowFoodPlanStaus.data.startdate)} to &nbsp;
          {formatDate(ShowFoodPlanStaus.data.enddate)}{" "}
        </p>
      )}
      <div className='questionnaires-details'>
        <p className='text-center choices-list'>
          Your Choices in Questionnaire
        </p>
        <div className='row ml-2'>
          <div>
            <div className='d-flex flex-wrap'>
              <p className='choices-list '>Primary_Cuisine </p>:
              <CuisinesListItem cuisinesList={cuisinesList?.Primary_Cuisine} />
            </div>
            {cuisinesList?.Secondary_Cuisine ? (
              <div className='d-flex flex-wrap'>
                <p className='choices-list'>Secondary_Cuisine </p>:
                <CuisinesListItem
                  cuisinesList={cuisinesList?.Secondary_Cuisine}
                />
              </div>
            ) : null}
            <div className='d-flex'>
              <p className='choices-list'>Spice_Level </p>:
              <CuisinesListItem cuisinesList={cuisinesList?.Spice_Level} />
            </div>
            <div className='d-flex'>
              <p className='choices-list'>Meal_Types </p>:
              <CuisinesListItem cuisinesList={cuisinesList?.Meal_Types} />
            </div>
            <div className='d-flex flex-wrap'>
              <p className='choices-list'> Meal_Timing </p>:
              <CuisinesListItem cuisinesList={cuisinesList?.Meal_Timing} />
            </div>
            <div className='d-flex flex-wrap'>
              <p className='choices-list'>Days </p>:
              <CuisinesListItem cuisinesList={cuisinesList?.Days} />
            </div>
            {cuisinesList?.Allergens ? (
              <div className='d-flex flex-wrap'>
                <p className='choices-list'>Allergens </p>:
                <CuisinesListItem cuisinesList={cuisinesList?.Allergens} />
              </div>
            ) : null}
          </div>
          <div className=' col-lg-2 col-md-6 mb-2'></div>
        </div>
      </div>
    </>
  );
}
export default UserSelections;
