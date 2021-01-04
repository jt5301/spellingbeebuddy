import React from 'react'

const Hexagon = (props) => {

  return (
    <div id = {props.id} className = {props.className}>
      <div style = {props.id==='center' ? {color:'#f8cd05'}:{color:'#e6e6e6'}} className = 'hexagonLeft'>

      </div>
      <div style = {props.id==='center' ? {backgroundColor:'#f8cd05'}:{backgroundColor:'#e6e6e6'}} className = 'hexagonFill'>
      <input style = {props.id==='center' ? {backgroundColor:'#f8cd05'}:{backgroundColor:'#e6e6e6'}} maxLength = '1' onChange = {(event)=>{props.checkLetter(event,props.id)}} className = 'letterInput'></input>
      </div>
      <div style = {props.id==='center' ? {color:'#f8cd05'}:{color:'#e6e6e6'}} className = 'hexagonRight'>

      </div>
    </div>
  )
}

export default Hexagon
