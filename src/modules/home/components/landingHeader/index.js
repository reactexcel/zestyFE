import React from "react";
import { useHistory } from "react-router";
import lunch_box from "src/assets/images/lunch_box.png";
import { PATH } from "src/constants/path";
import "./index.scss";

function LandingHeader() {
  const router = useHistory();
  const handleMenu = () => {
    router.push(PATH.MEALLANDING);
  };

  return (
    <div className='landing-header row'>
      <div className=' col-sm-6  d-flex heading-content flex-column ml-5 mr-3'>
        <p className='text-start  landing-heading'>
          Personalized fresh home cooked
        </p>
        <p className='text-start  landing-heading'>food, delivered daily. </p>
        <p
          className='text-start  landing-heading '
          style={{ fontSize: "30px" }}
        >
          Put your meals on <span>Autopilot</span> and say goodbye to decision
          fatigue.
        </p>
        <p className='text-start  landing-heading'></p>
        <p className='landing-desc line'>
          Save Up To 4 Hours Everyday By Never Having To Cook Again.
        </p>
        <p className='landing-desc'>Monthly & Weekly Plans Included! </p>
        <p className='landing-desc text-white'>NO DELIVERY FEE.</p>
        <button type='submit' className='btn Join-now' onClick={handleMenu}>
          Try for free
        </button>
      </div>
      <div className='col-sm-5 '>
        <img src={lunch_box} alt='' width='100%' />
      </div>
    </div>
  );
}
export default LandingHeader;
