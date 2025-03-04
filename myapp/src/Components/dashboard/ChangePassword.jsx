import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const ChangePassword = () => {
  const navigate = useNavigate()
  const[email,setEmail] = useState('')
  const[prevPassword,setPrevPassword] = useState('')
  const[newPassword,setNewPassword] = useState('')

const handleSubmit= async(e)=>{
  e.preventDefault();
  try{
    const response = await axios.put("http://localhost:4000/api/auth/update",{
      email,
      prevPassword,
      newPassword,
    })
    if(response.data.success){
      console.log("Updated Successfully...")
      alert("Password Updated Successfully...");
      navigate('/admin-dashboard');
    }else{
      console.log("something is wrong..")
    }

  }catch(error){
    console.log(error);
  }
}

  return (
    <form onSubmit={handleSubmit}>
 <div class="row g-3 align-items-center justify-content-center m-auto">
  <div className='row justify-content-center mt-3 mb-3'>
  <div class="col-auto row">
    <label for="email" class="col-form-label">Email/Username</label>
  </div>
  <div class="col-auto row">
    <input type="email" id="emailid" value={email} onChange={(e)=>setEmail(e.target.value)} class="form-control" aria-describedby="passwordHelpInline" />
  </div>
  <div class="col-auto ">
    <label for="inputPassword6" class="col-form-label">Previous Password</label>
  </div>
  <div class="col-auto">
    <input type="password" id="inputPassword6" value={prevPassword} onChange={(e)=>setPrevPassword(e.target.value)} class="form-control" aria-describedby="passwordHelpInline" />
  </div>

  <div class="col-auto">
    <span id="passwordHelpInline" class="form-text">
      Must be 8-20 characters long.
    </span>
  </div>

  <div className='row justify-content-center  mb-3'>
  <div class="col-auto me-4">
    <label for="inputPassword6" class="col-form-label">New Password</label>
  </div>
  <div class="col-auto">
    <input type="password" id="inputPassword" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} class="form-control" aria-describedby="passwordHelpInline" />
  </div>

  <div class="col-auto">
    <span id="passwordHelpInline" class="form-text">
      Must be 8-20 characters long.
    </span>
  </div>
  </div>
  </div>
  {/* <div className='row justify-content-center  mb-3'>
  <div class="col-auto">
    <label for="inputPassword6" class="col-form-label">Confirm Password</label>
  </div>
  <div class="col-auto col-sm-4">
    <input type="text" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
  </div>
  </div> */}
  
  <div className="col-auto row-auto align-items-center">
  <button type="submit" className="btn btn-primary m-auto w-3 ">Submit</button>
  </div>
  
</div>


</form>

  )
}

export default ChangePassword