import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Outlet, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import myimage from '../assetes/images/image1.jpg'
import Row from 'react-bootstrap/Row';


const Admin_dashboard =()=> {
  const {user,logout} = useAuth();
  const navigate = useNavigate();
  if(!user){
    navigate("/login");
  }
  return (
    <>
    <Navbar expand="lg" className="bg-primary fs-5">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           <Nav.Link className=' text-white' onClick={()=>{navigate('/admin-dashboard')}}>Dashboard</Nav.Link> 
          <Nav.Link   className='text-white' onClick={()=>{navigate('/admin-dashboard/ps')}}>Police Stations</Nav.Link>
          <Nav.Link className='text-white' onClick={()=>{navigate('/admin-dashboard/requests')}}> Requisition</Nav.Link>
           <NavDropdown  className='text-white' title="Settings" to="/link" id="navbarScrollingDropdown">
           <NavDropdown.Item onClick={()=>{navigate('/admin-dashboard/settings/addps')}}>Add Police Station</NavDropdown.Item> 
            <NavDropdown.Item  onClick={()=>{navigate('/admin-dashboard/settings/change-password')}} >Change Password</NavDropdown.Item>
            <NavDropdown.Item  onClick={()=>{navigate('/admin-dashboard/settings/workshop')}} >Workshop</NavDropdown.Item>
                
             
           
            
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item> */}
            </NavDropdown>
          
            
            
          </Nav>
          <h3 className='m-auto text-warning'>Welcome, {user.name}</h3>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
           
          </Form>
       
         <div className='m-2 text-white ' onClick={()=>{logout()}}><Button variant="warning">Logout</Button> </div> 
         <div className='m-2 item-center'style={{width:"40px",height:"40px"}}><Image  src={myimage} rounded fluid/></div>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet />
    </>
  )
}

export default Admin_dashboard