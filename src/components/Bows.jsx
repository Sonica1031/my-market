import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Axios from 'axios';



const Bows = ({ darkMode }) => {
    const [bowItems, setBowItems] = useState([]);
    useEffect(() =>{
        Axios
            .get('https://fakestoreapi.com/products')
            .then(res => {
                setBowItems(res.data)
            })
            .catch(err =>{
                console.log(err)
            })},[])
           
return(
        <div className={`bows-container ${darkMode ? 'dark-mode-black-background' : ''}`}>
            {bowItems.map(item => (
                <Link key={item.id} className='aTagForBows' to={`/products/${item.id}`}>
                      <div className="columns">
                            <p>{item.title}</p>
                            <img src={item.image} width="150" alt={item.description} />
                            <p>Price: {item.price}</p>
                        </div>
                </Link>
            ))} 
        </div>
      )
}

export default Bows;