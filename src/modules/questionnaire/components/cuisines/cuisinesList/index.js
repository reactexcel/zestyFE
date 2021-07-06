import React from "react";
import { Row, Col } from "react-bootstrap";
import "./index.scss";

function CuisinsList({ cuisines, handleCuisineChange, list }) {
  const getClassNames = (currentCusine) => {
    return `${
      currentCusine === "South Indian"
        ? "north2"
        : currentCusine === "North Indian"
        ? "north1"
        : currentCusine === "Chinese"
        ? "north3"
        : currentCusine === "Continental"
        ? "north4"
        : "north5"
    }   ${
      list?.length && list?.includes(currentCusine) ? "north-active" : "north-i"
    }`;
  };
  return (
    <Row>
      {cuisines?.map((val, i) => {
        return (
          <Col xs={6} md={3} key={i}>
            <div className={getClassNames(val)}>
              <p
                className='north-txt'
                onClick={() => {
                  handleCuisineChange(val);
                }}
              >
                {val?.toUpperCase()}
              </p>
            </div>
          </Col>
        );
      })}
    </Row>
  );
}
export default CuisinsList;
