import React from "react";
import vector_drop from "src/assets/images/vector_drop.svg";
import "./index.scss";

const DayDetail = ({ day }) => {
  return (
    <div className='d-flex menu_list_show justify-content-between mt-3'>
      <p>{day}</p>
      <img src={vector_drop} alt='upward-icon' />
    </div>
  );
};

export default DayDetail;
