import { useState } from 'react';
import Axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const result = {username: username, email: email, password: password};

       const usernameChange = (e) => {
            setUsername(e.target.value)
       }

       const emailChange = (e) => {
            setEmail(e.target.value)
       }

       const passwordChange = (e) => {
           setPassword(e.target.value)
       }
       const sendingInformation = (e) =>{
        e.preventDefault();
             Axios
                 .post('https://fakestoreapi.com/users', result)
                 .then(res => {
                     alert("you registered");
                 })
                 .catch(err => {
                     console.log(err);
                 })
                }
    return(
        <div>
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
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    required
                    onChange={emailChange}
                />
                <input
                    className="input-placement"
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    required
                    onChange={passwordChange}
                />
                <button onClick={sendingInformation} className= "aTagForCart button-placement">Register</button>
            </div>
        </form>
        </div>
    )
}

export default Register;