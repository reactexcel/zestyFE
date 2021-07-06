import React, { useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import logo from "src/assets/images/logo.svg";
import toggle_icon from "src/assets/images/toggle-icon.svg";
import profile_img from "src/assets/images/profile_img.svg";
import { clearQuestionnnair } from "src/modules/questionnaire/redux/action";
import { userDetailsRequest } from "src/modules/profile/redux/action";
import { resetSocialLogin } from "src/modules/login/redux/action";
import {
  getData,
  clearLocalStorage,
  isAccessToken,
} from "src/Utils/localStorageUtil";
import { PATH } from "src/constants/path";
import "./index.scss";

function Header(props) {
  const { menupage } = props;
  const router = useHistory();
  const dispatch = useDispatch();
  const userDetailsStatus = useSelector((state) => state.UserDetails.data);

  const isSubscribed = router?.location?.pathname.includes("subscribe");
  const sameMenuNextWeek = router?.location?.state?.sameMenu;
  const isMenuPage = router?.location?.pathname.includes("menu");
  const isSignInDisabled = sameMenuNextWeek || isMenuPage ? true : false;
  const isHomePage = router?.location?.pathname === "/" ? true : false;

  useEffect(() => {
    if (getData("userid")) {
      dispatch(
        userDetailsRequest({
          userId: getData("userid"),
        })
      );
    }
  }, []);

  const handleLogin = () => {
    if (menupage) {
      router.push(PATH.MENULOGIN);
    } else {
      dispatch(resetSocialLogin());
      router.push(PATH.LOGIN);
    }
  };

  const handleSignUp = () => {
    router.push(PATH.SIGNUP);
  };

  const handleReturnHome = () => {
    router.push(PATH.HOME);
  };

  const handleLogout = () => {
    clearLocalStorage();
    dispatch(clearQuestionnnair({}));
    router.push(PATH.HOME);
  };

  const handleProfile = () => {
    router.push(PATH.PROFILE);
  };

  const handleEditQuestionnairs = () => {
    dispatch(clearQuestionnnair({}));
    router.push(PATH.QUESTIONNAIRES);
  };

  return (
    <div className={isHomePage ? "fixed_header" : "not_fixed_header"}>
      <Navbar collapseOnSelect expand='lg'>
        <div className='d-flex flex-column'>
          <Navbar.Brand>
            <img src={logo} alt='Platoo' onClick={handleReturnHome} />
          </Navbar.Brand>
          <p>Your Own Personal Chef</p>
        </div>
        {!isSubscribed && (
          <Navbar.Toggle aria-controls='responsive-navbar-nav float-right'>
            <span className='navbar-toggle-icon text-white'>
              <img src={toggle_icon} alt='toggle_icon' />
            </span>
          </Navbar.Toggle>
        )}

        {!isSubscribed && (
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'></Nav>
            <Nav>
              <Nav.Link href='#home' className='nav-text mx-2'>
                Contact
              </Nav.Link>
              <Nav.Link href='#features' className='nav-text mx-2'>
                FAQs
              </Nav.Link>
              <Nav.Link className='nav-text mx-2'>About us</Nav.Link>
              {isAccessToken() ? (
                <>
                  <Nav.Link className='nav-text mx-2' onClick={handleLogout}>
                    Logout
                  </Nav.Link>
                  <Nav>
                    <img
                      src={
                        userDetailsStatus?.image?.length
                          ? userDetailsStatus?.image
                          : profile_img
                      }
                      alt='profile_img'
                      onClick={handleProfile}
                      className='user_profile_img'
                    />
                  </Nav>
                </>
              ) : (
                <>
                  {!isSignInDisabled && (
                    <>
                      <Nav.Link className='nav-text mx-2' onClick={handleLogin}>
                        Login
                      </Nav.Link>
                      <button className='sign-up' onClick={handleSignUp}>
                        Become a Chef
                      </button>
                    </>
                  )}
                  {sameMenuNextWeek && (
                    <>
                      <button
                        className='sign-up'
                        onClick={handleEditQuestionnairs}
                      >
                        Edit
                      </button>
                    </>
                  )}
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        )}
      </Navbar>
    </div>
  );
}
export default Header;
