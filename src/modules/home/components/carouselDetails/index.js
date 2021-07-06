import React from "react";
import "./index.scss";

const CarouselDetails = ({ name, comment }) => {
  return (
    <div className='customer-review-box'>
      <p className='customer-name'>{name}</p>
      <p className='customer-review-desc text-center px-4 '>{comment}</p>
    </div>
  );
};

export default CarouselDetails;
