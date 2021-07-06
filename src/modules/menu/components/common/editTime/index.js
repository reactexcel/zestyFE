import React, { memo } from "react";
import './index.scss'

const EditTime = ({ handleUpdateTime }) => {
  return (
    <button className='editTimebtn' onClick={handleUpdateTime}>
      Edit Time
    </button>
  );
};

export default memo(EditTime);
