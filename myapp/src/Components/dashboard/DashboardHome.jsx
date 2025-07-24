import { useEffect } from 'react'
import React from 'react'
import Linkcard from './Linkcard'
import stockbook from '../../assetes/images/stockbook.jpg'
import handheld2 from '../../assetes/images/handheld2.jpg'
import hardsoft from '../../assetes/images/hardsoft.jpg'
import Static from '../../assetes/images/static.jpg'
import rt from '../../assetes/images/rt.jpg'
import './DashboardHome.css'
import axios from 'axios'


const DashboardHome = () => {
  const [items, setItems] = React.useState([]);
  useEffect(() => {
    const fetchItem = async () =>{

    
    try{
      const response = await axios.get("http://localhost:4000/api/admin/getitem",{
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`
        }
      });
      if(response.data.success){
        console.log(response.data.data);
        setItems(response.data.data);
        
      }
    }catch(error){
      console.log(error);
    }
  };
  fetchItem();
    

  }, [])

console.log("items are: ",items);


  return (

<>
<table style={{marginTop:"10px"}}>
  <tr>
    <th>Item Id</th>
    <th>Hardware Name</th>
    <th>Model</th>
    <th>Serial Number</th>
    <th>Service Type</th>
    <th>Location</th>
    <th>Active/Inactive</th>
    <th>Issued By</th>
    <th>Issued Date and Time</th>
  </tr>
  {items.map((product, index) => (
  <tr key={index}>
    <td>{product.itemId}</td>
    <td>{product.hardwareName}</td>
    <td>{product.modelName}</td>
    <td>{product.serialNo}</td>
    <td>{product.serviceType}</td>
    <td>{product.location?.name}</td>
    <td>{product.present_status}</td>
    <td>{product.IssuedBy}</td>
    <td>
    {new Date(product.date).toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      })}<p style={{color:"tomato"}}>{product.EditedBy?"Edited":""}</p>
    </td>
  </tr>
))}

</table>
</>
  )
}

export default DashboardHome