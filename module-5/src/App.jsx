import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UseEffect from "./component/UseEffect";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        onClick={() => setCount(count + 1)}
        className="btn px-8 py-4 border-2 border-green-300 hover:bg-green-200"
      >
        Increase
      </button>
      <p className="text-4xl my-10">{count}</p>
      <button
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
        className="btn px-8 py-4 border-2 border-red-300 hover:bg-red-200"
      >
        Decrease
      </button>
      <UseEffect/>
    </div>
  );
}

export default App;
