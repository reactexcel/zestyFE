import React from "react";
import avtar from "src/assets/images/avtar.svg";
import twitter from "src/assets/images/twitter.svg";
import facebook from "src/assets/images/facebook.svg";
import instagram from "src/assets/images/instagram.svg";
import "./index.scss";

function UserDetails({ userDetailsStatus, handleUpdateProfile }) {
  const { data } = userDetailsStatus;
  return (
    <div className='about-user'>
      <div className='d-flex pl-5 py-5 my-5 flex-wrap'>
        {data?.image?.length ? (
          <img src={data?.image} alt={avtar} />
        ) : (
          <img src={avtar} alt='user_img' width='60%' maxheight='120px' />
        )}
        <div className='user-profile-details d-flex flex-column justify-content-center mx-4'>
          {data?.name ? (
            <p className='user-name'>
              {data?.name?.first} {data?.name?.last}
            </p>
          ) : null}
          <div className='social-media d-flex justify-content-between'>
            <img src={twitter} alt='twitter' />
            <img src={facebook} alt='facebook' />
            <img src={instagram} alt='instagram' />
          </div>
          <button
            type='submit'
            className='edit-profile mt-3'
            onClick={handleUpdateProfile}
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}
export default UserDetails;
