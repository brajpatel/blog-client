import './Login.css';
import { useState } from 'react';

function Login() {
    // HANDLE INPUT VALUES
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');

    return (
        <div>
            <div className='login-modal'>
                <h2>Login</h2>
                <div className='login-image-container'>
                    <img src="https://icons-for-free.com/download-icon-facebook+profile+user+profile+icon-1320184041317225686_512.png" alt="login-default-image"/>
                </div>
                <p className='note'>Note: You need admin details to be able to login</p>
                <form action="">
                    <div className='input-container'>
                        <label htmlFor="username">Username</label>
                        <input id='username' type="text" required/>
                    </div>
                    <div className='input-container'>
                        <label htmlFor="password">Password</label>
                        <input id='password' type="password" required/>
                    </div>
                    <button className='login-btn' type='submit'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;