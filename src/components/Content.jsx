import React, { useContext } from "react";
import { ColorContext } from "../App";

const Content = () => {
  const { color } = useContext(ColorContext);

  return (
    <div>
      {color === "red" ? (
        <h1 style={{ color: "red" }}>Prueba Básica</h1>
      ) : color === "blue" ? (
        <h1 style={{ color: "blue" }}>Prueba Básica</h1>
      ) : (
        <h1>Prueba Básica</h1>
      )}
    </div>
  );
};

export default Content;
