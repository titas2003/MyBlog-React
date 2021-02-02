import React, { useState } from "react";
import {Link} from 'react-router-dom';

const Login = () => {
    const [userEmail, setUserEmail] = useState(' ');
    const [userPass, setUserPass] = useState('');
    return(
    <>
        <h2>Login to My Blog</h2>
        <form id="add-comment-form">
            <label>
                Email:
                <input type="email" value={userEmail} onChange={(event) => setUserEmail(event.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={userPass} onChange={(event) => setUserPass(event.target.value)} />
            </label>
            <button type="button">Login</button>
            <Link to="/signup">New Here?</Link>
        </form>
    </>
    )}

export default Login;
