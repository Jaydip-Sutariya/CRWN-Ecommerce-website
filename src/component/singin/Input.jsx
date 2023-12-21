import React from "react";

function Input({type, label}) {
  return (
    <>
    <div className="inputdiv">
      <input type={type} className="input" required="" />

      <label class="sc-fzqAbL hCuLgs">{label}</label>
      </div>
    </>
  );
}

export default Input;
