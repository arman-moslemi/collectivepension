import * as React from "react";
const Block = (props) => (
  <svg
    width={23}
    height={23}
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={11.5} cy={11.5} r={10.5} stroke="#0A2867" strokeWidth={2} />
    <line
      x1={19.7526}
      y1={3.6585}
      x2={5.75258}
      y2={19.6585}
      stroke="#0A2867"
      strokeWidth={2}
    />
  </svg>
);
export default Block;
