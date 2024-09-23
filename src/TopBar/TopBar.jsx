import React, { useState, useEffect, useRef } from 'react'
import './TopBar.css'

function TopBar() {
  const [isFocus, setIsFocus] = useState()
  const inputRef = useRef(null)
  const searchItemsRef = useRef(null)

  const handleClickOutside = (event) => {
    if(inputRef.current && !inputRef.current.contains(event.target) && searchItemsRef.current && !searchItemsRef.current.contains(event.target)) {
      setIsFocus(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.addEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return(
    <div className="top-bar">
      <img id="webLogo" src="" alt="writtit-logo"/>
      <div className="search">
        <input id="input" type="text" placeholder="Search Writtit" ref={inputRef} onFocus={() => setIsFocus(true)}></input>
        <div className="search-items" style={{display: isFocus ? 'flex' : 'none'}} ref={searchItemsRef}>
          <div className="search-item">
            <p className="search-item-title">Results 1</p>
            <p className="search-item-description">Results for search 1 are in</p>
          </div>
            <hr/>
          <div className="search-item">
            <p className="search-item-title">Results 2</p>
            <p className="search-item-description">Results for search 2 are in</p>
          </div>
        </div>
      </div>
      <a id="getApp">Get app</a>
      <a id="logIn">Log In</a>
    </div>
  );
}
export default TopBar
