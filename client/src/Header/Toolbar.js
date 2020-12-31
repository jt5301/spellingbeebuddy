import React, {useState,useRef} from 'react'
import './header.css'
export const Toolbar = () => {
  const [overlay,overlayOn] = useState(true)
  const node = useRef()
  //overlay might have to be separate component so unmount can work properlu
  function turnOverlayOff(event){
    document.body.style.backgroundColor = "rgba(0,0,0,0)";
    overlayOn(false)
    console.log('remove e')
    document.removeEventListener('mousedown',handleClick)
  }
  function handleClick(){
    console.log('test')
  }

  function turnOverlayOn(event){
    document.addEventListener("mousedown", handleClick);
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    console.log('test')
    overlayOn(true)
    console.log(overlay)
  }
  return (
      <div className = 'Toolbar' >
        {overlay ?
        <div id = 'overlay' onClick = {(event)=>{
          turnOverlayOff(event)
          handleClick()
          }}>
          <div id = 'overlayText'>TEST TEST TEST</div>
        </div>
        :
        ''}
        <div id = 'Help' onClick = {(event)=>{turnOverlayOn(event)}}> Help</div>
      </div>
  )
}
export default Toolbar
