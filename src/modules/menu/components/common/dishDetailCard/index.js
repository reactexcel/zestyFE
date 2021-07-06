import React from "react";
import DishDetails from "src/modules/menu/components/common/dishDetails";
import DishDescription from "src/modules/menu/components/common/dishDescription";
import ChefDetails from "src/modules/menu/components/common/chefDetails";
import MealPriceDetails from "src/modules/menu/components/common/mealPriceDetails";
import RemoveDish from "src/modules/menu/components/common/removeDishes";
import DishImage from "src/modules/menu/components/common/dishImage";
import "./index.scss";

const DishDetailCard = ({
  dishDetails,
  day,
  foodType,
  handleItemCount,
  handelAddExtra,
  isSideDishOpen,
  handleSelectExtraDish,
  handleRemoveDishes,
  isMobile = false,
}) => {
  const { _id: mealId, description } = dishDetails;
  const dishImageUrl = dishDetails?.images[0]?.secure_url;
  const chefProfileImage = dishDetails?.chef?.profileImage?.secure_url;
  const chefName = dishDetails?.chef?.name;
  return (
    <div className={`menu-detail-item-card ${isMobile && "w-100"}`}>
      <RemoveDish
        day={day}
        foodType={foodType}
        mealId={mealId}
        handleRemoveDishes={handleRemoveDishes}
        isMobile={isMobile}
      />
      <DishImage image={dishImageUrl} isMobile={isMobile} />
      <div style={{ position: "relative" }}>
        <DishDetails
          day={day}
          foodType={foodType}
          dishDetails={dishDetails}
          handleItemCount={handleItemCount}
          handelAddExtra={handelAddExtra}
          isSideDishOpen={isSideDishOpen}
          handleSelectExtraDish={handleSelectExtraDish}
          isMobile={isMobile}
        />
        <DishDescription description={description} isMobile={isMobile} />
        <ChefDetails
          profileImage={chefProfileImage}
          chefName={chefName}
          isMobile={isMobile}
        />
        {dishDetails?.price && (
          <MealPriceDetails
            mealTotalprices={dishDetails.mealTotalprices}
            isMobile={isMobile}
          />
        )}
      </div>
    </div>
  );
};

export default DishDetailCard;
