import React from "react";
import { Modal } from "react-bootstrap";
import modal1 from "src/assets/images/modal1.svg";
import modal2 from "src/assets/images/modal2.svg";
import "./index.scss";

function MenuModal({ show, handleModalClose }) {
  return (
    <div>
      <Modal show={show} className='menu_modal'>
        <Modal.Body>
          <div className='menu_content'>
            <p className='modal-heading'>Welcome To Zesty</p>
            <p className='modal-message'>
              We Design Personlized Menus For You Every Week Based On Your
              Preferences And Keep Improving Depending On Your Feedback.
              Customize Your Meals And Sit Back As Our Chefs Prepare Home Cooked
              Food Just The Way You Like.
            </p>
            <div className='d-flex menu_img'>
              <div className='img1'>
                <img src={modal1} alt='Modal1' className='center' />
              </div>
              <div>
                <img src={modal2} alt='Modal2' className='center' />
              </div>
            </div>
          </div>
          <div className='d-flex flex-right float-right mr-4 close_button'>
            <button onClick={() => handleModalClose()}>CONTINUE</button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default MenuModal;
