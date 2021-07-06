import React from "react";
import { useHistory } from "react-router";
import { Spinner } from "react-bootstrap";
import { PATH } from "src/constants/path";
import './index.scss'

export default function SignUpBtn({ buttonText, handleMealLanding, loader }) {

  const router = useHistory();
  const handleLoginRedirect = () => {
    router.push(PATH.LOGIN);
  };
  
  return (
    <div className='signup'>
      <span className='conditions mx-3'>
        By signing up, you agree to our Terms & Conditions and Privacy Policy
      </span>
      <div className='signupbtn'>
        <button onClick={handleMealLanding}>
          {loader ? (
            <Spinner animation='border' role='status'>
              <span className='sr-only'>Loading...</span>
            </Spinner>
          ) : (
            buttonText
          )}
        </button>
      </div>
      <div className='alreadyHaveAnAccount'>
        <span>
          Already have an account?{" "}
          <a className='signInLink' onClick={handleLoginRedirect}>
            Sign In Here
          </a>
        </span>
      </div>
      <div className='Or'>Or</div>
      <div className='chef'>
        <span>
          Want to cook on Zesty?{" "}
          <a className='ChefLink' onClick={handleLoginRedirect}>
            Signup as a Chef
          </a>
        </span>
      </div>
    </div>
  );
}
