import React,{useState} from 'react'
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
<div className="container  d-flex justify-content-center align-items-center vh-100">
    <div className="row">
        <div className="col-md-12 mt-5 py-5 border border-2 rounded">
            <h1 className="text-white text-center pb-5">Login Form</h1>
        <form className=' form-group  mx-5 ' onSubmit={handleSubmit}>
       <input type="text" className='form-control my-2 w-100  ' placeholder="Username" value={userName} onChange={(e)=> setUserName(e.target.value)} autoComplete="username" />
       <input type="password" className='form-control my-2 w-100' placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} autoComplete="current-password" />
       <button className='btn btn-info w-100 fw-bold' type="submit">Login</button>
     </form> 
        </div>
    </div>

</div>
  


    </>
  )
}

