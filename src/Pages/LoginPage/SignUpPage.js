import React, { useState } from 'react'
import { signUpToAccount } from '../../Services/LoginService/LoginAndSignUpServices';

export default function SignUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setComfirmedPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");
  function onLogin() {
    props.history.push("/")
  }
  function onSignUp() {
    if(name?.trim()===""){
      setError(true);
      setErrorText("Please enter the name");
      return
    }
    if(password?.trim()===""){
      setError(true);
      setErrorText("Please enter the password");
      return
    }
    if(email?.trim()===""){
      setError(true);
      setErrorText("Please enter the email");
      return
    }
    if(password?.trim()!==confirmedPassword?.trim()){
      setError(true);
      setErrorText("Password doesn't match with confirmed password");
      return
    }
    let body = {
      "user_id":0,
      "username": "",
      "password": password,
      "unlockKey": "",
      "workName":"",
      "name":name,
      "email":email
    }
    signUpToAccount(body).then((response) => {
      setInterval(() => {
        props.history.push("/")
      }, 3000);
    })
  }
  return (
    <div className='login bg-black'>
      <div class="container">
        <div className='form'>
          <div class="title">Sign Up</div>
          <div class="input-box">
            <input type="text" id='name' placeholder="Enter Your Name" value={name} onChange={e => {setName(e.target.value);setError(false)}} />
            <div class="underline"></div>
          </div>
          <div class="input-box underline">
            <input type="email" id='email' placeholder="Enter Your Mail" value={email} onChange={e => {setEmail(e.target.value);setError(false)}} />
            <div class="underline"></div>
          </div>
          <div class="input-box">
            <input type="password" id='password' placeholder="Enter Your Password" value={password} onChange={e => {setPassword(e.target.value);setError(false)}} />
            <div class="underline"></div>
          </div>
          <div class="input-box">
            <input type="password" id='confirmedPassword' placeholder="Enter Your Confirm Password" value={confirmedPassword} onChange={e => {setComfirmedPassword(e.target.value);setError(false)}} />
            <div class="underline"></div>
          </div>
          <div class="input-box button">
            <input type="submit" name="" value="Submit" onClick={e => onSignUp(e)} />
          </div>
          <div class="subtitleSignUp" onClick={e => onLogin(e)}>Already Have Account</div>
          {error?<div className='error'><span className='errorText'>{errorText}</span></div>:null}
        </div>
      </div>
    </div>
  )
}
