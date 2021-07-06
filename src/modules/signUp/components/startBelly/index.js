import React from "react";
import "./index.scss";

export default function StartBelly() {
  return (
    <div className='StartFillingYourBelly'>
      Start Filling Your Belly
      <hr className='hline' />
      <div className='required'>
        Fields marked <span className='star'>*</span> are required
      </div>
    </div>
  );
}
