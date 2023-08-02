import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SignUpButton } from './signupButton';
import { useNavigate } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Navbar = () => {
        const [isLoggedIn, setIsLoggedIn] = useState(false);

       

        // useEffect(() => {
        //         // This code runs once when the component is mounted (equivalent to componentDidMount)
        //         // Initialize the state here if needed
        //         if (userToken) {
        //                 setIsLoggedIn(true)
        //         } else {
        //                 isLoggedIn(false)
        //         }

        //         // Example: Fetch initial count from an API
        //         // const initialCount = fetchInitialCountFromAPI();
        //         // setCount(initialCount);
        // });
        // if (!userToken) {

        const handleLogin = async () => {
                console.log("In    login")
                
                navigate('/signin') 
                
               const L =   localStorage.getItem('LoggedIn') 
               console.log("L",L)
               setIsLoggedIn(L)
                
        }
        const handleSignup = async () => {
                console.log("In sign up")
                navigate('/signup') 
                 
        }


        // } else {
        const handleLogout = async () => {
                console.log("IN HANDLE LOGOUT")
                //console.log("USER TOKEN", userToken)
                try {
                        // Make a POST request to the sign-out API endpoint
                        const apiUrl = 'http://localhost:80/api/user/signout'; // Replace with your API URL
                        await axios.get(apiUrl).then((res)=>{
                                console.log("LOGGED out successsfully",res)
                                setIsLoggedIn(false)
                        }).catch((err)=>{
                                console.log(err)
                        })

                        // If the sign-out is successful, you can perform additional actions here, such as updating the app state or showing a success message.

                        
                } catch (error) {
                        // Handle errors that may occur during the sign-out process
                        console.error('Error signing out:', error);
                }
                
        }

        // }



        const navigate = useNavigate();



        return (
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                        <div class="container-fluid">
                                <a class="navbar-brand" href="#">Freezone-Portal</a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                                <li class="nav-item">
                                                        <a class="nav-link active" aria-current="page"
                                                                onClick={() => navigate('/')} href=''>Home</a>
                                                </li>
                                                <li class="nav-item">
                                                        <a class="nav-link" href="#">Link</a>
                                                </li>
                                                <li class="nav-item">
                                                        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                                                </li>
                                        </ul>
                                        <div>
                                                {isLoggedIn ? (
                                                        // If user is logged in, show the Logout button
                                                        <button onClick={handleLogout}>Logout</button>
                                                ) : (
                                                        // If user is not logged in, show the Login button
                                                        <div>
                                                                <button onClick={handleSignup} >Sign Up</button>

                                                                <button onClick={handleLogin} >Sign In</button>
                                                        </div>

                                                )}
                                        </div>

                                </div>
                        </div>
                </nav>

        );
};

export default Navbar;