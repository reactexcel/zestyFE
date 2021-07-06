import React from "react";
import "./index.scss";

const ChefDetails = ({ profileImage, chefName,isMobile=false }) => {
  return (
    <div className={`d-flex align-items-center ${isMobile ?'mt-3':'mt-2'} ml-4 chef_details`}>
      {profileImage && (
        <img className='chef_profile_images' src={profileImage} />
      )}
      <span className='text-left chef-names'>By Chef {chefName}</span>
    </div>
  );
};

export default ChefDetails;
