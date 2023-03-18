import React, { useContext } from "react";
import { ColorContext } from "../App";

const Modal = ({ setIsOpen, setReset }) => {
  const { color } = useContext(ColorContext);

  return (
    <>
      <div>
        <button
          onClick={() => {
            setIsOpen(false);
            setReset(true);
          }}
        >
          x
        </button>
        <div>señor usuario el color de la pantalla ha cambiado a{color}</div>
        <div></div>
      </div>
    </>
  );
};

export default Modal;
