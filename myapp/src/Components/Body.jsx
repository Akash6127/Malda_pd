import Carousel from 'react-bootstrap/Carousel';
import "./Body.css"

function Body() {
  return (
    <Carousel>
     
      <Carousel.Item interval={500}  >
        
        <img  style={{height:"77vh" ,width:"100%"}} className='img-fluid'alt='img1' src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
     
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
     
      
      <Carousel.Item interval={500}>
        
        <img style={{height:"77vh" ,width:"100%"}} className='img-fluid ' alt='img2' src='https://plus.unsplash.com/premium_photo-1674506653774-6f51d6ebe799?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        
        <img style={{height:"77vh" ,width:"100%"}} className='img-fluid'alt='img3' src='https://thumbs.dreamstime.com/z/data-protection-cyber-security-privacy-business-internet-technology-concept-97070175.jpg?ct=jpeg'/>
        
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Body;