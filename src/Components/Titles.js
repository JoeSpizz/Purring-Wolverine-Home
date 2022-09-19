import React from 'react'

function Titles({title}) {
  return (
    <div> <svg viewBox="0 0 2200 200">
    <symbol id="c-text">
      <text text-anchor="middle" x="50%" y="80%">{title}</text>
    </symbol>
    <g className = "g-ants">
      <use href="#c-text" className="text-copy1"></use>
      <use href="#c-text" className="text-copy1"></use>
      <use href="#c-text" className="text-copy1"></use>
      <use href="#c-text" className="text-copy1"></use>
      <use href="#c-text" className="text-copy1"></use>
    </g>
    </svg></div>
  )
}

export default Titles