import './Footer.css'
import Logo from '../Logo/Logo';
import Button from '../commonComponents/Button';
import linkedinicon from './../images/linkedin.png';
import facebookicon from './../images/facebook.png';
import instagramicon from './../images/instagram.png'
import Message from '../NavigationComponents/Message/Message';
const Footer = () => {
    return (
        <div className='main-footer'>
            <div className='footer-container'>
                <div className='row'>
                    <div className='col'>
                        <Logo />
                        <h3>{Message.company_contact_details.companyName}</h3>
                        <ul className='list-unstyled'>
                            <p className='company-address'>{Message.company_contact_details.address}</p>
                        </ul>
                    </div>

                    <div className='col'>
                        <h3>STUFF</h3>
                        <ul className='list-unstyled'>
                            <li>MAHARASHTRA</li>
                            <li>PUNE</li>
                            <li>LATUR</li>

                        </ul>
                    </div>

                    <div className='col'>
                        <h3>Follow Us</h3>
                        <ul className='list-unstyled'>
                            <Button href="https://www.facebook.com"><img src={facebookicon} alt="facebook" className='icon' /></Button>
                            <Button href="https://www.instagram.com/YourPage" ><img src={instagramicon} alt="instagram" className='icon' /></Button>
                            <Button href="https://www.linkedin.com/in/YourProfile"><img src={linkedinicon} alt="linkedin" className='icon' /></Button>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer;