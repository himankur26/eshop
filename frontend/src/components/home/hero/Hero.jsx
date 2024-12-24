//import React from 'react'
import "./Hero.css"

function Hero () {
  return (
    <div className="container-fluid bg-hero">
    <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row">
            <div className="col-lg-6 col-md-6 d-flex align-items-center">
            <div>
            <p className="hero-para">Best Quality Products</p>
                <h3 className="hero-heading poppins">We have everything You Want!</h3>
                <p className="text-muted my-3">lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</p>
                <button className="hero-btn border-0 mt-4"> COLLECTION</button>
            </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <img src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2019/06/image26-free.png" className="img-fluid"/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Hero
