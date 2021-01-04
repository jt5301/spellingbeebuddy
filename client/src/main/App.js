import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Hexagon from '../components/Hexagon.js'
import {allSubsequences} from '../subsequence.js'
import {permutations} from '../permutations.js'
import axios from 'axios'

function App() {
  const [letters, setLetters] = useState({})
  const [dupeMessage,setDupeMessage] = useState(false)

  function addLetter(event, id){
    const newSet = {...letters}
    if(event.target.value ==='') delete newSet[id]
    else newSet[id] = event.target.value
    setLetters(newSet)
  }

   function findWords(){
    if(dupeMessage)console.log('dupe detected')
    if(Object.keys(letters).length !=7){
      console.log('needs more chars')
      return
    }
    let string = ''
    for(let letter in letters){
      if(letter!='center')string+=letters[letter]
    }
    const subsequences = allSubsequences(string,letters.center)
    let returnWords = []
    let words = Object.keys(subsequences)
    .filter((word)=>{
      return word.length >3
    })
    .map((word)=>{

    })
    console.log(words.length)

  }
  return (
    <div className="App">
      <div id = 'hexContainer'>
        <Hexagon id = '1' checkLetter = {addLetter} className = "hexOuter"/>
        <Hexagon id = '2' checkLetter = {addLetter} className = "hexOuter"/>
        <Hexagon id = '3' checkLetter = {addLetter} className = "hexOuter"/>
        <Hexagon id = '4' checkLetter = {addLetter} className = "hexOuter"/>
        <Hexagon id = '5' checkLetter = {addLetter} className = "hexOuter"/>
        <Hexagon id = '6' checkLetter = {addLetter} className = "hexOuter"/>
        <Hexagon id = 'center' checkLetter = {addLetter} className = "hexCenter"/>
      <div id = 'buttonContainer'>
      <button onClick = {()=>{findWords()}} id = 'Get_Words'>
      Enter
      </button>
      </div>

      </div>
      <div className = 'wordsContainer'>
      <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;
