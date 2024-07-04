import React from "react";
import './ContactUs.css'
const ContactUs = () => {
    return(
        <div className="main-contact-container">
        <div className="contact-container">
            <h1>Contact Us</h1>
            <div className="contact-info">
                <div className="conatct-item">
                <h2>Our Address</h2>
                <p>123, SVY Biotech, society n. line no.</p>
            </div>
            <div className="contact-item">
                <h2>Phone</h2>
                <p>7218980456</p>
            </div>
            <div className="conatct-item">
                 <h2>Email</h2>
                 <p>shubzz18@gmail.com</p>
            </div>
        </div>
        
           <div className="contact-form">
                 <h2>Send Us a Message</h2>
                 <form action="">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                         <input type="text" id="name" name="name" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required/>
                    </div>
                    <div className="form-group">
                         <label htmlFor="message">Message</label>
                         <textarea name="message" id="message"></textarea>
                    </div>
                    <div className="formdubmit-button">
                           <button>SUBMIT</button>
                    </div>
                 </form>
           </div>
 

        </div>
        </div>
    )
}

export default ContactUs;