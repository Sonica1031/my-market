import {useState} from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

       const usernameChange = (e) => {
           setUsername(e.target.value);
       }


       const passwordChange = (e) => {
           setPassword(e.target.value)
       }
       
       const sendingInformation = (e) =>{
           e.preventDefault();
           const result = {username: username,  password: password};
                Axios
                    .post('https://fakestoreapi.com/auth/login', result)
                    .then(res => {
                        if(res.data.token){
                        window.localStorage.setItem("token", res.data.token);
                        window.localStorage.setItem("username", username);
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })
       }

    return(
        <form>
            <div className="login-form">
                <input
                    className="input-placement"
                    type="text"
                    placeholder="Enter username"
                    name="username"
                    required
                    onChange={usernameChange}
                />
                <input
                    className="input-placement"
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    required
                    onChange={passwordChange}
                />
                <button onClick={sendingInformation} className= "aTagForCart button-placement">Login</button>
                <p className="aTagForBowsId centertext">Or if you are new to My Market</p>
                <Link path to="/register" className="aTagForBowsId">Register</Link>
            </div>
        </form>
    )
}

export default Login;