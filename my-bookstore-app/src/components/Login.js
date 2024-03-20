
import React, { useState } from 'react';
//import login from '../components/Images/login.jpg';
 
 
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
 
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
 
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'Akhil' && password === 'akhil@100') {
      setShowSuccessAlert(true);
      setTimeout(() => {
        setShowSuccessAlert(false);
        // Redirect to landing page after hiding the alert
        window.location.href = '/landing';
      }, 2000); // Adjust the timeout duration as needed
    } else {
      setShowErrorAlert(true);
      setTimeout(() => {
        setShowErrorAlert(false);
      }, 2000); // Adjust the timeout duration as needed
    }
  };
 
  return (
    <div id="Book_Container">
      {/* // <img src={login} style={{ width: "400px", height: "400px" }} alt="BookImage" /> / */}
      <h1 id="form_heading"style={{  color: 'white', padding: '10px', textAlign: 'center' }} >Login Page</h1>
      <form id="form" onSubmit={handleSubmit}>
        <label id="formlabel_1" style={{  color: 'white', padding: '20px', textAlign: 'center' }}>Email:</label><br />
        <input type="text" className='forminputtype' value={email} onChange={handleEmailChange} /><br />
 
        <label id="formlabel_1" style={{ color: 'white', padding: '20px', textAlign: 'center' }}>Password:</label><br />
        <input type="password" className='forminputtype' value={password} onChange={handlePasswordChange} /><br />
 
        <button type="submit" style={{ padding: '20px', }}>Login</button>
      </form>
      {showSuccessAlert && (
        <div className="alert" style={{ backgroundColor: 'green', color: 'white', padding: '10px', textAlign: 'center' }}>
          Login successful
        </div>
      )}
      {showErrorAlert && (
        <div className="alert" style={{ backgroundColor: 'red', color: 'white', padding: '10px', textAlign: 'center' }}>
          Incorrect email or password
        </div>
      )}
     
    </div>
  );
}
 
export default Login;
 