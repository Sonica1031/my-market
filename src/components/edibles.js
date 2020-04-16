import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom'
import gummi from '../images/gummi.jpeg';

const edibles = (props) => {
return(
    <div className="edible-container">
    {data.map(item =>{
      return(
          <Link path to={`./edibles/${item.id}`}>
              <div className="edible-columns">
              {item.description}
              <img src={gummi} width="500px"/>
              </div>
          </Link>
      )
  })})
    </div>
)}

export default edibles