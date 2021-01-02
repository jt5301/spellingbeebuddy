import React from 'react'

const Hexagon = (props) => {
  console.log(props)
  return (
    <div className = {props.className}>
      <div id = 'hexagonLeft'>

      </div>
      <div id = 'hexagonFill'>
      <input id = 'letterInput'></input>
      </div>
      <div id = 'hexagonRight'>

      </div>
    </div>
  )
}

export default Hexagon
