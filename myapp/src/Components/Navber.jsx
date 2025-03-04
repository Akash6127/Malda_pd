import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useNavigate } from 'react-router-dom';

function NavScrollExample() {
  const navigate =useNavigate();
  return (
    <Navbar expand="lg" className="bg-primary fs-5">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           <Nav.Link className=' text-white' onClick={()=>{navigate('/')}}>Home</Nav.Link> 
          <Nav.Link  className='text-white' onClick={()=>{navigate('/about')}}>About</Nav.Link>
           <NavDropdown className='text-white' title="Link" to="/link" id="navbarScrollingDropdown">
           <NavDropdown.Item onClick={()=>{navigate('/link/mtsection')}}>MT Section</NavDropdown.Item>
            
            <NavDropdown.Item onClick={()=>{navigate('/link/telecom')}} >Telecom</NavDropdown.Item>
                
              
           
            
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item> */}
            </NavDropdown>
           <Nav.Link   className='text-white' onClick={()=>{navigate('/contact')}}> Contact</Nav.Link>
             
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
           
          </Form>
         <div className='m-2' onClick={()=>{navigate("/login")}}><Button variant="success">Login</Button></div> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;