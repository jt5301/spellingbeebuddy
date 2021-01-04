import React from 'react'

export const FoundWords = (props) => {
  const temp = ["chain", "china", "inch", "chin", "nach", "chai", "chia", "cain", "dich", "chid", "chad", "cadi", "acid", "caid", "cnida", "canid", "nicad", "painch", "pinch", "chip", "caph", "chap", "capi", "pica", "panic"]
  return (
    <>
      <div id = 'found-word-message'>
      I found {props.wordList.length} possible words for today's letters
      </div>
      <ul className = 'wordList'>
        {props.wordList.map((word)=>{
          return(
            <li id = {word} className = 'listedWord'>{word}</li>
            )
        })}
      </ul>

    </>
  )
}
