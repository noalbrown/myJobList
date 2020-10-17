import * as React from "react";

function TrashIcon(props) {
  return (
    <svg
      viewBox="0 0 21 21"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5.5 4.5h10v12a2 2 0 01-2 2h-6a2 2 0 01-2-2zm5-2a2 2 0 012 2h-4a2 2 0 012-2zM3.5 4.5h14M8.5 7.5v8M12.5 7.5v8" />
      </g>
    </svg>
  );
}

export default TrashIcon;
