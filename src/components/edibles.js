import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import gummi from '../images/gummi.jpeg';
import Axios from 'axios';


const Edibles = (props) => {
    const [edibleItems, setEdibleItems] = useState([]);
    useEffect(() =>{
        Axios
            .get('https://puff-palace.herokuapp.com/edibles/')
            .then(res => {
                setEdibleItems(res.data)
            })
            .catch(err =>{
                console.log(err)
            })},[edibleItems])
           
return(
    <div className={`edible-container ${props.darkmode ? "" : "dark-mode-black-background"}`}>


    {edibleItems.map(item =>{
      return(
          <Link className="aTagForEdibles" path to={`./edibles/${item.id}`}>
              <div className="columns">
              <p>{item.description}</p>
              <img src={gummi} width="300px"/>
              </div>
          </Link>
      )
  })})
    </div>
)}

export default Edibles;