import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../styles/kycform.css';
import { fileUpload } from '../../Componentss/KYC/fileupload';
 
//import { fileUpload } from './fileupload';
const KYCForm = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({ 
  });
  const [File,setFile] = useState()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    };


  const handleFileChange = (e) => { setFile(e.target.files[0]); };
   
  const handleSubmit = async (e) => {

    e.preventDefault();
        

    const userToken = localStorage.getItem('userToken');
     
    const config = {
      headers: {
        'Authorization': `Bearer ${userToken}`,
        'Content-Type': 'application/json', // Replace with the appropriate content type if needed
      },
    };
    
    
    

    await axios.put('http://localhost:80/api/user/kycform', formData,config)
      .then(response => {
        console.log('Data uploaded successfully:', response);
        navigate('/')
      }).catch((error)=>{
        console.log('error', error);
      })
      console.log("DOCUMENT :  ",File)
      if(File){
        fileUpload(File)
        navigate('/')
      }
      

     
    
  };

  return (
    <div className="container mt-5">
      <h1 className="display-4">KYC Form</h1>
      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input type="text" name="firstName"     className="form-control form-control-sm" value={formData.firstName} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input type="text" name="lastName" className="form-control form-control-sm" value={formData.lastName} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" name="email" className="form-control form-control-sm" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" name="address" className="form-control form-control-sm" value={formData.address} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="city" className="form-label">City</label>
          <input type="text" name="city" className="form-control form-control-sm" value={formData.city} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="country" className="form-label">Country</label>
          <input type="text" name="country" className="form-control form-control-sm" value={formData.country} onChange={handleChange} required />
        </div>

        {/* upload input */}
         
          <input type="file" name="document" className="form-control " onChange={handleFileChange} required  />
         

        <button type="submit" className="btn btn-primary">Submit</button>

      </form>

    </div>
  );
};

export default KYCForm;
