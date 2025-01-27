import React, { useState } from "react";

function Conditon() {
  const [isLight, setIsLight] = useState(true);

  const toggleBackground = () => {
    setIsLight((prev) => !prev);
  };

  return (
    <div className="container">
      <h2>
        <img
          src={
            isLight
              ? "https://i.postimg.cc/KjK1wL3c/bulb-off.png"
              : "https://i.postimg.cc/6QyTynzr/bulb-on.png"
          }
          alt="Bulb"
          onClick={toggleBackground}
          style={{ cursor: "pointer" }}
        />
      </h2>

      <button className="toggle-button" onClick={toggleBackground}>
        {isLight ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>
    </div>
  );
}

export default Conditon;
