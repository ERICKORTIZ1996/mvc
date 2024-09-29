import React, { useContext } from 'react'
import axios from "axios";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import AppContext from './AppContext';


 
function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const TokenContexto = useContext(AppContext);

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const hashed ='',
    
    handlelogin = (e) => {
        TokenContexto.setToken(hashed);
        localStorage.setItem('token',hashed)
        e.preventDefault();
        axios.post('http://localhost:8000/api/login', {
            email, 
            password : password           
        })
        .then(res => {
            if(res.data.message === "Login Exitoso"){
                //hashed = res.data.token;
                console.log('Login exitoso',res.data);
                navigate('/api/users');
            }else{
                console.log('Login fallido',res.data);
            }
           
        })
        .catch(err => console.log(err))
    }
  return (
    <div>
        <h1>Login de usuarios</h1>
        <form>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" value={email} onChange={handleEmail}/>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" onChange={handlePassword}/>
            <input type="submit" onClick={handlelogin}/>
        </form>
        <div></div>
    </div>
   
  )
}

export default Login