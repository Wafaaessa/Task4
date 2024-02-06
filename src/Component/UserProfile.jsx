
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import {Helmet} from "react-helmet";
import image1 from '../images/photo-1542909168-82c3e7fdca5c.avif';
import image2 from '../images/photo-1499996860823-5214fcc65f8f.avif';
import image3 from '../images/photo-1503023345310-bd7c1de61c7d.avif';
import image4 from '../images/1.avif';
import image5 from '../images/2.avif';
import image6 from '../images/3.avif';
import image7 from '../images/4.avif';
import image8 from '../images/5.avif';
import image9 from '../images/6.avif';
import image10 from '../images/7.avif';



export default function UserProfile({ onLogout }) {

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
// console.log(data.id);

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
/////////////////////add pictures////////////////
const getUserImage=(userId)=>{
  switch(parseInt(userId)){
    case 1:
      return image1;
    case 2:
      return image2;
    case 3:
      return image3;
    case 4:
     return image4;
    case 5:
     return image5;
    case 6:
     return image6;
    case 7:
     return image7;
    case 8:
     return image8;
    case 9:
     return image9;
    case 10:
     return image10;
    default:
      return null;
   
  }
}

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
  {load?<p className="text-success fw-bolder text-center load">
        <i className=' fas fa-spinner fa-spin'></i>
        </p>:""}
      {error?<p className="text-danger fw-bolder text-center load ">Error:{error}</p>:""}

      {user?(<>
     <h1 className="">User Profile</h1>
     <hr />
     <div className="details text-center">
     <div className="container">
      <div className="col-md-12">
    
      <img src={getUserImage(userId)} alt="User" className="img-fluid rounded-circle images" />
      <p className="fs-1 fw-bolder name">  {user.name}</p>

      </div>
     </div>
     <div className="col-md-12 ">
     <p > <span> <i className="fa-solid fa-envelope"></i> </span>{user.email}</p>
      <p> <span> <i className="fa-solid fa-phone"></i> </span> {user.phone}</p>
      <p> <span> <i className="fa-brands fa-chrome text-danger"></i>  </span>{user.website}</p>
      <p> <span> <i className="fa-solid fa-location-dot"></i> </span>
      {user.address.city}, {user.address.street},<br/>
      <div className="lag ">
      lat: {user.address.geo.lat},
      lng: {user.address.geo.lng}
      </div>
   
      </p>

     </div>
     </div>
   
      
      {/* <p> <span> <i class="fa-solid fa-user"></i> UserName:</span> {user.username}</p> */}
     
  
      
      </>):""}
  </div>
</div>

  </div>
      
    </div>
  );
}
