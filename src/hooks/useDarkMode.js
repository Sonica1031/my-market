import React, { useEffect } from 'react';
import useLocalStorage from './useLocalStorage'

function useDarkMode(initialValue){
    const [value, setValue] = useLocalStorage(initialValue)
    let body = document.querySelector("body")
    useEffect(() =>{
    if (value === false){
      body.classList.remove("dark-mode");

    } else if(value === true) {
      body.classList.add("dark-mode");
    }
  },[value])
  return [value, setValue]
  }


export default useDarkMode;