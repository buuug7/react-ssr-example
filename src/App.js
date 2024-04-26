import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>react server side render</h1>
      <p style={{ textAlign: "left" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eveniet
        illum minus nisi tempore, quae dolore, qui et voluptas nam modi quidem
        distinctio quia. Perferendis quibusdam tempora magnam quidem
        perspiciatis.
      </p>
      <p>Counter: {count}</p>
      <p>
        <button
          onClick={() => {
            setCount((pre) => ++pre);
          }}
        >
          Add
        </button>
      </p>
    </div>
  );
}
