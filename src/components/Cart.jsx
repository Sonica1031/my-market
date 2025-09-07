import { useState, useEffect} from 'react';
import Axios from 'axios';

export const Cart = (props) =>{
    const [cartItems, setCartItems] = useState([]);
    const [userId, setUserId] = useState([]);

   
    useEffect(() => {
    const username = window.localStorage.getItem('username');
    if (username) {
        Axios
            .get('https://fakestoreapi.com/users')
            .then(res =>{
                const user = res.data.find(u => u.username == username);
                if (user) {
                setUserId(user.id);
                }
            })
            .catch(err =>{
                console.log(err);
            })
    }
    },[])

    useEffect(() => {
    if(userId) {
        Axios
            .get(`https://fakestoreapi.com/carts/${userId}`)
            .then(res => {
                setCartItems(res.data);
            })
            .catch(err =>{
                console.log(err)
            })
    }
        },[userId]);

    return(
        <div>
            {cartItems.map(item =>{
                    <div>
                    <p className="aTagForCart">
                        {item.description}
                    </p>
                    </div>
            })}
        </div>
    );
}
export default Cart;