import { useState, useEffect } from "react";
import cartButton from "../images/button-cart.png";
import darkmodeCart from "../images/darkmode-cart.png";
import { Link, useParams} from "react-router-dom";
import Axios from "axios";

export const Item = ({ darkMode }) => {
  const { id } = useParams();
  const [item, setItem] = useState();
  const [userId, setUserId] = useState();
 

  useEffect(() =>{
    Axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setItem(res.data);
      })
      .catch(err => console.log(err));
  }, [id]);

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

  const addToCart = (e) => {
    e.preventDefault();
    if(!item) return;
 
    Axios.post(`https://fakestoreapi.com/carts/${userId}`, sending)
      .then((res) => {
        setValue(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  if(!item){
    return <div>Loading...</div>;
  }

  return (
    <div className={`bows-single`}>
      <p className="aTagForBowsId">{item.description}</p>
      <img src={item.image} width="300px" />
      <div className="flex-cart">
        <div className="cart">
          <button onClick={addToCart} className="add-cart-item">
          Add to Cart
          </button>
    </div>
    <Link className="go-to-cart" to={`/cart/${userId}`}>
    <img className="cartImage"
          width="100px"
          src={darkMode ? darkmodeCart : cartButton}
    />
    </Link>
    </div>
    </div>
  );
};

export default Item;