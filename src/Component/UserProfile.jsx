
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import {Helmet} from "react-helmet";


export default function UserProfile() {

  const [user,setUser]=useState("");
  const[load,setLoad]=useState(false);
  const[error,setError]=useState("");
const {userId}=useParams();

useEffect(()=>{

const fetchData=async()=>{
  setLoad(true);


try{
const response=await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
if(!response.ok){
  throw new Error("something error in fetch")
}

const data = await response.json()
setUser(data)
// setLoad(false)
console.log(data);

}
catch(error){
setError(error.message)

}
finally {
 setLoad(false);
  }
}

fetchData();

},[userId])


  return (
    <div>
  <Helmet>
    <meta charSet="utf-8" />
    <title>UserProfilePage</title>
    <link rel="canonical" href="http://mysite.com/example" />
  </Helmet>
  <div className="container">
<div className="row">
  <div className="col-md-12 mt-5 text-center">
  {load?<p className="text-success fw-bolder load">loading....</p>:""}
      {error?<p className="text-danger fw-bolder text-center load ">Error:{error}</p>:""}

      {user?(<>
     <h1 className="bg-success border border-2">User Profile</h1>
     <div className="details text-center">
     <p> <span>Name:</span>{user.name}</p>
      <p> <span> UserName:</span> {user.username}</p>
      <p> <span> Email: </span>{user.email}</p>
      <p> <span> Phone:</span> {user.phone}</p>
      <p> <span> Website: </span>{user.website}</p>
     </div>
  
      
      </>):""}
  </div>
</div>

  </div>
      
    </div>
  );
}
