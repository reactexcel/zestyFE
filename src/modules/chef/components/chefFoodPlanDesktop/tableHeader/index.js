import React from "react";
import TableTitle from "../tableTitle";
import "./index.scss";

const TableHeader = () => {
  return (
    <div className='d-flex chef_table_heading'>
      <TableTitle title='Customer Name' />
      <TableTitle title='Dish Name' />
      <TableTitle title='People' />
      <TableTitle title='Timing' />
    </div>
  );
};

export default TableHeader;
