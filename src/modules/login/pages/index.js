import React, { useState, useEffect } from "react";
import { withRouter, useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import {
  getLoginRequest,
  getSocialRequest,
  facebookEmailRequest,
} from "../redux/action";
import EmailCard from "src/modules/login/components/emailCard";
import LoginFooter from "src/components/common/footer";
import LoginInput from "src/components/common/input";
import LoginBtn from "src/components/common/button";
import SnackbarAleart from "src/components/common/alert";
import LoginHeader from "src/components/common/header";
import { isAccessToken } from "src/Utils/localStorageUtil";
import { PATH } from "src/constants/path";
import "./index.scss";

function LoginPage(props) {
  const [login, setLogin] = useState({
    email: "",
    password: "",
    fbFirstName: "",
    fbLastName: "",
    fbUserId: "",
    fbEmailId: "",
    warningBox: false,
  });
  const [showModal, setShowModal] = useState(false);
  const [fbUserEmail, setFbUserEmail] = useState("");
  const [vaildMessage, setVaildEmailMessage] = useState(false);

  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.Login);
  const socialLoginStatus = useSelector((state) => state.SocialLogin);
  const facebookEmailStatus = useSelector((state) => state.facebookEmail);

  const router = useHistory();

  const handleFbEmail = (e) => {
    setFbUserEmail(e.target.value);
  };

  useEffect(() => {
    if (facebookEmailStatus.isSuccess) {
      if (facebookEmailStatus && facebookEmailStatus?.data == null) {
        setShowModal(true);
      } else {
        dispatch(
          getSocialRequest({
            name: {
              first: login.fbFirstName,
              last: login.fbLastName,
            },
            email: fbUserEmail,
            facebookId: login.fbUserId,
            isadmin: false,
          })
        );
      }
    }
  }, [facebookEmailStatus.isSuccess]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login.email !== "" && login.password !== "") {
      dispatch(
        getLoginRequest({
          email: login.email,
          password: login.password,
        })
      );
    }
  };

  const responseGoogle = (response) => {
    if (response && !response.error) {
      const { profileObj } = response;
      dispatch(
        getSocialRequest({
          name: {
            first: profileObj?.givenName,
            last: profileObj?.familyName,
          },
          email: profileObj?.email,
          isadmin: false,
        })
      );
    }
  };

  const responseFacebook = (response) => {
    if (response && response?.name && !response.email) {
      setLogin({
        ...login,
        fbFirstName: response.name,
        fbUserId: response.userID,
      });
      dispatch(
        facebookEmailRequest({
          facebookId: response.userID,
        })
      );
    } else {
      if (response && response?.name) {
        dispatch(
          getSocialRequest({
            name: {
              first: response?.name,
              last: "",
            },
            email: response.email,
            facebookId: response.userID,
            isadmin: false,
          })
        );
      }
    }
  };

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    if (fbUserEmail && fbUserEmail.includes("@")) {
      dispatch(
        getSocialRequest({
          name: {
            first: login.fbFirstName,
            last: login.fbLastName,
          },
          email: fbUserEmail,
          facebookId: login.fbUserId,
          isadmin: false,
        })
      );
      setShowModal(false);
    } else {
      setVaildEmailMessage(true);
    }
  };

  useEffect(() => {
    if (isAccessToken()) {
      if (props.location.pathname.includes("menu")) {
        router.push({
          pathname: PATH.CHECKOUT,
          state: { isMenu: true },
        });
      } else {
        router.push(PATH.HOME);
      }
    }
    if (loginStatus?.data?.error == 1) {
      setLogin({ ...login, warningBox: true });
    }
  }, [loginStatus]);

  const handleSignUpRedirect = () => {
    if (props.location.pathname.includes("menu")) {
      router.push(`/menu/${props.match.params.day}/signup`);
    } else {
      router.push(PATH.SIGNUP);
    }
  };

  useEffect(() => {
    if (socialLoginStatus.isSuccess == true) {
      if (props.location.pathname.includes("menu")) {
        router.push({
          pathname: PATH.CHECKOUT,
          state: { isMenu: true },
        });
      } else {
        router.push(PATH.HOME);
      }
      if (socialLoginStatus.isError == true) {
        setLogin({ ...login, warningBox: true });
      }
    }
  }, [socialLoginStatus]);

  const handleForgetPassword = () => {
    router.push(PATH.FORGETPASSWORD);
  };

  const handleClose = () => {
    setLogin({ ...login, warningBox: false });
  };

  return (
    <div>
      <div className='desktop'>
        <LoginHeader />
        <div className='login-page'>
          {login.warningBox ? (
            <SnackbarAleart
              warningShow={login.warningBox}
              warnigMessage={loginStatus?.data?.message}
              handleClose={handleClose}
            />
          ) : null}
          <p className='welcome'> Welcome</p>
          <form onSubmit={(e) => handleSubmit(e)}>
            <LoginInput
              placeholder='Email Address*'
              type='email'
              handleOnChange={(e) => {
                setLogin({ ...login, email: e.target.value });
              }}
            />
            <LoginInput
              placeholder='Password*'
              type='password'
              handleOnChange={(e) => {
                setLogin({ ...login, password: e.target.value });
              }}
            />
            <LoginBtn
              loader={loginStatus.isLoading}
              type='submit'
              buttonText='Login'
            />
          </form>
          <EmailCard
            showModal={showModal}
            handleFbEmail={(e) => handleFbEmail(e)}
            handleSubmitEmail={(e) => handleSubmitEmail(e)}
            vaildMessage={vaildMessage}
          />
          <p className='login-link2' onClick={handleForgetPassword}>
            Forget Password ?
          </p>
          <br />
          <div className='flex-center'>
            <p className='login-link2'>Don't have an account ?</p>
            <p className='login-link3' onClick={handleSignUpRedirect}>
              Signup Here
            </p>
          </div>
          <div className='or'> Or </div>
          <div className='facebook-btn'>
            <FacebookLogin
              appId='395307491778600'
              fields='name,email,picture'
              className='facebook-login'
              textButton='CONTINUE WITH FACEBOOK'
              icon='fa-facebook'
              callback={responseFacebook}
              isMobile={false}
            />
          </div>
          <div className='google-btn'>
            <GoogleLogin
              clientId='552527499477-m8imfrl5cg2t3dpjob4d9tua2ut21v1a.apps.googleusercontent.com'
              buttonText='CONTINUE WITH GOOGLE'
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
              className='gmail-login'
            />
          </div>
          <div className='flex-center'>
            <p className='login-link2'>Want to cook on Zesty?</p>
            <p className='login-link3'>Signup as a Chef</p>
          </div>
        </div>
        <LoginFooter />
      </div>
    </div>
  );
}
export default withRouter(LoginPage);
