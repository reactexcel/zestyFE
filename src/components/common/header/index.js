import React from "react";
import { useHistory } from "react-router";
import { PATH } from "src/constants/path";
import Logo from "src/assets/images/logo.svg";
import "./index.scss";

export default function Header() {
  const router = useHistory();
  const handleHome = () => {
    router.push(PATH.HOME);
  };

  return (
    <img
      src={Logo}
      alt='logo'
      className='logo'
      onClick={handleHome}
    />
  );
}
