import * as React from "react";
const Dot = (props) => (
  <svg
    width={12}
    height={12}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={6} cy={6} r={6} fill="#0A2867" />
  </svg>
);
export default Dot;
