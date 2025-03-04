import React from 'react'
import {  useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Editps = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [policeStations, setPoliceStations] = useState([]);
    useEffect(() => {
    
        console.log(params.id)
        const fetchPoliceStations = async () => {
            try {


                const response = await axios.get(`http://localhost:4000/api/policestation/${params.id}`, {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('Token')}`
                    }
                });
                if (response.data.success) {
                    setPoliceStations(response.data.data);
                    
                }

            } catch (error) {
                if (error.response && !error.response.data.success) {
                    console.log(error.response.data.error);
                }
            }



        }
        fetchPoliceStations();
    }, [])
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPoliceStations({
            ...policeStations,
            [name]: value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:4000/api/policestation/${params.id}`, policeStations, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('Token')}`
                }
            });
            if (response.data.success) {
                console.log(response.data);
                navigate('/admin-dashboard/ps');
            }

        } catch (error) {
            if (error.response && !error.response.data.success) {
                console.log(error.response.data.error);
            }
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='mt-2'> 
                <div className="row g-3">
                    <div className="col">
                        <input type="text" className="form-control" name="psName" onChange={handleChange} value={policeStations.psName} placeholder="Police Station Name" aria-label="PS name" />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" name="description" onChange={handleChange} value={policeStations.description} placeholder="Description" aria-label="description" />
                    </div>
                    <div className="col">
                        <button type="submit" className="btn btn-primary m-auto w-3 ">Add PS</button>
                    </div>


                </div>
            </form>
        </div>
    )
}

export default Editps