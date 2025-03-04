import React from 'react'
import { useNavigate } from 'react-router-dom'

function UserHome() {
 const navigate = useNavigate();
 function handleClick(){
  navigate('/user-dashboard/userhome/additem')
 }
  return (
    <div className='mt-3 d-flex justify-content-center'>
    
    <form role="search" className='d-flex'>
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className='btn btn-dark me-2'>Search </button>
        </form>
        
        <button className='btn btn-dark'onClick={handleClick}>Add Item</button>
       
    </div>
  ) 
}

export default UserHome