import React,{useState} from 'react'
import "../styles/Login.css"
import{useForm} from 'react-hook-form'
import axios from 'axios';


const Registeration = () => {


const {
  register,
  handleSubmit,
  formState:{errors}
}=useForm();


 
  const [handleRegister, setHandleRegister] = useState("none");
  
  const storeTokenToSession=(token)=>{
    sessionStorage.setItem("jwtToken",token)
    window.location.href ="http://localhost:5173/createblog";
  }

  const registerUser = async (data) => {

    try {

     await axios.post("http://localhost:2023/api/user/save", data);


      console.log("User registered successfully!");
    } catch (error) {
      console.error("Error registering the user:", error);
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
                <p id='register_text'onClick={()=>setHandleRegister('block')}>Not registered please <span>Register</span></p>
                <form onSubmit={handleSubmit(registerUser)}>
                  <h6><i className="lni lni-users"></i> Full name</h6>
                  <input  type="text" placeholder='enter name' {...register('userName')}/>
                    <h6><i className="lni lni-users"></i> First name</h6>
                  <input  type="text" placeholder='enter name' {...register('first_name')}/>
                  <h6><i className="lni lni-users"></i> Last name</h6>
                  <input  type="text" placeholder='enter name' {...register('last_name')}/>
                  <h6><i className="lni lni-envelope"></i> Email</h6>
                  <input type="text" placeholder='enter email'{...register('email')}/>
                  <h6><i className="lni lni-unlock"></i> Password</h6>
                  <input  type="text" placeholder='enter password'{...register('password')}/>
                  <button> Please register</button>
                </form>
              </div>
           </div>
        </div>
      </div>
  )
}

export default Registeration


