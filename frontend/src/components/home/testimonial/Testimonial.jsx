//import React from 'react'
import Card from 'react-bootstrap/Card';
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
function Testimonial() {
  return (
    <>
    <h1 className='poppins text-center mt-5'>Our Happy Clients!</h1>
    <div className='d-flex justify-content-center'>
    <div className='divider mt-3'>

    </div>
    </div>
    <div className='container d-flex flex-wrap gap-4 pt-lg-4 mt-5 justify-content-center'>
      <Card style={{ width: '22rem' }}>
      <Card.Body>
        <Card.Title>
        <img className="img-fluid me-2" src= "https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2019/06/client02-free-img.jpg"/>
        Diana Burnwood</Card.Title>
        <Card.Subtitle className="my-3 d-flex gap-2">
        <FaStar className='text-danger'/>
        <FaStar className='text-danger'/>
        <FaStar className='text-danger'/>
        <FaStar className='text-danger'/>
        <CiStar className='text-muted '/>
        </Card.Subtitle>
        <Card.Text>Lectus, nonummy et. Occaecat delectus erat, minima dapibus ornare nunc, autem.   </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '22rem' }}>
      <Card.Body>
        <Card.Title>
        <img className="img-fluid me-2" src= "https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2019/06/client02-free-img.jpg"/>
        Diana Burnwood</Card.Title>
        <Card.Subtitle className="my-3 d-flex gap-2">
        <FaStar className='text-danger'/>
        <FaStar className='text-danger'/>
        <FaStar className='text-danger'/>
        <FaStar className='text-danger'/>
        <CiStar className='text-muted '/>
        </Card.Subtitle>
        <Card.Text>Lectus, nonummy et. Occaecat delectus erat, minima dapibus ornare nunc, autem.   </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '22rem' }}>
      <Card.Body>
        <Card.Title>
        <img className="img-fluid me-2" src= "https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2019/06/client02-free-img.jpg"/>
        Diana Burnwood</Card.Title>
        <Card.Subtitle className="my-3 d-flex gap-2">
        <FaStar className='text-danger'/>
        <FaStar className='text-danger'/>
        <FaStar className='text-danger'/>
        <FaStar className='text-danger'/>
        <CiStar className='text-muted '/>
        </Card.Subtitle>
        <Card.Text>Lectus, nonummy et. Occaecat delectus erat, minima dapibus ornare nunc, autem.   </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className='container mt-4 d-flex justify-content-center'>
        <div className='row gap-4'>
            <div className='col-lg-2 col-md-4 col-sm-6'>
        <img className="img-fluid me-2 brand" src= "https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2021/03/logo-2.png"/>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-6'>
        <img className="img-fluid me-2 brand" src= "https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2021/03/logo-2.png"/>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-6'>
        <img className="img-fluid me-2 brand" src= "https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2021/03/logo-2.png"/>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-6'>
        <img className="img-fluid me-2 brand" src= "https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2021/03/logo-2.png"/>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-6'>
        <img className="img-fluid me-2 brand" src= "https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2021/03/logo-2.png"/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Testimonial
