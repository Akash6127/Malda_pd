import React, { useState } from 'react'
import './UserAddItem.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function UserAddItem() {
  const [item_id, setItem_id]=useState("")
  const [serial_no, setSerial_no]=useState("")
  const [hardware_name, setHardware_name]=useState("")
  const [serviceType, setServiceType]=useState("")
  const [model_name, setModel_name]=useState("")
  const [date, setDate]=useState("")
  const [issuedBy, setIssuedBy]=useState("")
  const [status,setStatus] = useState("active")
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const response = await axios.post("http://localhost:4000/api/users/additem",{item_id,serial_no,hardware_name,serviceType,model_name,date,issuedBy,status},
        {
          headers:{
            "Authorization":`Bearer ${localStorage.getItem('Token')}`
          }
    });
      if(response.data.success){
        navigate("/user-dashboard");
        console.log(response.data);
      }else{
        console.log("backend error");
      }
    }catch(error){
      console.error("submiiting error",error);
    }

  }
  return (

    <form onSubmit={handleSubmit}>
      <div className='form_container'>
        <div className='input_field' >
          <div className='first_division'>

            <div className='label_input'> <label>Item Id</label>
              <input type='text'value={item_id} onChange={(e)=>setItem_id(e.target.value)} required /></div>
            <div className='label_input'>  <label>Serial No.</label>
              <input type='text' required value={serial_no} onChange={(e)=>setSerial_no(e.target.value)}/></div>


            <div className='label_input'> <label>Hardware Name</label>
              <input type='text' required value={hardware_name} onChange={(e)=>setHardware_name(e.target.value)} /></div>
            <div className='label_input'>  <label>Model Name</label>
              <input type='text' required value={model_name} onChange={(e)=>setModel_name(e.target.value)} /></div>

          </div>
          <div className='second_division'>
            <div className='label_input'>
              <label>Service Type</label>
              <select value={serviceType} required onChange={(e)=>setServiceType(e.target.value)}>
                <option >...Select...</option>
                <option>Static Set</option>
                <option>I and O</option>
                <option>Static Mobile</option>
                <option>Hand Held Set</option>
                <option>Supirior</option>
                <option>Temporary</option>
              </select>
            </div>
            <div className='label_input'>
              <label>Issue Date</label>
              <input type='date' required value={date} onChange={(e)=>setDate(e.target.value)} />
            </div>



            <div className='label_input'>
              <label>Choose Current situation</label>
              <div>
              <input type='radio' required id='active' name='status_type' value="active" checked={status === "active"} onChange={(e) => setStatus(e.target.value)}  /><label>Active</label>
              <input type='radio' required id='inactive'name='status_type'  value="inactive" checked={status === "inactive"}  onChange={(e) => setStatus(e.target.value)}  /><label>InActive</label>
              </div>
            </div>
            <div className='label_input'>
              <label>Issued By</label>
              <select value={issuedBy} required onChange={(e)=>setIssuedBy(e.target.value)} >
              <option>...Select...</option>
                <option>ASIT BARMAN</option>
                <option>AKASH SHAIKH</option>
                <option>SAGAR SHAIKH</option>
                <option>DIP PODDAR</option>
              </select>
            </div>

          </div>
        </div>
        <div className='submit_field'><button type='submit' className='btn btn-primary'>Submit</button></div>
      </div>
    </form>

  )
}

export default UserAddItem