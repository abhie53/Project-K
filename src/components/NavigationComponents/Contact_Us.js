import React from "react";
import './Contact_Us.css';
import Button from './../commonComponents/Button';
import Message from "./Message/Message";
import phoneIcon from './../images/phone.png';
import emailIcon from './../images/email.png';
import addressIcon from './../images/location.png'
const Contact_Us = () => {
    return (
        <div className="contact_page_container">
            <div className="message-container">
                <p className="message-text">Get In Touch</p>
                <h1>Let's Chat, Reach Out To Us</h1>
                <p className="message">{Message.contactus_msg}</p>
                <hr />
                <div className="input-container">
                    <div className="name-container">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" id="firstname" placeholder="First Name" />
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" id="lastname" placeholder="Last Name" />
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Email" />
                    </div>

                    <div className="subject">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" placeholder="Subject" />
                    </div>

                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" placeholder="Message"></textarea>
                </div>
                <Button>SUBMIT</Button>
            </div>
            <div className="office-details">
                <h1>Contact Us</h1>
                <div className="contact-info">
                    <div>
                        <h3><img src={emailIcon} alt="Email Icon" className="icon" /> Email</h3>
                        <p>{Message.EmailId}</p>
                    </div>
                    <div>
                        <h3><img src={phoneIcon} alt="Phone Icon" className="icon" /> Phone</h3>
                        <p>{Message.MobileNO}</p>
                    </div>
                    <div>
                        <h3><img src={addressIcon} alt="Address Icon" className="icon" /> Our Address</h3>
                        <p>{Message.address}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact_Us;
