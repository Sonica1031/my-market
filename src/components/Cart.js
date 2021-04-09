
import React, { useState, useEffect} from 'react';
import Axios from 'axios';

export const Cart = (props) =>{
    const [cartItems, setCartItems] = useState();
    Axios
            .get('https://puff-palace.herokuapp.com/user/:id/cart')
            .then(res => {
                setCartItems(res.data)
            })
            .catch(err =>{
                console.log(err)
            })},[setCartItems])
    return(
        <div>
            {cartItems.map(item =>{
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
                            .delete(`https://puff-palace.herokuapp.com/user/:id/cart/${item.id}`)
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
                <p className="aTagForCart">Price: {cartItems.price.reduce((total, num) => {
                  return total + num.price * num.qty;
                },0)}</p>
        </div>
    );
}