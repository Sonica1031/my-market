import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const result = {name: username, password: password};

       const usernameChange = (e) => {
           e.preventDefault();
           setUsername(e.target.value)
       }

       const passwordChange = (e) => {
           e.preventDefault();
           setPassword(e.target.value)
       }
       
       const sendingInformation = (e) =>{
           e.preventDefault();
                Axios
                    .post('https://puff-palace.herokuapp.com/users/logon', result)
                    .then(res => {
                        console.log(res.data)
                        window.localStorage.setItem("key", res.data[1]);
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
                <p className="aTagForEdibles centertext">Or if you are new to Puff-Palace</p>
                <Link path to="/register" className="aTagForEdibles">Register</Link>
            </div>
        </form>
    )
}

export default Login;