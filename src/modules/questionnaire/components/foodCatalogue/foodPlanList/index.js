import React from "react";
import Hot_Sandwich from "src/assets/images/Hot_Sandwich.svg";
import "./index.scss";

const FoodPlanList = (props) => {
  const { personalizedMenu, selectedMenu, handlePersonalize, title } = props;
  return (
    <div>
      <center>
        <p className='item-name mb-0'>
          What dishes do you like to eat for {title}?
        </p>
        <p className='item_para'>
          Select a minimum of 5 for us to understand your preferences better.
        </p>
      </center>
      <div className='menu-list-items container'>
        {!personalizedMenu ? (
          <p className='item-name mb-0'>No Food Found !!!</p>
        ) : (
          <div className='row'>
            {personalizedMenu &&
              personalizedMenu?.map((val, i) => {
                return (
                  <div
                    className='menu-item-card-list col-md-3 col-sm-4 col-6'
                    onClick={() => handlePersonalize(val?._id)}
                    key={i}
                  >
                    <div
                      className={
                        val && selectedMenu.includes(val?._id)
                          ? "menu-item-cards-active"
                          : "menu-item-cards"
                      }
                    >
                      <div className='menu-item-card-img'>
                        {val?.images[0] ? (
                          <img
                            src={val?.images[0]?.secure_url}
                            alt='rice'
                            width='100%'
                            className='common-image'
                          />
                        ) : (
                          <img
                            src={Hot_Sandwich}
                            alt='rice'
                            width='100%'
                            className='common-image'
                          />
                        )}
                      </div>
                      <div className='d-flex flex-column h-100 '>
                        <div className='item-card-header p-2'>
                          <p className='item-name mb-0'>{val?.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodPlanList;
