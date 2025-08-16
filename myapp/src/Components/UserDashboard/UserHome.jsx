import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


function UserHome() {
  const navigate = useNavigate();
  const[psItems,setPsItems]=useState([]);
  const [item_ID, setItem_ID] = useState();
  
  useEffect(() => {
      const token = localStorage.getItem("Token");
  if (!token) {
    console.log("token is out.")
    navigate('/login');
    return;
  }
    const fetchItem = async () =>{

    
    try{
      const response = await axios.get("http://localhost:4000/api/users/getpsitem",{
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`
        }
      });
      if(response.data.success){
        console.log(response.data.data);
        setPsItems(response.data.data);
        setItem_ID(response.data?.data?._id);
        
      }
    }catch(error){
      console.log(error);
    }
  };
  fetchItem();
    

  }, []);
  console.log(psItems);
 
 function handleClick(){
  navigate('/user-dashboard/userhome/additem')
 }

function handleEdit(){
  navigate(`/user-dashboard/userhome/additem`)
}


  return (
    <>
    <div className='mt-3 d-flex justify-content-center'>
    
    <form role="search" className='d-flex'>
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className='btn btn-dark me-2'>Search </button>
        </form>
        
        <button className='btn btn-dark'onClick={handleClick}>Add Item</button>
       
    </div>
    <table style={{marginTop:"10px"}}>
    <tr>
      <th>Item Id</th>
      <th>Hardware Name</th>
      <th>Model</th>
      <th>Serial Number</th>
      <th>Service Type</th>
      
      <th>Issued By</th>
      <th>Issued Date and Time</th>
      <th>Active/Inactive</th>
      <th>Actions</th>
    </tr>
    {psItems.map((product,index)=>(
      <tr key={index}>
        <td>{product.itemId}</td>
        <td>{product.hardwareName}</td>
        <td>{product.modelName}</td>
        <td>{product.serialNo}</td>
        <td>{product.serviceType}</td>
       
        <td>{product.IssuedBy}</td>
        <td>
    {new Date(product.updatedAt).toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      })}
    </td>
     <td>{product.present_status === "active"?<span style={{width:"25px",height:"25px",borderRadius:"100%",backgroundColor:"green",display:"block"}}></span>:<span style={{width:"25px",height:"25px",borderRadius:"100%",backgroundColor:"tomato ",display:"block"}}></span>}</td>
    <td style={{display:"flex"}}>{product.EditedBy?<button style={{backgroundColor:'yellow'}} onClick={()=> navigate(`/user-dashboard/userhome/additem/${product._id}`)}>Edited</button>:<button onClick={()=> navigate(`/user-dashboard/userhome/additem/${product._id}`)}>Edit</button>}</td>
      </tr>
    ))}
  </table>
  </>
  ) 
}

export default UserHome