import React, { useState } from 'react';
import Axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [value, setValue] = useState("")

    const result = {name: username, password: password};

       const usernameChange = (e) => {
            setUsername(e.target.value)
       }

       const passwordChange = (e) => {
           setPassword(e.target.value)
       }
       const sendingInformation = (e) =>{
        e.preventDefault();
             Axios
                 .post('https://puff-palace.herokuapp.com/users/register', result)
                 .then(res => {
                     alert(res.data)
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