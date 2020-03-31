import React from 'react'

const XIcon = ({ x, y }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="7"
    height="7"
    viewBox="0 0 7 7"
    fill="none"
    x={x}
    y={y}
  >
    <path d="M1 1L6 6M6 1L1 6" stroke="black" strokeWidth="0.5" />
  </svg>
)

export default XIcon
