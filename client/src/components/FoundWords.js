import React,{useState,useEffect} from 'react'

export const FoundWords = (props) => {
  console.log(props)
  useEffect(()=>{
    console.log(props)
  },[props])
  return (
    <>
      <div id = 'found-word-message'>
      I found {props.wordList.length} possible words for today's letters.
      </div>


      {props.loading ?
        <div className = 'loadContainer'>
          <div className="loader"></div>
        </div>
      :
      <ul className = 'wordList'>
        {props.wordList.map((word)=>{
          return(
            <li key = {word} id = {word} className = 'listedWord'>{word}</li>
            )
        })}
      </ul>
       }
    </>
  )
}
