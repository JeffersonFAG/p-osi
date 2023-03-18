import { createContext, useEffect, useState } from "react";
import Button from "./components/Button.jsx";
import Modal from "./components/Modal";
import Content from "./components/Content.jsx";
import "./App.css";

const ColorContext = createContext();

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState("");
  const [reset, setReset] = useState();

  const values = {
    color,
    reset,
  };
  useEffect(() => {
    setColor("");
  }, [reset]);

  return (
    <ColorContext.Provider value={values}>
      <div className="App">
        <Content color />
        <div className="app-btn-container">
          <Button
            setModal={() => {
              setColor("red");
              setIsOpen(true);
            }}
            colorBtn="red"
          />
          <Button
            setModal={() => {
              setColor("blue");
              setIsOpen(true);
            }}
            colorBtn="blue"
          />
        </div>
        {isOpen && <Modal setIsOpen={setIsOpen} setReset={setReset} />}
      </div>
    </ColorContext.Provider>
  );
}
export { ColorContext };
export default App;
