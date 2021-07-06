import React from "react";
import './index.scss'

const TableTitle = ({title}) => {
  return (
    <div className='text-center chef_table_heading_name pt-3'>
      {title}
    </div>
  );
};

export default TableTitle;
