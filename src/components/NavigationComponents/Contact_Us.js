import React from "react";
import './Contact_Us.css';
import Button from './../commonComponents/Button';
import Message from "./Message/Message";
import phoneIcon from './../images/phone.png';
import emailIcon from './../images/email.png';
import addressIcon from './../images/location.png'
import Input from './../commonComponents/Input';
const Contact_Us = () => {
    return (
        <div className="contact_page_container">
            <div className="message-container">
                <p className="message-text">{Message.company_contact_details.contactus_greet}</p>
                <h1>{Message.company_contact_details.contactus_heading}</h1>
                <p className="message">{Message.company_contact_details.contactus_msg}</p>
                <hr />
                <div className="input-container">
                    <div className="name-container">
                        <Input type="text" id="firstname" placeholder="First Name" className="full-width-input" style={{ width: '100%' }}></Input>
                        <Input type="text" id="lastname" placeholder="Last Name" className="full-width-input" style={{ width: '100%' }}></Input>
                    </div>
                    <div className="email">
                        <Input type="email" id="email" placeholder="Email" style={{ width: '100%' }}></Input>
                    </div>
                    <div className="subject">
                        <Input type="text" id="subject" placeholder="subject" style={{ width: '100%' }}></Input>
                    </div>
                    <Input name="message" id="message" placeholder="Message" rows={3} cols={50}></Input>
                </div>
                <Button>SUBMIT</Button>
            </div>
            <div className="office-details">
                <h1>Contact Us</h1>
                <div className="contact-info">
                    <div>
                        <h3><img src={emailIcon} alt="Email Icon" rows={5} className="icon" /> Email</h3>
                        <p>{Message.company_contact_details.EmailId}</p>
                    </div>
                    <div>
                        <h3><img src={phoneIcon} alt="Phone Icon" className="icon" /> Phone</h3>
                        <p>{Message.company_contact_details.MobileNO}</p>
                    </div>
                    <div>
                        <h3><img src={addressIcon} alt="Address Icon" className="icon" /> Our Address</h3>
                        <p>{Message.company_contact_details.address}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact_Us;
