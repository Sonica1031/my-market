import React from 'react';
import gummi from '../images/gummi.jpeg';
import cartButton from '../images/button-cart.png';
import { Link} from 'react-router-dom';

export const Item = (props) =>{
    const item = props.item.find( item => `${item.id}` === props.match.params.id )
    let qty = document.getElementsByClassName("qty");

    const addToCart = (e) =>{
    e.preventDefault()
    let qtyInt = parseInt(qty[0].value)
    let result = item.qty + qtyInt
    console.log(result);
    qty[0].value = "";
    }
    let img = document.createElement("img");
    img.src = item.imageSRC
    let divForImage = document.getElementsByClassName("edible-single")
    
    return (
        <div className="edible-single">
        <p className="aTagForEdibles">{item.description}</p>
        <img src={gummi} width="500px"/>
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
        <Link className="go-to-cart" path to="/cart"><img width="30px" src={cartButton}/></Link>
        </div>
        </form>
        </div>
    );
}