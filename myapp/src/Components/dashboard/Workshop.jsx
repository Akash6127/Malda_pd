import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Workshop() {
    const navigate = useNavigate();
    const [workshopItems, setWorkshopItems] = React.useState([]);

    useEffect(() => {

        const token = localStorage.getItem("Token");
        if (!token) {
            console.log("token is out.")
            navigate('/login');
            return;
        }
        // Fetch workshop items or perform any other necessary actions here
        const fetchWorkshopItems = async () => {
            try {
                const response = await axios.get("http://localhost:4000/api/workshopitem/getting", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("Token")}`
                    }
                });
                // console.log("Workshop items fetched successfully:", response.data);
                if (response.data.success) {
                    console.log("Work Shop Items are : ",response.data.data);
                    setWorkshopItems(response.data.data);  // Update state with workshop items
                } else {
                    console.error("Failed to fetch workshop items:", response.data.error);
                    // Handle workshop items data
                }
            } catch (error) {
                console.error("Error fetching workshop items:", error);
            }
            
        };
        fetchWorkshopItems();
    }, []);



  return (
    <div>
        <h3 style={{textAlign:"center"}}>Workshop Items</h3>
        <table style={{marginTop:"10px"}}>
  <tr>
    <th>Item Id</th>
    <th>Hardware Name</th>
    <th>Model</th>
    <th>Serial Number</th>
    <th>Service Type</th>
    <th>Location</th>
    
    <th>Issued By</th>
    <th>Issued Date and Time</th>
    <th>Active/Inactive</th>
    <th>Actions</th>
  </tr>
  {workshopItems.map((product, index) => (
  <tr key={index}>
    <td>{product.itemId}</td>
    <td>{product.hardwareName}</td>
    <td>{product.modelName}</td>
    <td>{product.serialNo}</td>
    <td>{product.serviceType}</td>
    <td>{product.location?.name}</td>
            
    <td>{product.IssuedBy}</td>
    <td>
    {new Date(product.updatedAt).toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      })}<p style={{color:"tomato"}}>{product.EditedBy?"Edited":""}</p>
    </td>
    <td>{product.present_status === "active"?<span style={{width:"25px",height:"25px",borderRadius:"100%",backgroundColor:"green",display:"block"}}></span>:<span style={{width:"25px",height:"25px",borderRadius:"100%",backgroundColor:"red",display:"block"}}></span>}</td>
    <td><button>Move</button></td>
  </tr>
))}

</table>
    </div>
  )
}

export default Workshop