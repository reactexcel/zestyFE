import React from "react";
import { Spinner } from "react-bootstrap";
import "./index.scss";

const Loading = () => {
  return (
    <div className='spinner'>
      <Spinner animation='border' variant='warning' className='loadingState' />
    </div>
  );
};
export default Loading;
