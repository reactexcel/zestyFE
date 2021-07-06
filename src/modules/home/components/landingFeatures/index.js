import React from "react";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router";
import FoodDetails from "src/modules/home/components/foodDetails";
import home_meal_feature from "src/assets/images/home_meal_feature.svg";
import bkg from "src/assets/images/bkg.png";
import feat1 from "src/assets/images/feature_1.png";
import feat2 from "src/assets/images/feat_2.png";
import { PATH } from "src/constants/path";
import "./index.scss";

function LandingFeatures() {
  const router = useHistory();

  const handleMenu = () => {
    router.push(PATH.MEALLANDING);
  };

  return (
    <div className='mt-5 meal_feature'>
      <div
        style={{
          backgroundImage: `url(${bkg})`,
          backgroundSize: "cover",
          height: "500px",
        }}
      >
        <div className='meal-setting'>
          Tired of cooking every meal but find ordering from restaurants too
          expensive? Try Zesty. Extremely affordable home cooked food
          personalized for you.
          <br />
          <br />
          Subscribe for weekly or monthly options and let Zesty take care of
          your every day breakfast, lunch and dinner.
          <br />
          <br />
          Meals starting from just AED 15 with free delivery!
        </div>
      </div>
      <p className='meal_feature_heading'>Why Zesty? </p>
      <Row className=' row1'>
        <Col lg={1}></Col>
        <Col lg={5}>
          <img src={feat1}  alt='meal_feature' width='100%'></img>
        </Col>
        <Col lg={5} className='mt-4'>
          <p className='meal_feature_heading'>Save 24 Hours Every Week</p>
          <p className='meal_feature_text'>
            Automating your Meals With Zesty Will Give A Day Back To You Every
          </p>
          <FoodDetails details='Homemade meals cooked exactly the way you like.' />
          <FoodDetails
            details='As you use Zesty more, we get better at personalising the menu
              according to your taste and eating habits.'
          />

          <FoodDetails
            details="Don't worry about grocery shopping for the right ingredients
              anymore or cleaning up your dishes after an appetising meal."
          />

          <button type='submit' className='button' onClick={handleMenu}>
            Subscribe Now
          </button>
        </Col>
      </Row>
      <Row className='mt-4 row2 '>
        <Col lg={1}></Col>
        <Col lg={5} className='mt-3'>
          <p className='meal_feature_heading'>
            We Think About Great Meal Ideas Just For You
          </p>
          <p className='meal_feature_text'>
            As We Learn About The Cuisines You Like And Your Diet Requirements.
            Our Algorithm Designs Custom Menus For You!{" "}
          </p>
          <FoodDetails details='Don&apos;t have to fight decision fatigue about "what to cook next"' />
          <FoodDetails
            details='Amazing variety from the best chefs specialised in cooking the
              particular cuisines.'
          />
          <FoodDetails
            details="Made fresh and healthy, making sure it's tasty as well as
              affordable."
          />
          <button type='submit' className='button mt-5' onClick={handleMenu}>
            Get Started
          </button>
        </Col>
        <Col lg={5}>
          <img
            src={feat2}
            alt='home_meal_feature'
            width='100%'
          ></img>
        </Col>
      </Row>
      <Row className='mt-4 row2 '>
        <Col lg={1}></Col>
        <Col lg={5}>
          <img
            src={home_meal_feature}
            alt='meal_feature'
            width='100%'
          ></img>
        </Col>
        <Col lg={5} className='mt-4'>
          <div>
            <div className='meal_feature_heading'>
              Real homemade food cooked by real chefs.
              <br />
              <br />
            </div>
            <div className='pl-2'>
              Our talented chefs come from diverse background- from full time
              mothers to professional restaurant cooks.
              <br />
              <br />
              Each meal is fresh and made with love and the cuisines are cooked
              by chefs specialist in those cuisines.
            </div>
          </div>
        </Col>
      </Row>
      <Row className='mt-4 mb-5 row3'>
        <Col lg={1}></Col>
        <Col lg={10} className='mt-5'>
          <p className='meal_feature_heading'>
            Spend just 5 minutes selecting your weekly meals.
          </p>
          <p className='meal_feature_text1'>
            We understand how it feels about stressing about having a good home
            cooked meal every day when you have so many other things to worry
            about and we want to take care of that worry for you.
          </p>
          <p className='meal_feature_text1'>
            We are committed to following the highest safety standards in terms
            of quality and hygiene. Zesty promises that you will never need to
            worry about having a delicious home cooked meal just like it’s
            cooked by your mother.
          </p>
        </Col>
      </Row>
      <div className='d-flex'>
        <button
          onClick={handleMenu}
          className='personal_chef_button justify-content-center'
        >
          Make Zesty your Personal Chef
        </button>
      </div>
    </div>
  );
}
export default LandingFeatures;
