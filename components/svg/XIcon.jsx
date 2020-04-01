import React from 'react'

const XIcon = ({ x, y }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="9"
    height="9"
    viewBox="0 0 9 9"
    fill="none"
    x={x}
    y={y}
  >
    <path d="M1 1L8 8M8 1L1 8" stroke="black" strokeWidth="1.2" />
  </svg>
)

export default XIcon
