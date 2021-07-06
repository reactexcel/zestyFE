import React from "react";
import "./index.scss";

export default function Footer() {
  return (
    <div className='Footers'>
      <div className='row'>
        <div className='col-xs-12 col-md-4 copyright'>
          2020. Zesty LLC. All rights reserved.
        </div>
        <div className='col-xs-12 col-md-2'>Privacy Policy</div>
        <div className='col-xs-12 col-md-2'>Terms & Conditions</div>
      </div>
      <div className='row'>
        <div className='col-sm-12'>
          <a href='id' class='fa fa-facebook'></a>
          <a href='id' class='fa fa-instagram'></a>
          <a href='id' class='fa fa-twitter'></a>
        </div>
      </div>
    </div>
  );
}
