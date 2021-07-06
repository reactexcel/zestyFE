import React, { useState } from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Nav, Navbar } from "react-bootstrap";
import Logout from "../logout";
import { PATH } from "src/constants/path";
import { clearLocalStorage } from "src/Utils/localStorageUtil";
import { clearQuestionnnair } from "src/modules/questionnaire/redux/action";
import { resetSocialLogin } from "src/modules/login/redux/action";
import avtar from "src/assets/images/avtar.svg";
import logo from "src/assets/images/logo.svg";
import "./index.scss";

function ProfileHeader({ userDetailsStatus }) {
  const [showLogout, setShowLogout] = useState(false);
  const dispatch = useDispatch();
  const savefoodplanStatus = useSelector((state) => state.SaveFoodPlan);

  const router = useHistory();
  const handleLogout = () => {
    setShowLogout(!showLogout);
  };
  const logout = () => {
    if (savefoodplanStatus.data.message === "Success") {
      clearLocalStorage();
      dispatch(clearQuestionnnair({}));
      dispatch(resetSocialLogin());
    } else {
      clearLocalStorage();
      dispatch(resetSocialLogin());
    }
  };
  const handleReturnHome = () => {
    router.push(PATH.HOME);
  };

  return (
    <div className='profile_header'>
      <Navbar collapseOnSelect expand='lg' className='bg-black'>
        <div className='d-flex flex-column' onClick={handleReturnHome}>
          <Navbar.Brand>
            <img src={logo} alt='Platoo' />
          </Navbar.Brand>
          <p>Your Own Personal Chef</p>
        </div>
        <Nav className='mr-auto'></Nav>
        <Nav onClick={handleLogout}>
          {userDetailsStatus?.data?.name ? (
            <Nav.Link className='nav-text mx-2'>{`${userDetailsStatus?.data?.name?.first} ${userDetailsStatus?.data?.name?.last}`}</Nav.Link>
          ) : null}
          {userDetailsStatus?.data?.image?.length ? (
            <img
              src={userDetailsStatus?.data?.image}
              alt='profile_img'
              className='profile_img'
            />
          ) : (
            <img src={avtar} alt='profile_img' className='profile_img' />
          )}
        </Nav>
      </Navbar>
      {showLogout ? <Logout onClick={logout} /> : null}
    </div>
  );
}
export default ProfileHeader;
