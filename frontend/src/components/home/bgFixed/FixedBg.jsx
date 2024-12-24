//import React from 'react'
import "./bgFixed.css"
function FixedBg() {
  return (
    <div className='container-fluid fixed-bg d-flex align-items-center'>
      <div className="container ">
        <h3 className="poppins fixed-text fw-bold">Hurry Up!</h3>
        <h2 className="poppins fixed-text my-3 fw-bold">Deal of the Day!</h2>
        <p className="poppins fixed-para fw-bold fs-22">Buy This T-shirt At 20% Discount, Use Code Off20</p>
        <button className="fixed-btn mt-3"> SHOP NOW</button>

      </div>
    </div>
  )
}

export default FixedBg
