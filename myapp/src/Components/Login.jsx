import React, { useState } from 'react'
// import Caccount from './CreateAccount.jsx';
import './Login.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Login() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [remember,setremember]=useState("");
  const [error,setError]= useState("")
 const {login} = useAuth();
 const navigate = useNavigate();
const handleSubmit = async(e)=>{
  e.preventDefault();
  try{
    const response = await axios.post("http://localhost:4000/api/auth/login",{
      email,
      password,
    });
   if(response.data.success){
   login(response.data.user)
   localStorage.setItem("Token",response.data.token)
   if(response.data.user.role ==="admin"){
    navigate("/admin-dashboard")
   }else{
    navigate("/user-dashboard")
   }
   }
    
  }catch(error){
    if(error.response && !error.response.data.success){
      setError(error.response.data.error);
    }else{
      setError("Something went wrong");
    }
  }
}

  return (
    <>
    <div className="log">
      <h4 className="topic">Login</h4>
      {error && <p className='text-danger'>{error}</p>}
      <form className="container-form" onSubmit={handleSubmit}  >
        <label>Email/Username</label>
        <input type="text" value={email} onChange={e =>setEmail(e.target.value)} required></input>
        <label>Password</label>
        <input type="password" value={password} onChange={e =>setPassword(e.target.value)} required ></input>
        <div className="remember">
        <input type="checkbox" value={remember} onChange={e =>setremember(e.target.value)}></input>
        <p>Remember me</p>
       <div className="forget"> <a href="/">Forget Password</a></div>
        </div>
        
        <button type='submit' className="submit"  >LOGIN</button> 
        </form >
        <Link className="signup" to="/register">Create an Account(New User)</Link>
        </div>
        </>
        );
      }


        export default Login;
