import React from "react";
import "./index.scss";

function Input({
  placeholder,
  handleOnChange,
  type,
  currentValue,
  isCheckout = false,
}) {
  return (
    <div className={isCheckout ? "input-details" : ""}>
      <input
        className={!isCheckout ? "login-input" : ""}
        value={currentValue}
        type={type}
        placeholder={placeholder}
        onChange={handleOnChange}
        required={placeholder === "Last Name" ? false : true}
      />
    </div>
  );
}
export default Input;
