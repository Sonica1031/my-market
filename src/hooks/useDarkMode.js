import React, { useEffect } from 'react';
import useLocalStorage from './useLocalStorage'

function useDarkMode(initialValue){
    const [value, setValue] = useLocalStorage(initialValue)
    let App = document.getElementsByClassName("App")
    useEffect(() =>{
    if (value === false){
      App[0].classList.remove("dark-mode");

    } else if(value === true) {
      App[0].classList.add("dark-mode");
    }
  },[value])
  return [value, setValue]
  }


export default useDarkMode;