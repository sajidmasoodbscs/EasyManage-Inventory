import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast,Slide } from 'react-toastify';
import makeid from "../Config/randomtoast";



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
            <ul className="nav-ul">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">Update product</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                {/* <li><Link to="/logout">Logout</Link></li>
                <li><Link to="/signup">SignUp</Link></li> */}
                <li>{auth?<Link onClick={logout} to="/signup">Logout</Link>:<Link to="/signup">SignUp</Link>}</li>
                <li><Link to="/login">Login</Link></li>


            </ul>
        </div>
    )
}

export default Nav;