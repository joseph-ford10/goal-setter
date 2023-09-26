import React from 'react'

const Dots = ({ pageNum }) => {
  const dots = Array.from({ length: 5 }, (_, index) => {
    return index === pageNum - 1 ? (
      <div className="dot" style={{ backgroundColor: 'black' }}></div>
    ) : (
      <div className="dot"></div>
    )
  })

  return <div className="formDots">{dots}</div>
}

export default Dots
