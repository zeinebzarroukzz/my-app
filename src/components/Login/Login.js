import React, { useState } from 'react'
import './Login.css'
import Img from '../../assets/loginImg.jpg'
const Login = (props) => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const handleSubmit=(e) =>{
    e.preventDefault();
    console.log("email")

  }
  return (
    <>
    <div className="formcontainer">
      <h1>-Login-</h1>
        <section className='formContainer'>
            <form onSubmit={handleSubmit} className='formLogin'>
              <label htmlFor='email'>Email:</label>
              <input value={email} 
              onChange={(e)=>setEmail}
              type='email'
              placeholder='...@.com'>
              </input>
              <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className='btnContainer'>
             <button id="btn1">Login</button>
          </div>
            </form>
            <button id='btn2' onClick={() =>props.onFormSwitch('SignIn')}>Don't have an account ? Register here</button>
        </section>

    </div>
    
    
    </>
  )
}

export default Login
