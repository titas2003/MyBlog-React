import React,{useState} from 'react';

const SignUp = () => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userPass, setUserPass] = useState('');
    const [userConf, setUserConf] = useState('');
    return(
        <>
            <h2>Sign Up To My Blog</h2>
            <div id="add-comment-form">
                <label>
                    Name:
                    <input type="text" value={userName} onChange={(event) => setUserName(event.target.value)} />
                </label>
                <label>
                    Email:
                    <input type="email" value={userEmail} onChange={(event) => setUserEmail(event.target.value)} />
                </label>
                <label>
                    Phone:
                    <input type="text" value={userPhone} onChange={(event) => setUserPhone(event.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" value={userPass} onChange={(event) => setUserPass(event.target.value)} />
                </label>
                <label>
                    Confirm Password:
                    <input type="password" value={userConf} onChange={(event) => setUserConf(event.target.value)} />
                </label>
                <button type="button">Sign Up</button>
            </div>
        </>
    )
}
export default SignUp;