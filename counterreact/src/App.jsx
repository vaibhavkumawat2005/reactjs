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

  const handledecrement = () => {
    if (counter > 0) {
      setcounter(counter - 1);
    }
  };
  
    

  console.log("App Component Rendered");

  return (
    <>
      <div className="container">
        <h2>Heyyy bhai from here</h2>
        <h4>Count {counter}</h4>
        <button onClick={()=>setcounter(counter+1)}>Increment</button>
        <button onClick={handledecrement}>Decrement</button>
        {isActive ? <Test1 /> : <Test2 />}
        <button onClick={() => setActive(!isActive)}>Toggle Component</button>
      </div>

    </>
  );
}

export default App;
