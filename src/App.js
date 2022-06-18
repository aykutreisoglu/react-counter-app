import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increaseBtn = () => {
    setCount(count + 1);
  };
  const resetBtn = () => {
    setCount(0);
  };
  const decreaseBtn = () => {
    setCount(count - 1);
  };

  return (
    <div className="app">
      <div>
        <h1>COUNTER</h1>
        <p>{count}</p>
        <button className="btn" onClick={increaseBtn}>
          INCREASE
        </button>
        <button className="btn" onClick={resetBtn}>
          RESET
        </button>
        <button className="btn" onClick={decreaseBtn}>
          DECREASE
        </button>
      </div>
    </div>
  );
}

export default App;
