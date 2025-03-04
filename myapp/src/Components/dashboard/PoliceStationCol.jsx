import { useNavigate } from "react-router-dom"
import axios from "axios"
export  const PoliceStationCol =[
  {
    name:"S.No",
    selector: (row)=>row.sno },
  {
    name:"Police Station Name",
    selector: (row)=>row.psName },
  {
    name:"Actions",
    selector: (row)=>row.action}
]

export const Actions =({Id,onDelete})=>{
  
  const navigate = useNavigate()
  const handledelete =async(Id)=>{
   
    if(window. confirm("Do you want to delete this Permanently.")){
    try {


      const response = await axios.delete(`http://localhost:4000/api/policestation/${Id}`, {
          headers: {
              "Authorization": `Bearer ${localStorage.getItem('Token')}`
          }
      });
      if (response.data.success) {
        console.log(response.data.data)
        onDelete(Id);
        console.log("successfully deleted..")
       

        // navigate('/admin-dashboard/ps');
      }
     

  } catch (error) {
      if (error.response && !error.response.data.success) {
          console.log(error.response.data.error);
      }
  }
  

  }
  
}

 
  return(
    <>
    <button className="btn btn-primary me-2"
    onClick={()=>navigate(`/admin-dashboard/policestation/${Id}`)}
    >Edit</button>
    
    <button className="btn btn-danger" onClick={()=>handledelete(Id)}>Delete</button>
    </>
  )
}