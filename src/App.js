import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const addCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <h1>Count : {count}</h1>
      <button onClick={addCount}>Click</button>
    </div>
  );
}

export default App;
