import React from 'react';
import gummi from '../images/gummi.jpeg'

export const Item = (props) =>{
    console.log(props);
    const item = props.item.find( item => `${item.id}` === props.match.params.id )
    return (
        <div>
        <p>{item.description}</p>
        <p>{item.id}</p>
        <img src={gummi} width="500px" height="500px" />
        </div>
    );
}