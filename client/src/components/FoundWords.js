import React,{useState,useEffect} from 'react'

export const FoundWords = (props) => {
  const [words,setWords] = useState([])
  useEffect(()=>{
    setWords(props.wordList)
  },[props])
  return (
    <>
      <div id = 'found-word-message'>
      I found {words.length} possible words for today's letters.
      </div>
      {props.loading ?
        <div className = 'loadContainer'>
          <div className="loader"></div>
        </div>
      :
      <ul className = 'wordList'>
        {words.map((word)=>{
          return(
            <li key = {word} id = {word} className = 'listedWord'>{word}</li>
            )
        })}
      </ul>
       }
    </>
  )
}
