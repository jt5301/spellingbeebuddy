import React from 'react'

const Hexagon = (props) => {
  return (
    <div id = {props.id} className = {props.className}>
      <div className = 'hexagonLeft'>

      </div>
      <div className = 'hexagonFill'>
      <input maxLength = '1' onChange = {(event)=>{props.checkLetter(event,props.id)}} className = 'letterInput'></input>
      </div>
      <div className = 'hexagonRight'>

      </div>
    </div>
  )
}

export default Hexagon
