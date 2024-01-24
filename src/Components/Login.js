import React from 'react'
import{useForm} from 'react-hook-form'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import {  useNavigate } from 'react-router-dom';



const Login =  () => {

  const navigate = useNavigate(); 


    const {register,handleSubmit,formState:{errors}}=useForm();

      const loginUser = async (data) => {
        const basicAuthHeader = `Basic ${btoa(`${data.email}:${data.password}`)}`;

        try {
          const response = await axios.get('http://localhost:2023/In', {
            headers: {
              Authorization: basicAuthHeader,
              'Content-Type': 'application/json',
            },
          });
          if (response.status ===200) {
              const text = await response.data;
              if(data.email === response.data.email){
                navigate("/dashboard")
              }
          } else if (response.status === 401) {
            console.error('Unauthorized: Login failed');
            // Display an error message to the user.
          } else {
            console.error('Login failed with status:', response.status);
          }
          } catch (error) {
            console.error('Error during login:', error);
        }
        
      }

 


    return (
    
        <div className="login-container">
          <div className="page-row">
             <div className="login-left-column">
                <div className="login-title-box">
                  <div className="login_logo">
                    <i className="fa-solid fa-school"></i> 
                    <p>Main<span>land</span></p>
                  </div>
                   <h1>Please register to create meaningful content for our website.</h1>
                   <p className='login_subtitle'>Just register and login to start writing about your experiences 
                    that you had at our wonderful school.</p>
                </div>
             </div>
             <div className="login-right-column">
                <div className="login-form-box">
                  <h2>Please log in</h2>
                  <p id='register_text'>Not registered please <span>Register</span></p>
                  <form onSubmit={handleSubmit(loginUser)}>
                    <input type="text" placeholder='enter email'{...register('email')}/>
                    <h6><i className="lni lni-unlock"></i> Password</h6>
                    <input type="password" placeholder='enter password' {...register('password')}/>
                    <button  > Login</button>
                  </form>
                </div>
             </div>
          </div>
        </div>
    )
}

export default Login
