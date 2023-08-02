import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handledocumentUpload = (e) => {
    navigate('/kycform')
  };
  return (
    <div className="container mt-5">
      <h1 className="display-4">Welcome to Freezone Portal</h1>
      <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet ipsum ab animi eaque nulla tempore corporis, odit dignissimos odio quasi temporibus ducimus autem blanditiis harum reprehenderit incidunt quis soluta similique?</p>
      
      <div className="upload-button-container">
        <button className="btn btn-primary" onClick={handledocumentUpload}>Upload Document FOR KYC</button>
      </div>
    </div>
  );
};

export default Home;
