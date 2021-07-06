import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { questionniarSelectionRequest } from "src/modules/questionnaire/redux/action";
import OrderDescription from "src/modules/questionnaire/components/peopleCount/orderDescription";
import CountButton from "src/modules/questionnaire/components/peopleCount/countButton";
import { peopleTypesList } from "src/Utils/questionniars";
import "./index.scss";

function PeopleCountList({ orderFors: isNotSelected }) {
  const [count, setCount] = useState({
    adultCount: 0,
    childrenCount: 0,
  });

  const dispatch = useDispatch();

  const handleCountChange = (peopleType, countType) => {
    const countTypeValue =
      peopleType === "Adults" ? "adultCount" : "childrenCount";
    if (countType === "add") {
      setCount({ ...count, [countTypeValue]: count[countTypeValue] + 1 });
    } else if (countType === "subtract") {
      setCount({ ...count, [countTypeValue]: count[countTypeValue] - 1 });
    }
  };

  useEffect(() => {
    dispatch(
      questionniarSelectionRequest({
        selectionType: "childrenCount",
        value: count.childrenCount,
      })
    );
  }, [count.childrenCount]);

  useEffect(() => {
    dispatch(
      questionniarSelectionRequest({
        selectionType: "adultCount",
        value: count.adultCount,
      })
    );
  }, [count.adultCount]);

  return (
    <>
      <div className='people-type-list'>
        <OrderDescription isNotSelected={isNotSelected} />
        <div className='d-flex justify-content-center'>
          <div className='options'>
            {peopleTypesList.map((val, i) => {
              return (
                <CountButton
                  key={i}
                  type={val}
                  count={count}
                  handleCountChange={handleCountChange}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default PeopleCountList;
