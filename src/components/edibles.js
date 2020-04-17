import React from 'react';
import { edible } from '../data';
import { Link } from 'react-router-dom'
import gummi from '../images/gummi.jpeg';

const edibles = () => {
return(
    <div className="edible-container">
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

export default edibles