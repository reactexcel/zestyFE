import React from "react";
import { Row, Col } from "react-bootstrap";
import logo from "src/assets/images/logo.svg";
import './index.scss'

function Footer() {
  return (
    <div className='footer'>
      <Row className='footer-content'>
        <Col>
          <div className='d-flex flex-column justify-content-center'>
            <img src={logo} alt='' />
            <p className='text-center footer-logo-text'>
              Your Own Personal Chef
            </p>
          </div>
        </Col>
        <Col>
          <ul>
            <li className='footer-heading'>COMPANY</li>
            <li className='footer-sub-heading'>Get Started</li>
            <li className='footer-sub-heading'>About Us</li>
            <li className='footer-sub-heading'>Contact</li>
          </ul>
        </Col>
        <Col>
          <ul>
            <li className='footer-heading'>PRODUCT</li>
            <li className='footer-sub-heading'>Meals</li>
            <li className='footer-sub-heading'>Pricing</li>
          </ul>
        </Col>
        <Col>
          <ul>
            <li className='footer-heading'>LEARN</li>
            <li className='footer-sub-heading'>Blog</li>
            <li className='footer-sub-heading'>FAQ</li>
          </ul>
        </Col>
      </Row>
      <Row className=' footer-content footer-mobile '>
        <Col className='footer-policy ' sm={6}>
          <p>
            <span>&#169;</span>2020 Zesty Allright Resrved
          </p>
        </Col>
        <Col className='footer-policy' sm={6}>
          <p>Terms & Condition | Privacy Policy</p>
        </Col>
      </Row>
      <Row className=' footer-content footer-desktop'>
        <Col className='footer-policy1 ' xs={12} sm={6}>
          <p className='pr-3'>
            <span>&#169;</span>2020 Zesty Allright Resrved
          </p>
        </Col>
        <Col xs={12} sm={6}>
          <p className='footer-policy2'>Terms & Condition | Privacy Policy</p>
        </Col>
      </Row>
    </div>
  );
}
export default Footer;
