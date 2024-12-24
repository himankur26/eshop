//import React from 'react'
import { IoHeartCircle } from "react-icons/io5";
import Accordion from 'react-bootstrap/Accordion'; 
function Faq() {
  return (
    <div className="container-fluid">
    <div className="container">

    <div className="row justify-content-between">
    <div className="col-lg-5 col-md-5 pt-4">
                <h2 className="text-muted poppins fw-bold mb-3">Best Quality Printed T-Shirts & Mugs At Affordable Price!</h2>
                <p className="text-muted">
                    <div className="row gap-3">
                        <div className="col-5">
                        <IoHeartCircle className="text-danger" /> Personal Gifts
                        </div>
                        <div className="col-5">
                        <IoHeartCircle className="text-danger" /> Occasional Gifts
                        </div>
                        <div className="col-5">
                        <IoHeartCircle className="text-danger" /> Corporate Gifts
                        </div>
                        <div className="col-5">
                        <IoHeartCircle className="text-danger" /> Couple Tshirt
                        </div>
                        <div className="col-5">
                        <IoHeartCircle className="text-danger" /> Wedding Package
                        </div>
                        <div className="col-5">
                        <IoHeartCircle className="text-danger" /> Corporate Gifts
                        </div>
                    </div>
                </p>

            </div>
            <div className="col-lg-6 col-md-6">
            <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
            </div>
    </div>
            
        </div>

    </div>
      
    
  )
}

export default Faq
