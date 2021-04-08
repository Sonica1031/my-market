
import React, { useState, useEffect} from 'react';
import Axios from 'axios';

export const Cart = (props) =>{
    console.log("cart", props)
    const key = window.localStorage.getItem("key")
    return(
        <div>
            {/* {cartInformation.map(item =>{
                return(
                    <div>
                    <p className="aTagForCart">
                        {item.description}
                    </p>
                    <p className="aTagForCart">
                       QTY: {item.qty}
                    </p>
                    <button className="aTagForCart" onClick={() => {
                        Axios
                            .delete(`https://puff-palace.herokuapp.com/edibles/${item.id}`, {key : key})
                            .then(res =>{
                                console.log(res.data)
                            })
                            .catch(err =>{
                                console.log(err)
                            })
                    }}>Remove</button>
                    </div>
                )
                })}
                <p className="aTagForCart">Price: {cartInformation.reduce((total, num) => {
                  return total + num.price * num.qty;
                },0)}</p> */}
        </div>
    );
}