import React, { useEffect } from "react";
import { setData } from "src/Utils/localStorageUtil";
import PeopleCountList from "src/modules/questionnaire/components/peopleCount/peopleCountList";
import "./index.scss";

function PeopleCount({ orderFors, handleAlert }) {
  useEffect(() => {
    setData(0, "stepperValue");
  }, []);

  return (
    <div className='container-sp d-flex justify-content-center'>
      <PeopleCountList orderFors={orderFors} handleAlert={handleAlert} />
    </div>
  );
}

export default PeopleCount;
