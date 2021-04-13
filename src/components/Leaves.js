import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import leaf from '../images/dryleaves.jpeg';
import Axios from 'axios';


const Leaves = (props) => {
    const [leavesItems, setLeavesItems] = useState([]);
    useEffect(() =>{
        Axios
            .get('https://puff-palace.herokuapp.com/leaves/')
            .then(res => {
                setLeavesItems(res.data)
            })
            .catch(err =>{
                console.log(err)
            })},[leavesItems])
           
return(
    <div className={`edible-container ${props.darkmode ? "" : "dark-mode-black-background"}`}>


    {leavesItems.map(item =>{
      return(
          <Link className="aTagForEdibles" path to={`./leaves/${item.id}`}>
              <div className="columns">
              <p>{item.description}</p>
              <img src={leaf} width="300px"/>
              </div>
          </Link>
      )
  })})
    </div>
)}

export default Leaves;