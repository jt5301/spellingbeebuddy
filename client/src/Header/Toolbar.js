import React, {useState} from 'react'
import './header.css'
import Overlay from '../components/Overlay.js'

export const Toolbar = () => {
  const [overlayOn,setOverlayOn] = useState(false)
  let hexesLeft = document.getElementsByClassName('hexagonLeft')
  let hexesRight = document.getElementsByClassName('hexagonRight')
  let hexesCenter = document.getElementsByClassName('hexagonFill')
  let input = document.getElementsByClassName('letterInput')
  let button = document.getElementById('Get_Words')

  function turnOverlayOff(){
    document.body.style.backgroundColor = "rgba(0,0,0,0)";
    for(let i = 0;i<hexesLeft.length;i++){
      hexesLeft[i].style.color = '#e6e6e6'
      hexesRight[i].style.color = '#e6e6e6'
      hexesCenter[i].style.backgroundColor = '#e6e6e6'
      input[i].style.backgroundColor = '#e6e6e6'
    }
    button.style.backgroundColor= '#ffffff'
    button.style.borderColor = '#e6e6e6'
    setOverlayOn(false)
  }

  function turnOverlayOn(){
    for(let i = 0;i<hexesLeft.length;i++){
      hexesLeft[i].style.color = '#808080'
      hexesRight[i].style.color = '#808080'
      hexesCenter[i].style.backgroundColor = '#808080'
      input[i].style.backgroundColor = '#808080'
    }
    button.style.backgroundColor= '#808080'
    button.style.borderColor = '#808080'
    console.log(hexesRight[0],hexesLeft[0])
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    setOverlayOn(true)
  }
  return (
      <div className = 'Toolbar' >
        {overlayOn ?
        <Overlay turnOff = {turnOverlayOff} />
        :
        ''}
        <div id = 'Help' onClick = {(event)=>{turnOverlayOn(event)}}> Help</div>
      </div>
  )
}
export default Toolbar
