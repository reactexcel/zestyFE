import React from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { clearQuestionnnair } from "src/modules/questionnaire/redux/action";
import { resetSocialLogin } from "src/modules/login/redux/action";
import { PATH } from "src/constants/path";
import { clearLocalStorage } from "src/Utils/localStorageUtil";
import "./index.scss";

function Logout() {
  const router = useHistory();
  const dispatch = useDispatch();

  const handleLogout = () => {
    clearLocalStorage();
    dispatch(clearQuestionnnair({}));
    dispatch(resetSocialLogin());
    router.push(PATH.HOME);
  };

  return (
    <div className='logout'>
      <p className='text-center' onClick={handleLogout}>
        Logout
      </p>
    </div>
  );
}
export default Logout;
