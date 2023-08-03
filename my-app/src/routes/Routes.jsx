import React from 'react';
import { BrowserRouter as Router, Route,Routes  } from 'react-router-dom';
 import { Signup } from '../Pages/USER/signup';
import { Signin } from '../Pages/USER/signin';
import KYCForm from '../Pages/USER/kycform';
 
import Home from '../Pages/USER/home';
 

const UserRoutes =  () => {
        console.log("IN SIGNYP routes")
  return (
        
         <Routes>
       
       
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Signup/>} />
         

        <Route path='/signin' element = {<Signin/>}/>
        <Route path ='/kycform' element={<KYCForm/>} />
        
        
        </Routes>
   );
};

export default UserRoutes;