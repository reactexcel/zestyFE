import React from "react";
import { Col, Row } from "react-bootstrap";
import "./index.scss";

const AllItemList = ({
  list,
  selections,
  handleSelectionChnage,
  isFavoriteFood = false,
}) => {
  return (
    <Row>
      {list?.length
        ? list?.map((val, i) => {
            return (
              <Col xs={6} md={3} key={i} className='all-item-hover'>
                <div
                  className='all-item-con'
                  className={`${
                    selections?.indexOf(isFavoriteFood ? val._id : val.name) >=
                    0
                      ? "all-item-con-active"
                      : "all-item-con"
                  }`}
                  onClick={(e) =>
                    handleSelectionChnage(isFavoriteFood ? val._id : val.name)
                  }
                >
                  <p className='all-item-itm' value={"Peanuts"}>
                    {val.name}
                  </p>
                </div>
              </Col>
            );
          })
        : null}
    </Row>
  );
};

export default AllItemList;
