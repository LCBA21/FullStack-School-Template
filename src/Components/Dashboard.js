import React, {useState,useEffect} from 'react'
import Sidebar from './Sidebar'
import "../styles/sidebar.css"
import axios from 'axios';
// import Dashboard from '../Dashboard.js';





const Dashboard = () => {

  useEffect(() => {
    // Make a request to the backend endpoint
    axios.get('http://localhost:2023/dashboard')
      .then(response => {
        console.log(response.data.email);
        
      })
      .catch(error => {
        console.error('Error fetching user details:', error);
        // Handle the error as needed
      });
  }, []);


  return (
    <div>
      <Sidebar />

      
       
    </div>
  )
}

export default Dashboard
