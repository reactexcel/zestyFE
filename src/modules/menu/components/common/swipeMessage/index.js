import React from "react";
import messageSwipe_img1 from "src/assets/images/messageSwip_img1.svg";
import messageSwipe_img2 from "src/assets/images/messageSwip_img2.svg";
import "./index.scss";

function SwipeMessage({ handleCloseSwipMessage }) {
  return (
    <div className='SwipeMessage'>
      <div className='message-box'>
        <p className='message pl-2 pr-4 py-2'>
          If you don't like this dish, swipe to change and see other dishes on
          the menu.
        </p>
        <div className='d-flex justify-content-center mb-2'>
          <button className='close_button' onClick={handleCloseSwipMessage}>
            Close
          </button>
        </div>
      </div>
      <div className='swipe-img'>
        <img src={messageSwipe_img1} alt='messageSwipe_img1' />
        <img src={messageSwipe_img2} alt='messageSwipe_img2' />
      </div>
    </div>
  );
}

export default SwipeMessage;
