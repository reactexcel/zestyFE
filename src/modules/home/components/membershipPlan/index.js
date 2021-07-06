import React from "react";
import { useHistory } from "react-router";
import { Row, Col, Container } from "react-bootstrap";
import { PATH } from "src/constants/path";
import "./index.scss";

function MemberShipPlan({
  membershipPeriod,
  membershipPrice,
  membershipMessage,
}) {
  const router = useHistory();
  const handleMenu = () => {
    router.push(PATH.MEALLANDING);
  };

  return (
    <div className='landing_membership mx-3 '>
      <Container>
        <Row className='row1'>
          <Col lg={1}></Col>
          <Col lg={10}>
            <div className='membership'>
              <Row className='px-4 py-4'>
                <Col lg={6} md={6} sm={12}>
                  <div className='membership_text'>
                    <p className='membership_text_heading'>
                      {membershipPeriod} Membership
                    </p>
                    <p className='membership_text_para'>{membershipMessage}</p>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <div className='membership_price'>
                    <p className='price_text text-center'>
                      AED {membershipPrice}
                    </p>
                    <button
                      onClick={handleMenu}
                      className='join_button d-flex align-items-center'
                    >
                      Join and get first week free
                    </button>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={1}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default MemberShipPlan;
