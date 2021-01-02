import React, {useState} from 'react'
import './header.css'
import Overlay from '../components/Overlay.js'
export const Toolbar = () => {
  const [overlayOn,setOverlayOn] = useState(false)

  function turnOverlayOff(){
    document.body.style.backgroundColor = "rgba(0,0,0,0)";
    setOverlayOn(false)
  }

  function turnOverlayOn(){
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    console.log('test')
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
