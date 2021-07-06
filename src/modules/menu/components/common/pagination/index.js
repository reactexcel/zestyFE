import React, { memo } from "react";
import "./index.scss";

const Pagination = ({ paginationList }) => {
  return (
    <div className='d-flex align-items-center'>
      {paginationList?.map((val, i) => {
        return (
          <div
            key={i}
            className={
              val ? "selected_dot mx-1 my-2" : "not_selected_dot mx-1 my-2"
            }
          ></div>
        );
      })}
    </div>
  );
};

export default memo(Pagination);
