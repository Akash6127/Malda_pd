import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Navigate } from 'react-router-dom';



const Linkcard = ({myImage,title,text}) => {
  return (
    <div>
            <Card style={{ width: '18rem',height:'20rem' }}>
     <div className='h-50 pb-2'><Card.Img variant="top" src={myImage} /></div> 
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {text}
        </Card.Text>
        <Button variant="primary" >See More</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Linkcard