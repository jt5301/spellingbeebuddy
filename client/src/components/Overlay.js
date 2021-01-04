import React, {useEffect,useRef} from 'react'
import './components.css'
import GithubLogo from './github-brands.svg'
import LinkedInLogo from './linkedin-brands.svg'


const Overlay = (props) => {
  const node = useRef()
  function handleClick(event){
    if (node.current.contains(event.target)) {
      return;
    }
    props.turnOff()
  }
  function closeOverlay(){
    props.turnOff()
  }
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);
  return (
    <div ref={node} onClick = {(event)=>{handleClick(event)}} id = 'overlayContainer'>
    <div id = 'close' onClick = {()=>{closeOverlay()}}>+</div>
      <div className = 'helptext' id = 'header'>Hey!</div>
      <p className = 'helptext'>
       I wanted to make a NYT Spelling Bee buddy.The program cross references all possible words using the list
        found <span>
          <a href = "https://github.com/lorenbrichter/Words"> here</a>
        </span>. It's still a work in progress. Right now I'm trying to figure out the best way to get the words that use a single letter multiple times (ex: the letters bekping can be used to spell beekeeping, but my algorithm doesn't detect words that use multiple e's yet). I hope to get a sense of how to do this soon!
         In the meantime, here's a link to the repo and my linkedIn. Thanks!
      </p>
      <div className = 'iconContainer'>
      <a href = 'https://github.com/jt5301/spellingbeecheat'>
      <img src={GithubLogo} alt="Github" height="20px" width="20px" />
      </a>
      <a href = 'https://www.linkedin.com/in/johnt5301/'>
      <img src = {LinkedInLogo} alt = 'LinkedIn' height = '20px' width = '20px' />
      </a>
      </div>
    </div>
  )
}

export default Overlay
