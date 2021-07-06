import React from "react";
import "./index.scss";

const CuisineDetails = ({ title, description }) => {
  return (
    <div className='cuisines-details'>
      <p className='select-y text-center'>{title} </p>
      <p className='cuisines-text text-center'>{description}</p>
    </div>
  );
};

export default CuisineDetails;
