import React, { useState } from 'react';
import './Login.css'
import Img from '../../assets/loginImg.jpg'
const SignIn = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique de connexion avec les valeurs de l'état (email, password, name)
  };

  return (
    <div className="formcontainer">
      <h1>-Sign In-</h1>
      <section className="formContainer">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">FullName:</label>
          <input
            value={name}
            placeholder="Enter your fullname"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email:</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="...@.com"
          />
          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className='btnContainer'>
            <button id="btn1">Sign In</button>
          </div>
        </form>
        <button id='btn2' onClick={() =>props.onFormSwitch('login')}>Already have an account? Log in here</button>
      </section>
    </div>
  );
};

export default SignIn;
