import React, {useRef, useState} from 'react'
import {useNavigate} from "react-router-dom";

export default function LoginPage() {
    const [error = "", setError] = useState("");
    const navigate = useNavigate();
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    function handleClick(e){
        e.preventDefault();
        let username = usernameRef.current.value;
        let password = passwordRef.current.value;

        if (username === "" || password === "")
        {
            if(username === "")
            {
                setError('Please Enter a Username');
            }
            else
            {
                setError('Please Enter a Password');
            }
        }
        else if (password.length < 10)
        {
            setError('Please write a password with 10 letter or more');
        }
        else
        {
            // check the user in the db if exist do and write what if not
            setError('');
            navigate('/reports');
        }
    }


    return (
        <div>
            <form id="loginpanel">
                <h1 id="litheader">Login</h1>
                <div className="inset">
                    <p>
                        <input type="text" name="username" id="username" placeholder="User Name" ref={usernameRef}/>
                    </p>
                    <p>
                        <input type="password" name="password" id="password" placeholder="Password" ref={passwordRef}/>
                    </p>
                </div>
                <div className="p-container" id="loginError">{error}</div>
                <p className="p-container">
                    <button onClick={handleClick}>Login</button>
                </p>
                <a href="/ev" className="rstpassword">Forget your password?</a>
            </form>
        </div>
    )
}