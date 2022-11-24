import React,{useEffect, useState} from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
//   MDBCheckbox
}
from 'mdb-react-ui-kit';
import {useNavigate } from "react-router-dom";
  import { toast } from 'react-toastify';
  import makeid from "../Config/randomtoast";


function Signup() {
  const navigate=useNavigate();
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  useEffect(()=>{
    const auth=localStorage.getItem("user");
    if(auth){
      navigate('/');

      toast('You are already signedup!', {
        position: "top-center",
        type:"error",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        toastId: makeid.makeid()
        });
      // alert("You are already signedup")
    }

  });

    const signupData=async ()=>{
        let result=await fetch(`http://${process.env.REACT_APP_API_HOST_URL}:${process.env.REACT_APP_API_HOST_PORT}/api/register`,{
          method:"post",
          body:JSON.stringify({name,email,password}),
          headers:{
            "Content-Type":"application/json"
          }
        })
        result= await result.json();
        console.log(result);
        localStorage.setItem("user",JSON.stringify(result));
       if(result){
        navigate("/");
        toast('You are signedup Successfully!', {
          position: "top-center",
          type:"success",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          toastId: makeid()
          });
       } 
    }

  return (
    <MDBContainer fluid>
      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Your Name' id='form1' type='text' value={name} onChange={(e)=>setName(e.target.value)} className='w-100'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Your Email' id='form2' type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Password' id='form3' type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
              </div>

              {/* <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <MDBInput label='Repeat your password' id='form4' type='password'/>
              </div>

              <div className='mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div> */}

              <MDBBtn className='mb-4' size='lg' onClick={signupData} >Register</MDBBtn>

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    
  );
}

export default Signup;