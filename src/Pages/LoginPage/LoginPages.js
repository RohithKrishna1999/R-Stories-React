import React, { useState } from 'react'
import { loginToAccount } from '../../Services/LoginService/LoginAndSignUpServices'
import { getUserIdByToken } from '../../Services/HomePageService/HomePageService';

export default function LoginPages(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [errorText, setErrorText] = useState("");
    function onSignUp() {
        props.history.push("/SignUp")
    }
    function onLogin() {
        if (username?.trim() === "") {
            setError(true);
            setErrorText("Please enter the username");
            return
        }
        if (password?.trim() === "") {
            setError(true);
            setErrorText("Please enter the password");
            return
        }
        let body = {
            "username": username,
            "password": password
        }
        loginToAccount(body).then((response) => {
            sessionStorage.setItem("token",response.data);
            getUserIdByToken(response.data).then((id)=>{
                props.history.push("/Welcome")
                sessionStorage.setItem("id",id.data);
            })
            
        })
    }
    return (
        <div className='login bg-black'>
            <div class="container">
                <div className="form">
                    <div class="title">Login</div>
                    <div class="input-box underline">
                        <input type="text" placeholder="Enter Your User Name" value={username} onChange={e => {setUsername(e.target.value);setError(false)}} />
                        <div class="underline"></div>
                    </div>
                    <div class="input-box">
                        <input type="password" placeholder="Enter Your Password" value={password} onChange={e => {setPassword(e.target.value);setError(false)}} />
                        <div class="underline"></div>
                    </div>
                    <div class="input-box button">
                        <input type="submit" name="" value="Continue" onClick={e => onLogin(e)} />
                    </div>
                    <div class="subtitle" onClick={e => onSignUp(e)}>New User SignUp</div>
                    {error?<div className='error'><span className='errorText'>{errorText}</span></div>:null}
                </div>
            </div>
        </div>
    )
}
