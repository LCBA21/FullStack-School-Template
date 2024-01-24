import React from 'react'
import{useForm} from 'react-hook-form'
import axios from 'axios';
import { Link } from 'react-router-dom';
import {  useNavigate } from 'react-router-dom';
import  { useEffect, useState } from 'react'



const EditUser = ({userName}) => {

    const [userData,setData] = useState([]);
    const [newData,setNewData] = useState([]);
    // const [userName,setName] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const pageSize = 1;
    

    const navigate = useNavigate(); 
  
  
    const {register,handleSubmit,formState:{errors}}=useForm();
    useEffect(()=>{

        getUserByUserName()
    
    },[userName]);


    const getUserByUserName = async ()=>{

    

        try {
          const response = await axios.get(`http://localhost:8080/user/findByUsername/${userName}`);
          
          setNewData(response.data);
        // has data  console.log(response.data)
          
            // console.error("API response is not an array:", response.data);
        } catch (error) {
           
            console.error(error);
        }


    };

    const editresult = async (data)=>{

        // /findByUsername/{userName}

    
        console.log(data)
     

        // try {
        //   const response = await axios.put(`http://localhost:8080/user/updateUser/${userName}`);

        //   console.log(data.firstName)
        //   console.log(data.lastName)
        //   console.log(data.email)



          
        //     setData(response.data.content);
        //     // console.log(response.data)
        //     setTotalPages(response.data.totalPages);
        //     // console.error("API response is not an array:", response.data);
        // } catch (error) {
           
        //     console.error(error);
        // }


    };

  return (
    <div>
        
           <div className="login-right-column">
                <div className="login-form-box"></div>
                    <form onSubmit={handleSubmit(editresult)}>
                    <h6><i className="lni lni-unlock"></i> First Name</h6>
                    <input type="text" placeholder='enter First Name' defaultValue={newData.firstName} {...register('first_name')}/>
                    <h6><i className="lni lni-unlock"></i> Last Name</h6>
                    <input type="text" placeholder='enter Last Name' defaultValue={newData.lastName}  {...register('last_name')}/>
                    <button  > Edit</button>
                    </form>
            </div>
    </div>
  )
}

export default EditUser



// const Login =  () => {

//     const navigate = useNavigate(); 
  
  
//       const {register,handleSubmit,formState:{errors}}=useForm();
  
//         const loginUser = async (data) => {
//           const basicAuthHeader = `Basic ${btoa(`${data.email}:${data.password}`)}`;
  
//           try {
//             const response = await axios.get('http://localhost:2023/In', {
//               headers: {
//                 Authorization: basicAuthHeader,
//                 'Content-Type': 'application/json',
//               },
//             });
//             if (response.status ===200) {
//                 const text = await response.data;
//                 if(data.email === response.data.email){
//                   navigate("/dashboard")
//                 }
//             } else if (response.status === 401) {
//               console.error('Unauthorized: Login failed');
//               // Display an error message to the user.
//             } else {
//               console.error('Login failed with status:', response.status);
//             }
//             } catch (error) {
//               console.error('Error during login:', error);
//           }
          
//         }
  
   
  
  
//       return (
      
//           <div className="login-container">
//             <div className="page-row">
//                <div className="login-left-column">
//                   <div className="login-title-box">
//                     <div className="login_logo">
//                       <i className="fa-solid fa-school"></i> 
//                       <p>Main<span>land</span></p>
//                     </div>
//                      <h1>Please register to create meaningful content for our website.</h1>
//                      <p className='login_subtitle'>Just register and login to start writing about your experiences 
//                       that you had at our wonderful school.</p>
//                   </div>
//                </div>
//                <div className="login-right-column">
//                   <div className="login-form-box">
//                     <h2>Please log in</h2>
//                     <p id='register_text'>Not registered please <span>Register</span></p>
//                     <form onSubmit={handleSubmit(loginUser)}>
//                       <input type="text" placeholder='enter email'{...register('email')}/>
//                       <h6><i className="lni lni-unlock"></i> Password</h6>
//                       <input type="password" placeholder='enter password' {...register('password')}/>
//                       <button  > Login</button>
//                     </form>
//                   </div>
//                </div>
//             </div>
//           </div>
//       )
//   }
