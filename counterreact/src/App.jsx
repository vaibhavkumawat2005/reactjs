import React, { useEffect, useState } from "react";
import Test1 from "./component/test1";
import Test2 from "./component/Test2";

function App() {
  const [counter, setcounter] = useState(0);
  const [isActive, setActive] = useState(true);

  useEffect(() => {
    console.log("Render..." + counter);
    return () => {
      console.log("Component Unmounted..." + counter);
    };
  }, [counter]);

  const handelerIncrement = () => {
    setcounter(counter + 1);
  };
  const handelerdecrement = () => {
    setcounter(counter - 1);
  };

  console.log("App Component Rendered");

  return (
    <>
      <h2>Heyyy bhai from here</h2>
      <h4>Count {counter}</h4>
      <button onClick={handelerIncrement}>Increment</button>
      <button onClick={handelerdecrement}>Decrement</button>
      {isActive ? <Test1 /> : <Test2 />}
      <button onClick={() => setActive(!isActive)}>Toggle Component</button>
    </>
  );
}

export default App;
