
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
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

export default function UserList({onLogout}) {

  const [users,setUsers]=useState([]);
  const[load,setLoad]=useState(false);
  const[error,setError]=useState("");
  const navigate=useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [showAdminOnly,setShowAdminOnly]=useState(false)

useEffect(()=>{

const fetchData=async()=>{
  setLoad(true);
try{
const response=await fetch("https://jsonplaceholder.typicode.com/users")
if(!response.ok){
  throw new Error("something error in fetch")
}

const data = await response.json()
setUsers(data)
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
},[])


const handleUsers=user=>{
  navigate(`/user/${user.id}`)
 console.log(user);

}


//////////////search code/////////
let filterUsers=users.filter(user=>user.name.toLowerCase().includes(searchTerm.toLowerCase()))

//////////////end search code/////////

/////////admin only///////
if(showAdminOnly){
  filterUsers=filterUsers.filter(user=> user.isAdmin)
  
}
/////////end admin only///////

// ///////////Logout button/////////
const handleLogout=()=>{
 onLogout();
}
/////////////end logout////////////
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
    <>
  <Helmet>
    <meta charSet="utf-8" />
    <title>UserListPage</title>
    <link rel="canonical" href="http://mysite.com/example" />
  </Helmet>
    <div className="container">
      <div className="row">
   
        <div className="col-md-12 mt-5 text-center">
        {load?<p className="text-success fw-bolder text-center load">
        <i className=' fas fa-spinner fa-spin'></i>
        </p>:""}
      {error?<p className="text-danger fw-bolder text-center load">Error:{error}</p>:""}
{/* title */}

  <h1 className=" "> UserList</h1>
  <hr />
{/* checkbox */}
<div className=" pb-5 ">   
<label className=" mx-2 mt-5 text-dark fs-4 fw-bold"> 
<input type="checkbox" className="mx-3" checked={showAdminOnly} onChange={(e) => setShowAdminOnly(e.target.checked)} />  
   Show Admins Only</label>
  
</div>
    

{/* search input */}
<div className="search">

<input type="text" onChange={(e)=>setSearchTerm(e.target.value)}  value={searchTerm} className='mt-2 form-control border border-2 border-dark-subtle w-75 mx-auto my-4 text-center' placeholder='Search......' />

</div>
{/* list of users */}
       {/* <ul>  
        {filterUsers.map(user=>(<li  key={user.id} onClick={()=>handleUsers(user) }>{user.name}</li> )  )}
      </ul> */}
<table className="border border-2 container">

  <thead className="border border-2 ">
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Phone</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
  {filterUsers.map(user => (
    <tr className="border border-1 " key={user.id} onClick={() => handleUsers(user)}>
      <td className="id fw-bolder ">{user.id}</td>
      <td>
        <div className="d-flex align-items-center mx-5 ps-5 fw-bolder  ">
          <img src={getUserImage(user.id)} alt={user.name} className="img-fluid rounded-circle me-3" style={{ width: '50px', height: '50px' }} />
          <span>{user.name}</span>
        </div>
      </td>
      <td className="text-muted ">{user.phone}</td>
      <td className="text-muted">{user.email}</td>
    </tr>
  ))}
</tbody>

  
</table>

        </div>
      </div>
    </div>
     
    </>
  )
}
