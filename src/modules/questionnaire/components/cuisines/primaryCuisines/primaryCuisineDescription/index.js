import React, { memo } from "react";
import CuisineDetails from "../../cuisinesDetails";
import "./index.scss";

const PrimaryCuisineDescription = ({ isSelected = false }) => {
  return (
    <div className='cuisines-details'>
      <CuisineDetails
        title='Select Your Primary Cuisines!'
        description='This is your favourite choice, the cuisines you could eat upto 5 days in
      a week and it forms the staple of your diet.'
      />
      <div className='py-1'>
        {isSelected ? (
          <p className='text-center text-danger'>
            Please Select Atleast One Cuisine
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default memo(PrimaryCuisineDescription);
