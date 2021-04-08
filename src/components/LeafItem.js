import React from 'react';
import dryleaves from '../images/dryleaves.jpeg';
import cartButton from '../images/button-cart.png';
import darkmodeCart from '../images/darkmode-cart.png'
import { Link } from 'react-router-dom';
import Axios from 'axios';


const LeafItem = (props) =>{
    console.log(props)
    let item = props.item.find(item => `${item.id}` === props.match.params.id)
    let qty = document.getElementsByClassName("qty");

    const addToCart = (e) =>{
        e.preventDefault()
        let qtyInt = parseInt(qty[0].value)
        let result = item.qty + qtyInt
        }

    return(
        <div className={`edible-single`}>
<<<<<<< HEAD
            <img src={dryleaves} width="500px"></img>
=======
            <img src={dryleaves} width="300px"></img>
>>>>>>> 6943b227e7557d5635a7e1961ca0ab830bfa7625
            <p className="aTagForEdibles">{item.description}</p>
            <form>
        <div className="flex-cart">
        <div className="cart">
        <label className="qtyLabel" htmlFor="qty">
        QTY:
        <input
        name="qty"
        className="qty"
        id={item.id}
        />
        </label>
        <button onClick={addToCart} className="add-cart-item">Add to Cart</button>
        </div>
        <Link className="go-to-cart" path to="/cart"><img width="100px" src={props.darkmode ? darkmodeCart : cartButton}/></Link>
        </div>
        </form>
        </div>
    )
}

export default LeafItem;