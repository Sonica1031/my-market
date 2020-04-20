
import React, { useState, useEffect} from 'react';
import Axios from 'axios';

export const Cart = () =>{
const [selling, setSelling] = useState([])
    useEffect(() =>{
        Axios
            .get('https://puff-palace.herokuapp.com/edibles/')
            .then(res => {
                setSelling(res.data.filter(item => item.qty > 0))
            })
            .catch(err => {
                console.log(err)
            })
    },[selling])

    return(
        <div>
            {selling.map(item =>{
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
                            .put(`https://puff-palace.herokuapp.com/edibles/${item.id}`, {...item, qty: 0})
                            .then(res =>{
                                setSelling(res.data.filter(item => item.qty > 0));
                            })
                            .catch(err =>{
                                console.log(err)
                            })
                    }}>Remove</button>
                    </div>
                )
                })}
                <p className="aTagForCart">Price: {selling.reduce((total, num) => {
                  return total + num.price * num.qty;
                },0)}.00</p>
        </div>
    );
}