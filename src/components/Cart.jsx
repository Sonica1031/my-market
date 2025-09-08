import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Axios from 'axios';

export const Cart = ({darkMode}) =>{
    const [cartItems, setCartItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
    if(id) {
        Axios
            .get(`https://fakestoreapi.com/carts/${id}`)
            .then(res => {
                const products = res.data.products
                const productIds = products.map(p => p.productId);
                return Promise.all(productIds.map(pID =>
                    Axios
                        .get(`https://fakestoreapi.com/products/${pID}`)
                ))
                        .then(responses => ({products, responses}));
            })
            .then(({products, responses}) => {
                const qtyMap = products.reduce((map, item) => {
                    map[item.productId] = item.quantity;
                    return map;
                }, {});
                
                const itemsWithDetails = responses.map((res => {
                    const productDetail = res.data
                return {
                    ...productDetail,
                    quantity:qtyMap[productDetail.id]
                }
                }));
                setCartItems(itemsWithDetails);
                console.log('Cart items with details:', itemsWithDetails);
            })
            .catch(err =>{
                console.log(err)
            })
    }
        },[id]);

    if(!id){
        return(
            <div>
               <p>
                You must sign in
                </p> 
            </div>
        )
    }

    const totalPrice = cartItems.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
    }, 0);

    return(
        <div className='flex-cart'>
            {cartItems.map(items=>(
                    <div>
                        <div className={`columns ${darkMode ? 'dark-mode' : ''}`}>
                            <p>{items.title}</p>
                            <img src={items.image} width="150" alt={items.description} />
                            <p>QTY: {items.quantity}</p>
                            <p>Price: {items.price * items.quantity}</p>
                        </div>
                    </div>
            ))}
            <p className ="columns">Total: {totalPrice}</p>
        </div>
    );
};

export default Cart;