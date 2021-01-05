import React, {useState} from 'react'
import './App.css';
import Hexagon from '../components/Hexagon.js'
import {allSubsequences} from '../subsequence.js'
import {permutations} from '../permutations.js'
import checkWord from 'check-if-word'
import {FoundWords} from '../components/FoundWords.js'
const validWords = checkWord('en')

function App() {
  const [wordList,setWordList] = useState([])
  const [letters, setLetters] = useState({})
  const [dupeMessage,setDupeMessage] = useState(false)
  const [loading, setLoading] = useState(false)

  function addLetter(event, id){
    const newSet = {...letters}
    if(event.target.value ==='') delete newSet[id]
    else newSet[id] = event.target.value
    setLetters(newSet)
  }

  function findWords(){
    setLoading(true)
    if(dupeMessage)console.log('dupe detected')
    if(Object.keys(letters).length !==7){
      console.log('needs more chars')
      return
    }
    let string = ''
    for(let letter in letters){
      if(letter!=='center')string+=letters[letter]
    }
    const subsequences = allSubsequences(string,letters.center)
    let returnWords = []
    let possibleWords = []
    setTimeout(()=>{
      Object.keys(subsequences)
      .filter((word)=>{
        return word.length > 3
      })
      .map((word)=>{
        const splitString = word.split('')
        const allPermutations = permutations(splitString)
        possibleWords = possibleWords.concat(allPermutations)
      })
      for(let word of possibleWords){
        if(validWords.check(word))returnWords.push(word)
      }
      setLoading(false)
      setWordList(returnWords)
    },100)
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
        <button onClick = {()=>{
          findWords()
          }} id = 'Get_Words'>
        Enter
        </button>
        </div>
      </div>
      <div className = 'wordsContainer'>
        <FoundWords loading = {loading} wordList = {wordList}/>
      </div>
    </div>
  );
}

export default App;
