
import React, { useState ,useEffect} from 'react'
import './UserAddItem.css'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'


function UserEditItem() {
  const [item_id, setItem_id]=useState("")
  const [serial_no, setSerial_no]=useState("")
  const [hardware_name, setHardware_name]=useState("")
  const [serviceType, setServiceType]=useState("")
  const [model_name, setModel_name]=useState("")
  const [date, setDate]=useState("")
  const [issuedBy, setIssuedBy]=useState("")
  const [status,setStatus] = useState("active")
  const navigate = useNavigate();
 let {item_ID} = useParams();
 let EditedBy = "yes";





 useEffect(() => {

   
    console.log("itemId",item_ID);
    const token = localStorage.getItem("Token");
    console.log("token",token);
    
    // If itemId is provided, fetch the item details
    if (!token) {
      console.log("token is out.");
      navigate('/login');
      return;
    }
    const fetchItem = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/users/getitm/${item_ID}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`
          }
        });
        if (response.data.success) {
          console.log(response.data.data);
        
          if (response.data.data) {
            const item = response.data.data;
            setItem_id(item.itemId);
            setSerial_no(item.serialNo);
            setHardware_name(item.hardwareName);
            setServiceType(item.serviceType);
            setModel_name(item.modelName);
            setIssuedBy(item.IssuedBy);
            setStatus(item.present_status);
            setDate(item.date); // Assuming date is in ISO format
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchItem();
  },[])

    const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const response = await axios.put(`http://localhost:4000/api/users/updateitem/${item_ID}`,{item_id,serial_no,hardware_name,serviceType,model_name,date,issuedBy,status,EditedBy},
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
    <div>
        
            <form onSubmit={handleSubmit}>
      <div className='form_container'>
        <div className='input_field' >
          <div className='first_division'>

            <div className='label_input'> <label>Item Id</label>
              <input type='text'value={item_id} onChange={(e)=>setItem_id(e.target.value)} required disabled/></div>
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
              <input type='date'  value={date} onChange={(e)=>setDate(e.target.value)} />
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
    </div>
  )
}

export default UserEditItem