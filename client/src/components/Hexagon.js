import React, {useState} from 'react'

const Hexagon = (props) => {
  const [letter,setLetter] = useState('')

  function set
  return (
    <div id = {props.id} className = {props.className}>
      <div id = 'hexagonLeft'>

      </div>
      <div id = 'hexagonFill'>
      <input onChange = {(event)=>{props.checkLetter(event)}} id = 'letterInput'></input>
      </div>
      <div id = 'hexagonRight'>

      </div>
    </div>
  )
}

export default Hexagon
