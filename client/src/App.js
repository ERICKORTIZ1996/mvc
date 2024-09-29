import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UpdateUser from './Components/UpdateUser';
import UserDetails from './Components/UserDetails';
import UserNew from './Components/UserNew';
import Users from './Components/Users';
import Login from './Components/Login';
import React, { useState } from 'react';
import AppContext from './Components/AppContext';
import Contexto from './Components/Contexto';

function App() {
  const [token, setToken] = useState();
  const [loggin, setLoggin] = useState();
  const handleLogin = (token) => {setToken(token)}
  return (
    <AppContext.Provider value = {{loggin, setLoggin}}>
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route exact path='/api/users' element = {<Users />}/>
            <Route exact path='/api/user/new' element = {<UserNew />}/>
            <Route exact path='/api/user/:id' element = {<UserDetails />}/>
            <Route exact path='/api/user/:id/edit' element = {<UpdateUser />} />
            <Route exact path='/api/user/login' element = {<Login onLogin = {handleLogin}/>} />
            <Route exact path='/contexto' element = {<Contexto/>}/>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
    </AppContext.Provider>
  );
}

export default App;
