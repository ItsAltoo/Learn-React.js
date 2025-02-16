import { useState } from "react";
import "./App.css";
import "./global.css"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline text-amber-500 mb-3">
          Hello world!
        </h1>
        
        <button
          className="btn btn-outline btn-info"
          onClick={() => setCount(count + 1)}>
          count : {count}
        </button>

        <button className="btn btn-primary">Primary</button>
      </div>
      <div className="flex flex-col items-center justify-center h-screen bg-base-200">
      <h1 className="text-3xl font-bold">Hello, DaisyUI!</h1>
      <button className="btn btn-primary mt-4">Klik Aku!</button>
      <button className="btn btn-secondary mt-2">Tombol Kedua</button>
      <button className="btn btn-accent mt-2">Tombol Ketiga</button>
    </div>
    </>
  );
}

export default App;
