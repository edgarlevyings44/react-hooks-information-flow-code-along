// import React, { useState } from "react";
// import { getRandomColor } from "./randomColorGenerator.js";
// import Child from "./Child";

// Deliverable Part 1

// function Parent() {
//   const randomColor = getRandomColor();
//   const [color, setColor] = useState(randomColor);

//   function handleChangeColor() {
//     const newRandomColor = getRandomColor();
//     setColor(newRandomColor);
//   }

//   return (
//     <div className="parent" style={{ backgroundColor: color }}>
//       <Child onChangeColor={handleChangeColor} />
//       <Child onChangeColor={handleChangeColor}/>
//       console.log(onChangeColor);
//     </div>
//   );
// }

// export default Parent;

// Deliverable Part 2 while putting Child Component inside Parent

// import React, { useState } from "react";
// import { getRandomColor } from "./randomColorGenerator.js";
// import Child from "./Child";

import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childrenColor, setChildrenColor] = useState("#FFF");

  function handleChangeColor(newChildColor) {
    const newRandomColor = getRandomColor();
    setColor(newRandomColor);
    setChildrenColor(newChildColor);
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color={childrenColor} onChangeColor={handleChangeColor} />
      <Child color={childrenColor} onChangeColor={handleChangeColor} />
    </div>
  );
}

export default Parent;