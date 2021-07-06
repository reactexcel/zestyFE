import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import LoginBtn from "src/components/common/button";
import LoginInput from "src/components/common/input";
import LoginFooter from "src/components/common/footer";
import LoginHeader from "src/components/common/header";
import SnackbarAleart from "src/components/common/alert";
import { forgetpassRequest } from "../redux/action";
import { PATH } from "src/constants/path";
import "./index.scss";

const ForgetPassword = () => {
  const [forgetPass, setForgetPass] = useState({
    email: "",
    warningBox: false,
  });
  const dispatch = useDispatch();
  const router = useHistory();

  const forgetpassStatus = useSelector((state) => state.ForgetPassword);

  useEffect(() => {
    if (forgetpassStatus?.data?.error == "0") {
      router.push(PATH.LOGIN);
    }
    if (forgetpassStatus?.data?.error == "1") {
      setForgetPass({ ...forgetPass, warningBox: true });
    }
  }, [forgetpassStatus]);

  const handleSubmit = () => {
    dispatch(
      forgetpassRequest({
        email: forgetPass.email,
      })
    );
  };

  const handleClose = () => {
    setForgetPass({ ...forgetPass, warningBox: false });
  };

  return (
    <div className='forget_desktop'>
      <LoginHeader />
      <div className='forget-page'>
        {forgetPass.warningBox ? (
          <SnackbarAleart
            warningShow={forgetPass.warningBox}
            warnigMessage={forgetpassStatus?.data?.message}
            handleClose={handleClose}
          />
        ) : null}
        <p className='welcome'> Welcome</p>
        <LoginInput
          placeholder='Enter Email*'
          type='email'
          handleOnChange={(e) => {
            setForgetPass({ ...forgetPass, email: e.target.value });
          }}
        />
        <LoginBtn
          handleSubmit={handleSubmit}
          loader={forgetpassStatus.isLoading}
          buttonText='Submit'
        />
      </div>
      <LoginFooter />
    </div>
  );
};

export default ForgetPassword;
