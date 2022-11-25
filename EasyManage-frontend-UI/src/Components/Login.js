import React,{useEffect, useState} from 'react';
import {MDBContainer, 
    MDBCol, 
    MDBRow, 
    MDBBtn, 
    MDBIcon, 
    MDBInput, 
    MDBCheckbox,
    MDBCard,
    MDBCardBody,
    MDBCardImage} from 'mdb-react-ui-kit';

function Login() {
    // document.querySelectorAll('.form-outline').forEach((formOutline) => {
    //     new mdb.Input(formOutline).update();
    //   });
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");


  return (

<MDBContainer fluid>
<MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
  <MDBCardBody>
    <MDBRow>
      <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

      <div className="d-flex flex-row align-items-center justify-content-center">

<p className="lead fw-normal mb-0 me-3">Sign in with</p>

<MDBBtn floating size='md' tag='a' className='me-2'>
  <MDBIcon fab icon='facebook-f' />
</MDBBtn>

<MDBBtn floating size='md' tag='a'  className='me-2'>
  <MDBIcon fab icon='twitter' />
</MDBBtn>

<MDBBtn floating size='md' tag='a'  className='me-2'>
  <MDBIcon fab icon='linkedin-in' />
</MDBBtn>

</div>

<div className="divider d-flex align-items-center my-4">
<p className="text-center fw-bold mx-3 mb-0">Or</p>
</div>
<div className="d-flex flex-row align-items-center mb-4">
    <MDBIcon fas icon="envelope me-3" size='lg'/>
    <MDBInput label='Your Email' id='form2' type='email' openOnFocus='true' value={email} onChange={(e)=>setEmail(e.target.value)}/>
</div>

<div className="d-flex flex-row align-items-center mb-4">
    <MDBIcon fas icon="lock me-3" size='lg'/>
    <MDBInput label='Password' id='form3' type='password' openOnFocus='true' value={password} onChange={(e)=>setPassword(e.target.value)}/>
</div>

<div className="d-flex justify-content-between mb-4">
    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
    <a href="!#" class="forgot-password">Forgot password?</a>
</div>

<div className='text-center text-md-start mt-4 pt-2'>
<MDBBtn className="mb-0 px-5" size='lg'>Login</MDBBtn>
<p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="#!" className="link-danger">Register</a></p>
</div>
      </MDBCol>

      <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
        <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp' fluid/>

      </MDBCol>

    </MDBRow>
  </MDBCardBody>
</MDBCard>
</MDBContainer>
  );
}

export default Login;