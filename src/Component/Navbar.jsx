
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ isLoggedIn, onLogout}) {
    
  return (
    <div>
      <nav className="navbar navbar-expand-lg p-3 ps-5  bg-body-secondary">
        <div className="container-fluid">
          <div className="logo w-100">
            <Link className="navbar-brand text-dark fw-bold" to="/">Welcome</Link>
          </div>
         
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto pe-5 mb-2 mb-lg-0">
                
              {isLoggedIn ?  <>
              <div className="logo w-25">
          <Link className="navbar-brand " to="/">UserList</Link>
           </div>
           <div className="logo w-25">
          <Link className="navbar-brand out  ms-5" onClick={onLogout} >logOut</Link>
           </div>
           
              
              </>
              :
              <>
            
    
          <div className="logo w-25">
          <Link className="navbar-brand " to="#">Join Free</Link>
           </div>
            </> }

           
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
