import React, { useState, useEffect } from 'react'
import { PoliceStationCol, Actions } from './PoliceStationCol.jsx'
import DataTable from 'react-data-table-component';
import axios from 'axios';





const PoliceStation = () => {
  
  const [policeStations, setPoliceStations] = useState([]);
  
  const onDelete =  (Id) => {
    const restdata = policeStations.filter(item => item._id !== Id)
    console.log(restdata);
    setPoliceStations(restdata);
    // navigate('/admin-dashboard/ps')
  }
 
  useEffect(() => {
    const fetchPoliceStations = async () => {
      // const onDelete =  (Id) => {
      //   const restdata = policeStations.filter(item => item._id !== Id)
      //   console.log(restdata);
      //   setPoliceStations(restdata);
      //   // navigate('/admin-dashboard/ps')
      // }
     
      try {


        const response = await axios.get('http://localhost:4000/api/policestation/', {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('Token')}`
          }
        });
        if (response.data.success && response.data.policeStations) {
          let sno = 1;
          const result = response.data.policeStations.map((item) => {
            return {
              _id: item._id,
              sno: sno++,
              psName: item.psName,
              action: (<Actions Id={item._id} onDelete={onDelete} />)
            }

          }
          
          );
          setPoliceStations(result);
        
        }

      }
    
  catch (error) {
      if (error.response && !error.response.data.success) {
        console.log(error.response.data.error);
      }
    }



  
};fetchPoliceStations();
}, [policeStations])
return (
  <div>
    
    <DataTable
      title="Police Stations"
      columns={PoliceStationCol}
      data={policeStations}
    />
  
  </div>
)
}

export default PoliceStation