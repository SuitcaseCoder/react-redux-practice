import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  // FROM VIDEO : https://www.youtube.com/watch?v=CVpUuw9XSjY
  // minute: 37:00

  return (
    <div className="App">
      <h1>Counter</h1>
      <button onClick={() => dispatch(increment)}>+</button>
      <button>-</button>
    </div>
  );
}

export default App;
