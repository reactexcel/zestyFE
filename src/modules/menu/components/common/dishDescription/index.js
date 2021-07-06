import React from "react";
import "./index.scss";

const DishDescription = ({ description, isMobile = false }) => {
  return (
    <p
      className={`text-left ${
        isMobile ? "meal-item-description-mobile mx-2" : "meal-item-description"
      } mt-3 mb-1`}
    >
      {description}
    </p>
  );
};
export default DishDescription;
