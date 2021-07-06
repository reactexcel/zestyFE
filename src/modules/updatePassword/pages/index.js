import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Header from "src/components/common/header";
import Button from "src/components/common/button";
import Input from "src/components/common/input";
import Footer from "src/components/common/footer";
import { updatePassRequest } from "../redux/action";
import { PATH } from "src/constants/path";
import "./index.scss";

function UpdatePassword(props) {
  const [login, setLogin] = useState({
    confirmPassword: "",
    password: "",
  });
  const dispatch = useDispatch();
  const updatePassStatus = useSelector((state) => state.UpdatePassword);

  useEffect(() => {
    if (updatePassStatus?.data?.error == "0") {
      props.history.push(PATH.LOGIN);
    }
  }, [updatePassStatus]);

  const handleSubmit = () => {
    if (login.confirmPassword === login.password) {
      dispatch(
        updatePassRequest({
          id: props.match.params.id,
          password: login.password,
        })
      );
    }
  };

  return (
    <div className='update_desktop'>
      <Header />
      <div className='update-page'>
        <p className='welcome'> Update Password</p>
        <Input
          placeholder='Password'
          type='password'
          handleOnChange={(e) => {
            setLogin({ ...login, password: e.target.value });
          }}
        />
        <Input
          placeholder='Confirm Password*'
          type='password'
          handleOnChange={(e) => {
            setLogin({ ...login, confirmPassword: e.target.value });
          }}
        />
        <Button
          handleSubmit={handleSubmit}
          loader={updatePassStatus.isLoading}
          buttonText='Submit'
        />
      </div>
      <Footer />
    </div>
  );
}
export default withRouter(UpdatePassword);
