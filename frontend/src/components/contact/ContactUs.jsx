//import React from 'react'
import { FaMap } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import "./contact.css"
import Form from "./Form";
function ContactUs() {
  return (
    <div className="container-fluid h-full d-flex align-items-center">
    <div className="container ">

    <div className="row justify-content-between">
    <div className="col-lg-5 col-md-5 pt-4">
                <h1 className="text-muted poppins mb-3 hello">Say Hello.</h1>
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <div className='divider2 mt-5 mb-3'></div>
                <p className="text-muted">
                    <div className="row gap-3">
                        <div className="col-8 mt-4">
                        <FaMap className="text-danger me-3"/> 212 7th St SE, Washington, DC 20003, USA
                        </div>
                        <div className="col-6">
                        <IoIosMail className="text-danger me-3"/>info@example.com
                        </div>
                        <div className="col-6">
                        <FaPhoneAlt className="text-danger me-3"/> 123-456-7890/91
                        </div>
                        
                    </div>
                </p>

            </div>
            <div className="col-lg-6"><Form/></div>
            </div>
            </div>
            </div>
  )
}

export default ContactUs
