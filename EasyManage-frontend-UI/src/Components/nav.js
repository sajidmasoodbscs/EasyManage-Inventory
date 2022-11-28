import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast,Slide } from 'react-toastify';
import makeid from "../Config/randomtoast";
const logo = require('../Assets/images/e-logo.jpeg');





const Nav=()=>{
    let auth=localStorage.getItem("user");
    const navigate=useNavigate();

    const logout=()=>{
        localStorage.clear();
        navigate('/');
        toast('You are logged out!', {
            position: "top-right",
            type:"info",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Slide,
            toastId: makeid()
          });
    }

    return(
        <div>
         <div className="logdiv">  
        <img alt="logo" className="logo" src={logo} />
        </div>
            {auth?<ul className="nav-ul">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">Update product</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link onClick={logout} to="/signup">Logout</Link></li>
                <li className="username"><Link> Wellcome : {JSON.parse(auth).name}</Link></li>

            </ul>
           : <ul className="nav-ul nav-right"> 
            <li><Link to="/signup">SignUp</Link></li>
            <li><Link to="/login">Login</Link></li>
            </ul>
}
        </div>
    )
}

export default Nav;