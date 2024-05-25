import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-7xl">Test</h1>
      <button className="btn btn-primary">Primary</button>
    </>
  );
}

export default App;
