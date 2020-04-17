import React from 'react';
import { leaf } from '../data';
import { Link } from 'react-router-dom';
import dryleaves from '../images/dryleaves.jpeg'

const leaves = (props) =>{
    return(
 <div className="edible-container">
    {leaf.map(item =>{
        return(
            <Link className="aTagForEdibles" path to={`/leaves/${item.id}`}>
            <div className="columns">
                <p>
                    {item.description}
                </p>
                <img src={dryleaves} width="500px"/>
            </div>
            </Link>
        )
    })}
      </div>
    )
}

export default leaves;