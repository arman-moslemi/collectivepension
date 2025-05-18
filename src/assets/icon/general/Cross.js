import * as React from "react";
const Cross = (props) => (
  <svg
    width={13}
    height={13}
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M1 12.1992L12.2 0.999218" stroke="#7b7b7d" strokeLinecap="round" />
    <path
      d="M12.2065 12.1992L1.00654 0.999218"
      stroke="#7b7b7d"
      strokeLinecap="round"
    />
  </svg>
);
export default Cross;