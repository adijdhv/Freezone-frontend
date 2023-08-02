import React from 'react';
import { BrowserRouter as    Route,Routes  } from 'react-router-dom';
 
import Home from '../Pages/home';
import { Signup } from '../Pages/USER/signup';
 
// import {Signup} from '../Componentss/signup';
// import { Signin } from '../Componentss/signin'
// import Home from '../Componentss/home';
// import KYCForm from '../Componentss/kycform';

const AdminRoutes = () => {
        console.log("IN SIGNYP routes")
  return (
        
         <Routes>
       
        <Route path='/' element={<Home/>} />
        <Route path=' ' element={<Signup/>} />
         

        <Route path='/Admin/page/signin' element = {<Signin/>}/>
        <Route path ='/kycform' element={<KYCForm/>} />

        
        </Routes>
   );
};

export default AdminRoutes;