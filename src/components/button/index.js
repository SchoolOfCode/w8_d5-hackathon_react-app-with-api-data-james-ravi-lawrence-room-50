import React from "react";

function Button({ handleClick, buttonText }) {
  return <button onClick={handleClick}>{buttonText}</button>;
}
export default Button;
