import React from 'react'
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {
const navigate = useNavigate()
//const currentUser={displayName:"Bnm"}
const currentUser =false;
  return (
    <div>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">                
                <Link to={"/"} className="navbar-brand text-black">
                <h4 >-ED8EN-</h4>                            
                </Link>                
                <div clasName="d-Flex text-black align-items-center">
                    {currentUser ? (
                        <h5 className="mb-2 text-capitalize">
                            {currentUser?.displayName}
                        </h5>
                        ) : (
                        <button
                           className="ms-2 btn btn-outline-dark"
                           onClick={() => navigate("/login")}
                        >
                            Login
                        </button>                        
                    )}
                    {currentUser ? (
                        <button
                           className="ms-2 btn btn-outline-dark"
                           //onClick={() => logOut()}
                        >	
                            Logout
                        </button>
                        ) : (
                        <button
                            className="ms-2 btn btn-outline-dark"
                            onClick={() => navigate("/register")}
                        >
                            Register
                        </button>                    
                    )}
                      {currentUser ? (
                        <button
                           className="ms-2 btn btn-outline-dark"
                           onClick={() => navigate("/New")}
                        >	
                            New Blog
                        </button>
                        ) : (
                        <button
                            className="ms-2 btn btn-outline-Gray)"
                            onClick={() => navigate("/about")}
                        >
                            About
                        </button>                    
                    )}      
        
                </div> 
                  
            </div>
        </nav>
    </div>
  );
};

export default Navbar;