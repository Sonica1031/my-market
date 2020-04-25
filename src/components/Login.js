import React, {useState} from 'react';
import Axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const result = [username, password];

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
                    .post('https://puff-palace.herokuapp.com/users', result)
                    .then(res => {
                        console.log("REMEMBER TO ERASE THIS LINE", res.data);
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
                    type="text"
                    placeholder="Enter password"
                    name="password"
                    required
                    onChange={passwordChange}
                />
                <button className= "aTagForCart button-placement">Submit</button>
            </div>
        </form>
    )
}

export default Login;