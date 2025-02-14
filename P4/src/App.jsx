import { useState } from "react";
import "./App.css";
import "./assets/styles/index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <button onClick={() => setCount(count + 1)}>count : {count}</button>
      </div>
    </>
  );
}

export default App;
