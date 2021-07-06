import React, { useEffect, useState } from "react";
import { withRouter, useHistory } from "react-router";
import { useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import icon1 from "src/assets/images/1.png";
import { setData } from "src/Utils/localStorageUtil";
import { PATH } from "src/constants/path";
import MealTiming from "src/modules/questionnaire/components/mealTime/mealTiming";
import "./index.scss";

function MealTime(props) {
  const titletype = ["Breakfast", "Lunch", "Dinner"];
  const [alert, setAlert] = useState(false);
  const QuestionnairesStatus = useSelector((state) => state.Questionnaires);
  const router = useHistory();

  useEffect(() => {
    setData(7, "stepperValue");
  }, []);

  const handleBack = () => {
    const {
      Breakfast_Time_Interval,
      Lunch_Time_Interval,
      Dinner_Time_Interval,
      mealType,
    } = QuestionnairesStatus;
    if (
      !Breakfast_Time_Interval &&
      !Lunch_Time_Interval &&
      !Dinner_Time_Interval
    ) {
      setAlert(true);
    } else {
      if (mealType.includes("Breakfast")) {
        router.push(PATH.BREAKFASTCATALOGUE);
      } else if (mealType.includes("Lunch")) {
        router.push(PATH.LUNCHCATALOGUE);
      } else if (mealType.includes("Dinner")) {
        router.push(PATH.DINNERCATALOGUE);
      } else {
        router.push(`/menu/${QuestionnairesStatus.day[0]}`);
      }
    }
  };

  return (
    <>
      <div className='time-wrapper-container'>
        <p className='select-y26 text-center mb-5'>
          Would you like to order for breakfast, lunch or dinner ?{" "}
        </p>
        {props.match.path === "/updatetime" ? (
          <div>
            {alert ? (
              <p className='text-center text-danger '>
                Please select Atleast One Option
              </p>
            ) : null}
          </div>
        ) : (
          <div>
            {props.mealtimes ? (
              <p className='text-center text-danger '>
                Please select Atleast One Option
              </p>
            ) : null}
          </div>
        )}
        <Row className=''>
          {titletype.map((val, i) => {
            return (
              <Col xs={12} md={4} key={i}>
                <MealTiming
                  title={val}
                  icon={icon1}
                  handleAlert={props.handleAlert}
                />
              </Col>
            );
          })}
        </Row>
        {props.match.path === "/updatetime" ? (
          <div className='d-flex justify-content-end'>
            <button
              className='text-right'
              className='updateTime'
              onClick={handleBack}
            >
              Next
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
}
export default withRouter(MealTime);
