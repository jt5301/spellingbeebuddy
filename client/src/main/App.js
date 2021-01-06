import React, {useState} from 'react'
import './App.css';
import Hexagon from '../components/Hexagon.js'
import {allSubsequences} from '../subsequence.js'
import {permutations} from '../permutations.js'
import checkWord from 'check-if-word'
import {FoundWords} from '../components/FoundWords.js'
const validWords = checkWord('en')

function App() {
  console.log('deployed')
  const [wordList,setWordList] = useState([])
  const [letters, setLetters] = useState({})
  const [loading, setLoading] = useState(false)
  const [errorMsg,setErrorMsg] = useState('')
  function addLetter(event, id){
    const newSet = {...letters}
    if(event.target.value ==='') delete newSet[id]
    else newSet[id] = event.target.value.toLowerCase()
    setLetters(newSet)
  }

  function findWords(){
    //error handling here
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

    if(Object.keys(letters).length !==7){
      setErrorMsg('Please enter all 7 letters!')
      return
    }
    //get all letters in string besides center letter
    let string = ''
    if(!alphabet.includes(letters.center)){
      setErrorMsg('Please enter only upper or lowercase english letters')
      return
    }
    for(let letter in letters){
      if(!alphabet.includes(letters[letter])){
        setErrorMsg('Please enter only upper or lowercase letters')
        return
      }
      if(string.includes(letters[letter])||(letter !== 'center'&&letters[letter]===letters.center)){
        setErrorMsg('Please enter all unique characters')
        return
      }
      if(letter!=='center')string+=letters[letter]
    }
    setLoading(true)
    setErrorMsg('')
    const subsequences = allSubsequences(string,letters.center,{})
    let returnWords = []
    let possibleWords = []
    setTimeout(()=>{
      Object.keys(subsequences)
      .filter((word)=>{
        return word.length > 3
      })
      .forEach((word)=>{
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
        {errorMsg.length!==0 ?
          <div id = 'error-msg'>{errorMsg}</div>
        :
        ''
        }
      </div>
      <div className = 'wordsContainer'>
        <FoundWords loading = {loading} wordList = {wordList}/>
      </div>
    </div>
  );
}

export default App;
