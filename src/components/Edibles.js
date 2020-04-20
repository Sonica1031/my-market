<<<<<<< HEAD:src/components/edibles.js
import React, { useState, useEffect } from 'react';
import { edible } from '../data';
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
            })},[setEdibleItems])
           
return(
    <div className={`edible-container ${props.darkmode ? "" : "dark-mode-black-background"}`}>


    {edibleItems.map(item =>{
      return(
          <Link className="aTagForEdibles" path to={`./edibles/${item.id}`}>
              <div className="columns">
              <p>{item.description}</p>
              <img src={gummi} width="500px"/>
              </div>
          </Link>
      )
  })})
    </div>
)}

=======
import React from 'react';
import { edible } from '../data';
import { Link } from 'react-router-dom'
import gummi from '../images/gummi.jpeg';

const Edibles = (props) => {
return(
    <div className={`edible-container ${props.darkmode ? "" : "dark-mode-black-background"}`}>
    {edible.map(item =>{
      return(
          <Link className="aTagForEdibles" path to={`./edibles/${item.id}`}>
              <div className="columns">
              <p>{item.description}</p>
              <img src={gummi} width="500px"/>
              </div>
          </Link>
      )
  })})
    </div>
)}

>>>>>>> a0cabce86e3031a4662f994c80137920b1aaee89:src/components/Edibles.js
export default Edibles;