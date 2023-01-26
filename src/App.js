import React, { useState } from "react";

const App = () => {
  // temprature state
  const [temprature, setTemprature] = useState(10);
  //  temprature color state
  const [tempColor, setTempColor] = useState("cold");
  // increase temp function
  const increaseTemp = () => {
    if (temprature === 40) return;
    const newTemp = temprature + 1;
    if (newTemp >= 15 && newTemp < 30) {
      setTempColor("hot");
    } else if (newTemp >= 30) {
      setTempColor("very_hot");
    }
    setTemprature(newTemp);
  };
  // decrease temp function
  const decreaseTemp = () => {
    if (temprature === 0) return;
    const newTemp = temprature - 1;
    if (newTemp < 15) {
      setTempColor("cold");
    }
    setTemprature(newTemp);
  };
  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${tempColor}`}>{temprature}°C</div>
      </div>
      <div className="button-container">
        <button onClick={increaseTemp}>+</button>
        <button onClick={decreaseTemp}>-</button>
      </div>
    </div>
  );
};

export default App;
