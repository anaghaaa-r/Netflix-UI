import React from 'react';
import { useState, useEffect } from 'react';
import '../STYLES/Nav.css';

function Nav() {
    const [show, setHandleShow] = useState(false)

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if(window.scrollY > 100)
      {
        setHandleShow(true)
      }
      else setHandleShow(false)
      })
    }, [])
  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img className='nav_logo'
            src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
            alt="logo" />


    </div>
  )
}

export default Nav