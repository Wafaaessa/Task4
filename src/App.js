
import React, { useState,useEffect }from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import UserList from './Component/UserList';
import UserProfile from './Component/UserProfile';
import Navbar from './Component/Navbar';
import Login from './Component/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleLogin=(credentials)=>{
    if(credentials.userName==='name' && credentials.password==='password'){
      setIsLoggedIn(true)
      localStorage.setItem('isLoggedIn','true')
    }
    else{
      alert('Incorrect UserName or Password try again please!')
    }
  }
  
  const handleLogout=()=>{
    setIsLoggedIn(false)
    localStorage.removeItem('isLoggedIn')
    
  }
  useEffect(() => {
    const storedLogIn =localStorage.getItem("isLoggedIn")
    if(storedLogIn==='true'){
      setIsLoggedIn(true);
    }
  
   
  }, [])
  


  return (
    <Router>
       <Navbar onLogout={handleLogout} isLoggedIn={isLoggedIn}/>
    <Routes>
      {!isLoggedIn?(
      <Route  path="/" element={<Login onLogin={handleLogin}  />}/> )
      :(
        <>
      <Route  path="/" element={<UserList onLogout={handleLogout}/>}/>   
      <Route  path="/user/:userId" element={<UserProfile/>}/>  
      </>
      )}
      </Routes>
      </Router>
  );


}



