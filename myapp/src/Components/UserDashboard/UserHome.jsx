import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


function UserHome() {
  const[psItems,setPsItems]=useState([])
  useEffect(() => {
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
        
      }
    }catch(error){
      console.log(error);
    }
  };
  fetchItem();
    

  }, []);
  console.log(psItems);
 const navigate = useNavigate();
 function handleClick(){
  navigate('/user-dashboard/userhome/additem')
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
    <table>
    <tr>
      <th>Item Id</th>
      <th>Hardware Name</th>
      <th>Model</th>
      <th>Serial Number</th>
      <th>Service Type</th>
      <th>Active/Inactive</th>
      <th>Issued By</th>
      <th>Issued Date</th>
    </tr>
    {psItems.map((product,index)=>(
      <tr key={index}>
        <td>{product.itemId}</td>
        <td>{product.hardwareName}</td>
        <td>{product.modelName}</td>
        <td>{product.serialNo}</td>
        <td>{product.serviceType}</td>
        <td>{product.present_status}</td>
        <td>{product.IssuedBy}</td>
        <td>{product.updatedAt}</td>
      </tr>
    ))}
  </table>
  </>
  ) 
}

export default UserHome