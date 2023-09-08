//Deliverable 1
// import React from "react";
// import { getRandomColor } from ".";

// function Child({ onChangeColor }) {
//   return (
//     <div
//       onClick={onChangeColor}
//       className="child"
//       style={{ backgroundColor: "#FFF" }}
//     ></div>
//   );
// }

// export default Child;

// Deliverable 2
import React from "react";
import { getRandomColor } from "./randomColorGenerator";

function Child({ onChangeColor, color }) {
  function handleClick() {
    const newColor = getRandomColor();
    onChangeColor(newColor);
  }

  return (
    <div
      onClick={handleClick}
      className="child"
      style={{ backgroundColor: color }}
    />
  );
}

export default Child;