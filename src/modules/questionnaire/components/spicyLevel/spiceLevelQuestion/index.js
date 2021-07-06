import React from "react";
import SpiceLevelButton from "src/modules/questionnaire/components/spicyLevel/spiceLevelButton";
import SpiceLevelDetails from "src/modules/questionnaire/components/spicyLevel/spiceLevelDetails";
import "./index.scss";

export default function SpicyQuestion({
  spicyTypes,
  handleSpiceLevel,
  QuestionnairesStatus,
  spicyFood,
}) {
  return (
    <div>
      <div className='dietaryquestion'>
        <SpiceLevelDetails isSelected={spicyTypes} />
        <div className='options'>
          {spicyFood.map((val, i) => {
            return (
              <SpiceLevelButton
                key={i}
                spiceLevel={QuestionnairesStatus?.spicy}
                val={val}
                handleSpiceLevel={handleSpiceLevel}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
