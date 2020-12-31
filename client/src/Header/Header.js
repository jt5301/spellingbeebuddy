import React, {useState, useEffect} from 'react';
import './header.css';
import moment from 'moment';
import Toolbar from './Toolbar.js'

const Header = () => {
  const [date,setDate] = useState('')

  useEffect(()=>{
    const today = moment().format('LL')
    setDate(today)
  },[])


  return (
    <>
      <div className = 'HeaderContainer'>
        <div className = 'Header'>
        <span id = 'title'>Spelling Bee</span>
        <span id = 'date'> {date}</span>
        <div id = 'author'>Made by me, John.</div>
        </div>
      </div>
      <Toolbar/>
    </>
  )
}

export default Header
