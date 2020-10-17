import * as React from "react";

function PlusIcon(props) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        d="M8 4.5V8m0 3.5V8m0 0h3.5M8 8H4.5"
      />
    </svg>
  );
}

export default PlusIcon;
