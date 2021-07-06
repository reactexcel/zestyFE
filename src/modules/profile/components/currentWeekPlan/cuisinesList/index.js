import React from "react";

function CuisinesListItem({ cuisinesList }) {
  return (
    <div className='d-flex flex-wrap'>
      {cuisinesList?.map((val, i) => {
        return (
          <p className='pl-4' key={i}>
            {val}
          </p>
        );
      })}
    </div>
  );
}
export default CuisinesListItem;
