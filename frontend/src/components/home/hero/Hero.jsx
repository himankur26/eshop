//import React from 'react'
import "./Hero.css"
import Button from '@mui/material/Button';

function Hero () {
  return (
    <div className="container-fluid bg-hero">
    <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row">
            <div className="col-6">
                <h2>lorem lorem lorem lorem</h2>
                <p className="text-muted my-3">lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</p>
                <Button variant ="contained" size="large">COLLECTION</Button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Hero
