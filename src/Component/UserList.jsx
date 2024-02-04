
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import {Helmet} from "react-helmet";

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
        {load?<p className="text-success fw-bolder text-center load">loading....</p>:""}
      {error?<p className="text-danger fw-bolder text-center load">Error:{error}</p>:""}
{/* title */}

    <h1 className="bg-info border border-2 "> UserList</h1>
{/* checkbox */}
<div className="border border-2 pb-5 rounded ">   
<label className=" mx-2 mt-5 text-dark fs-4 fw-bold"> 
<input type="checkbox" className="mx-3" checked={showAdminOnly} onChange={(e) => setShowAdminOnly(e.target.checked)} />  
   Show Admins Only</label>
      <button className="btn btn-danger fw-bold ms-5" onClick={handleLogout}>Logout</button>
</div>
    

{/* search input */}
    <input type="text" onChange={(e)=>setSearchTerm(e.target.value)}  value={searchTerm} className='mt-2 form-control bg-white  w-25 mx-auto my-4 text-center' placeholder='Search......' />
{/* list of users */}
       <ul>  
        {filterUsers.map(user=>(<li  key={user.id} onClick={()=>handleUsers(user) }>{user.name}</li> )  )}
       
      </ul>

        </div>
      </div>
    </div>
     
    </>
  )
}
