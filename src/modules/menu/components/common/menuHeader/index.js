import React from "react";
import menu_vector from "src/assets/images/menu_vector.svg";

function MenuHeader({ menu }) {
  return (
    <div className='menu-header1'>
      <p className='text-center menu-text'>{menu}</p>
      <p className='text-center menu-path '>
        Home
        <span className='mx-2'>
          <img src={menu_vector} alt='menu_vector' />
        </span>
        Menu
      </p>
    </div>
  );
}
export default MenuHeader;
