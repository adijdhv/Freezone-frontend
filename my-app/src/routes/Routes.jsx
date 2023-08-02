import React from 'react';
import { BrowserRouter as    Route,Routes  } from 'react-router-dom';
 
import Home from '../Pages/home';
import { Signup } from '../Pages/USER/signup';
 
import KYCForm from '../Pages/USER/kycform';
import { Signin } from '../Pages/USER/signin';
// import {Signup} from '../Componentss/signup';
// import { Signin } from '../Componentss/signin'
// import Home from '../Componentss/home';
// import KYCForm from '../Componentss/kycform';

const PageRoutes = () => {
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

export default PageRoutes;