import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { clearQuestionnnair } from "src/modules/questionnaire/redux/action";
import { saveNextWeekPlanRequest } from "../redux/action";
import { setData } from "src/Utils/localStorageUtil";
import { PATH } from "src/constants/path";

const SaveNextWeekPlanDetails = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const saveNextWeekPlan = useSelector((state) => state.saveNextWeekPlanStatus);

  useEffect(() => {
    const query = props.location.search;
    const urlParams = new URLSearchParams(query);
    const id = urlParams.get("_id");
    if (id) {
      const payload = {
        userId: id,
      };
      dispatch(saveNextWeekPlanRequest({ payload }));
    }
  }, []);

  useEffect(() => {
    (async function () {
      if (saveNextWeekPlan.isSuccess) {
        const choices = saveNextWeekPlan?.data?.response;
        if (choices) {
          for (let localdata in choices) {
            await setData(choices[localdata], localdata);
          }
          history.push({
            pathname: `/menu/${choices.day[0]}`,
            state: { sameMenu: choices },
          });
        } else {
          dispatch(clearQuestionnnair());
          history.push(PATH.QUESTIONNAIRES);
        }
      }
    })();
  }, [saveNextWeekPlan.data]);

  const styles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      <div style={styles}>
        {saveNextWeekPlan && <Spinner animation='border' variant='warning' />}
      </div>
    </>
  );
};

export default SaveNextWeekPlanDetails;
