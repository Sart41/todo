import {memo} from "react";

export const SaveIcon = memo(({size = 24, color = "#4A90E2"}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H16.1716C16.702 3 17.2107 3.21071 17.5858 3.58579L20.4142 6.41421C20.7893 6.78929 21 7.29799 21 7.82843V19C21 20.1046 20.1046 21 19 21Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 3V9C7 9.55228 7.44772 10 8 10H15C15.5523 10 16 9.55228 16 9V3"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M13 6V7"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect
        x="7"
        y="14"
        width="10"
        height="7"
        rx="1"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  )
})