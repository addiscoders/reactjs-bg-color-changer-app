import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  //  function changeColor(color){
  //    setColor(color)
  //  }

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div
        className="fixed flex flex-wrap 
      justify-center bottom-12 inset-x-0 px-2"
      >
        <div
          className="flex flex-wrap justify-center 
        gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"
        >
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
            style={{backgroundColor: 'red', width: '100px'}}
          >
            <strong>Red</strong>
          </button>
          <button          
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
            style={{backgroundColor: 'green', width: '100px'}}
            
          >
            <strong>Green</strong>
          </button>
          <button          
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
            style={{backgroundColor: 'purple', width: '100px'}}
            
          >
            <strong>Purple</strong>
          </button>
          <button          
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
            style={{backgroundColor: 'blue', width: '100px'}}
            
          >
            <strong>Blue</strong>
          </button>
          <button          
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
            style={{backgroundColor: 'yellow', width: '100px'}}
            
          >
            <strong>Yellow</strong>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
