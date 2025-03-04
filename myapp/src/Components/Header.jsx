import React from 'react'
// import {useNavigate } from 'react-router-dom';
import "./Header.css";
import myimage from '../assetes/images/wbplogo.png'



function Header() {
  // const navigate = useNavigate();
  return (
    // <Stack direction="horizontal" gap={2} className='bg-info bg-gradient h-10 pd-1'>
    //   <div className='col-sm-1 p-4'><img src="https://wbpolice.gov.in/WBP/Common/Images/wbplogo.png" className=" img-fluid" alt="..."></img></div>
      
    //   <div className="p-1 text-white fs-2">Malda Police Inventory</div>
      
      
    // </Stack>
    <>
    <div className="container">
    <header className="d-flex flex-wrap justify-content-center px-1 py-2 mb-2 border-bottom m-auto bg-primary">
      
        {/* <svg className="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg> */}
        <div className='wbplogo'><img src={myimage} className=" img-fluid" alt="..."></img></div>
        <span className="fs-2 bold webname text-white">Malda Police District Inventory</span>
    


    </header>
  </div>
    </>
  );
}

export default Header;