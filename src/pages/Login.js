import React from 'react'
import { useState } from 'react'
import Nav from '../components/Nav/Nav'
import LoginSection from '../components/Login/Login'
import SignIn from '../components/Login/SignIn'
import Footer from '../components/Footer/Footer'
const Login = () => {
  const [currentForm,setCurrentForm]= useState('login')
  const toggleform =(formName)=>{
    setCurrentForm(formName);
  }
  
  return (
    <>
    <Nav></Nav>
    {
      currentForm === 'login' ? <LoginSection onFormSwitch={toggleform} /> : <SignIn onFormSwitch={toggleform}/>
    }
  
    
    <Footer></Footer>
    </>
  )
}

export default Login