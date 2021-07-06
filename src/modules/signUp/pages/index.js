import React, { useState, useEffect } from "react";
import { useHistory, withRouter } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import SignUpBtn from "src/modules/signUp/components/signupBtn";
import StartFillingYourBelly from "src/modules/signUp/components/startBelly";
import SignUpInput from "src/modules/signUp/components/signUpInput";
import Header from "src/components/common/header";
import SignUpFooter from "src/components/common/footer";
import SnackbarAleart from "src/components/common/alert";
import { getSignUpRequest } from "src/modules/signUp/redux/action";
import { isValidUser } from "src/Utils/validUser";
import { setData } from "src/Utils/localStorageUtil";
import { PATH } from "src/constants/path";
import "./index.scss";

function SignUpPage(props) {
  const disptach = useDispatch();
  const router = useHistory();
  const SignUpStatus = useSelector((state) => state.SignUp);

  const [signUp, setSignUp] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    warningBox: false,
    error: "Password mismatch",
  });

  const setAccessToken = () => {
    setData(SignUpStatus.data.token, "accessToken");
  };

  useEffect(() => {
    if (SignUpStatus.data && SignUpStatus.isSuccess) {
      if (props.location.pathname.includes("menu") && SignUpStatus.isSuccess) {
        setAccessToken();
        router.push({
          pathname: PATH.CHECKOUT,
          state: { isMenu: true },
        });
      } else {
        if (SignUpStatus.isSuccess) {
          router.push(PATH.HOME);
        }
      }
    }

    if (SignUpStatus.data.error === 1) {
      setSignUp({ ...signUp, warningBox: true });
    }
  }, [SignUpStatus]);

  const handleMealLanding = (e) => {
    e.preventDefault();
    if (signUp.password !== signUp.confirmPassword) {
      setSignUp({ ...signUp, warningBox: true, error: "Password mismatch" });
    } else {
      setSignUp({ ...signUp, error: null });
    }

    const isUserValid = isValidUser(signUp);

    if (isUserValid) {
      disptach(
        getSignUpRequest({
          name: {
            first: signUp.firstName,
            last: signUp.lastName,
          },
          email: signUp.email,
          password: signUp.password,
          isadmin: false,
        })
      );
    }
  };
  const handleClose = () => {
    setSignUp({ ...signUp, warningBox: true });
  };

  return (
    <div>
      <Header />
      {signUp.warningBox ? (
        <SnackbarAleart
          warningShow={signUp.warningBox}
          warnigMessage={SignUpStatus?.data?.message || signUp.error}
          handleClose={handleClose}
        />
      ) : null}
      <StartFillingYourBelly />
      <form onSubmit={(e) => handleMealLanding(e)}>
        <div className='credential'>
          <SignUpInput
            type='text'
            name='firstName'
            value={signUp.firstName}
            placeholder='First Name*'
            handleChange={(e) => {
              setSignUp({ ...signUp, firstName: e.target.value });
            }}
          />
          <SignUpInput
            type='text'
            name='lastName'
            placeholder='Last Name*'
            value={signUp.firstName}
            handleChange={(e) => {
              setSignUp({ ...signUp, lastName: e.target.value });
            }}
          />
          <SignUpInput
            type='email'
            placeholder='Email Address*'
            handleChange={(e) => {
              setSignUp({ ...signUp, email: e.target.value });
            }}
          />
          <SignUpInput
            type='password'
            placeholder='Password*'
            handleChange={(e) => {
              setSignUp({ ...signUp, password: e.target.value });
            }}
          />
          <SignUpInput
            type='password'
            placeholder='Password Confirm*'
            handleChange={(e) => {
              setSignUp({ ...signUp, confirmPassword: e.target.value });
            }}
          />
        </div>
        <SignUpBtn
          type='submit'
          buttonText='Sign Up'
          loader={SignUpStatus.isLoading}
        />
      </form>
      <SignUpFooter />
    </div>
  );
}
export default withRouter(SignUpPage);
