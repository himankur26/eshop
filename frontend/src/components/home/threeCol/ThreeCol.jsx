//import React from 'react'

function ThreeCol() {
  return (
    <div className="container-fluid pb-4">
    <div className="container my-5">
      <div className="row justify-content-between">
        <div className="col-lg-4 mt-3">
        <img className="img-fluid" src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2020/01/image-01.jpg"/>
        <div>
        <p className="text-muted text-center mt-2">Most Loved Designs</p>
        <h5 className="text-center">Customize Your T-Shirts</h5>
        </div>
        </div>
        <div className="col-lg-4 mt-3">
        <div>
        <p className="text-muted text-center mt-2">Design of the Week</p>
        <h5 className="text-center mb-3 ">Rubber Print Your T-Shirt</h5>
        </div>
        <img className="img-fluid" src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2020/01/image-03.jpg"/>
        </div>
        <div className="col-lg-4 mt-3">
        <img className="img-fluid" src="https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2020/01/image-02.jpg"/>
        <div>
        <p className="text-muted text-center mt-2">New T-shirt Edition</p>
        <h5 className="text-center ">Customize Plain Colors</h5>
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ThreeCol
