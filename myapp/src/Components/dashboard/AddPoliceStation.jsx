import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddPoliceStation = () => {
  const navigate = useNavigate();
  const[policestation,setPolicestation] =useState({
    psName:'',
    description:'',
    email:'',
    password:''
  });
  const handleChange = (e) => {
    const {name,value} = e.target;
    setPolicestation({
      ...policestation,
      [name]:value
    })
  }
const handleSubmit = async (e) => {
   e.preventDefault();
   try{
    const response = await axios.post('http://localhost:4000/api/policestation/add',policestation,{
      headers:{
        "Authorization":`Bearer ${localStorage.getItem('Token')}`
      }
    });
    if(response.data.success){
      navigate('/admin-dashboard/ps')
      console.log(response.data);
    }

   }catch(error){
    if(error.response && !error.response.data.success){
      console.log(error.response.data.error);
    }
   }
}   
 
  return (
    <div>
      <form className="row g-3" onSubmit={handleSubmit}>

      <div className="row g-3">
  <div className="col">
    <input type="text" className="form-control" name="psName" onChange={handleChange} placeholder="Police Station Name" aria-label="PS name"/>
  </div>
  <div className="col">
    <input type="text" className="form-control" name="description" onChange={handleChange} placeholder="Description" aria-label="description"/>
  </div>
  <div className="col">
    <input type="email" className="form-control" name="email" onChange={handleChange} placeholder="Email" aria-label="description"/>
  </div>

  <div className="col">
    <input type="password" className="form-control" name="password" onChange={handleChange} placeholder="Password" aria-label="description"/>
  </div>
  <div className="col">
  <button type="submit" className="btn btn-primary m-auto w-3 ">Add PS</button>
  </div>
  

</div>
  {/* <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4"/>
  </div>
  <div className="col-12">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="col-12">
    <label for="inputAddress2" className="form-label">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="col-md-6">
    <label for="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity"/>
  </div>
  <div className="col-md-4">
    <label for="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="col-md-2">
    <label for="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip"/>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Sign in</button>
  </div> */}
</form>
    </div>
  )
}

export default AddPoliceStation