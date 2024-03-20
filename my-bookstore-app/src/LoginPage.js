import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Login.css'; // Import CSS file
import backgroundImage from '../images/new.jpg'; // Adjust the path as needed
 
 
function Login() {
   
  const [email, setEmail] = useState('raja99@gmail.com');
  const [password, setPassword] = useState('Raja@1234');
 
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
 
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here using the email and password values
    console.log('Email:', email);
    console.log('Password:', password);
    // You can call your login API here
  };
 
  return (
    <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh', backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
     {/* <img src="./images/new.jpg" alt="Logo" style={{ width: '100px', height: 'auto', display: 'block', margin: '0 auto 20px' }} />   */}
      <div className='login-container '>
        <h1 className="text-center mb-4">Login Page </h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='email'>Email</label>
            <input type='email'
            placeholder='Enter Email'
            className='form-control'
            id='email' value={email}
            onChange={handleEmailChange} />
          </div>
 
          <div className='mb-3'>
            <label htmlFor='password'>Password</label>
            <input type='password' placeholder='Enter password' className='form-control' id='password' value={password} onChange={handlePasswordChange} />
          </div>
          <Link className="btn btn-outline-primary " to ={`/home`}>Login</Link>
        </form>
      </div>
    </div>
  );
}
 
export default Login;