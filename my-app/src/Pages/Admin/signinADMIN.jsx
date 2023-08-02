import React, { useState } from 'react';
import axios from 'axios';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Create an object with the email and password data
    const loginData = {
      email: email,
      password: password,
    };

    // Send the POST request to the API using Axios
    axios.post('http://localhost:3000/api/admin/login', loginData)
      .then((response) => {
        // Handle the response from the server (e.g., store the token, redirect to dashboard)
        console.log(response.data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the login process
        console.error('Error logging in:', error);
      });
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <div>
        <label>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default AdminLogin;
