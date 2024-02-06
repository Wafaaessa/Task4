import React,{useState,Link} from 'react'
import {Helmet} from "react-helmet";

export default function Login({onLogin}) {

const [userName, setUserName] = useState("")
const [password, setPassword] = useState("")

const handleSubmit=(e)=>{
    e.preventDefault();
    onLogin({userName,password})
}

  return (
    <>
<Helmet>
<meta charSet="utf-8" />
<title>LoginPage</title>
<link rel="canonical" href="http://mysite.com/example" />
</Helmet> 
<div className="container mt-5 ">
    <div className="row">
    <div className="col-md-6 box-1 p-0 bg-register-image ">  
  </div>
        <div className="col-md-6 box-1 pb-5 p-5">
        <h1 className="text-white text-center pb-5">Login Form</h1>
        <form className=' form-group  mx-5 ' onSubmit={handleSubmit}>
       <input type="text" className='form-control my-2 w-100  ' placeholder="Username" value={userName} onChange={(e)=> setUserName(e.target.value)} autoComplete="username" />
       <input type="password" className='form-control my-2 w-100' placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} autoComplete="current-password" />
       <button className='btn btn-info w-100 fw-bold login' type="submit">Login</button>
  <hr/>
       <div className="member mt-4 text-center">
       <h5 className='text-center text-muted'>Forgot Password?</h5>
       <p className="text-success">Not a member yet?  </p>
 </div>
     </form> 
  </div>
  </div>
  </div>
  


    </>
  )
}

