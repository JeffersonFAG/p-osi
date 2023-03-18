import React from "react";
import "../App.css";

const Button = ({ colorBtn, setModal }) => {
  return (
    <div className="btns-container">
      {colorBtn === "red" ? (
        <button onClick={setModal} className="btn btnRed"></button>
      ) : (
        <button onClick={setModal} className="btn btnBlue"></button>
      )}
    </div>
  );
};

export default Button;
