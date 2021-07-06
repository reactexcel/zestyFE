import React, { useEffect } from "react";
import DietarySelection from "src/modules/questionnaire/components/dietaryRequirements/dietarySelection";
import { setData } from "src/Utils/localStorageUtil";
import "./index.scss";

export default function DietaryRequirements({ diet, handleAlert }) {
  const handleDietary = (e) => {};

  useEffect(() => {
    setData(3, "stepperValue");
  }, []);

  return (
    <div>
      <div className='container-sp'>
        <DietarySelection
          handleDietary={handleDietary}
          diet={diet}
          handleAlert={handleAlert}
        />
      </div>
    </div>
  );
}
