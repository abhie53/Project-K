import React from 'react';
import linkedinicon from './../images/linkedin.png';
import facebookicon from './../images/facebook.png';
import instagramicon from './../images/instagram.png'
import Logo from '../Logo/Logo';
import { ButtonStyled } from '../commonComponents/Button.styled';
import Message from '../NavigationComponents/Message/Message';
import FooterMsgs from '../NavigationComponents/Message/FooterData';
const Footer = (props) => {
    const customStyled = {
        background: "none",
        color: "white",
        border: 'none',
        textalign: "center",
        width: "fit-content",
        height: "30px",
        textDecoration: "none",
    }
    return (
        <div className={props.className}>
            <div className="footer-row">
                <div className="footer-column">
                    <img src={Logo} alt="Svy Biotech" className="footer-logo" />
                    <p>{Message.company_contact_details.address}</p>
                </div>
                <div className="footer-column">
                    <h4 className="footer-title">{FooterMsgs.socialMsg}</h4>
                    <div className="social-media-icons">
                        <ButtonStyled customStyled={customStyled} href="https://www.facebook.com/" target='_nextpage' className="social-icon"><img src={facebookicon}  alt="facebook" /></ButtonStyled>
                        <ButtonStyled customStyled={customStyled} href="https://www.instagram.com/" className="social-icon" target='_nextpage'><img src={instagramicon}  alt="instagram" /></ButtonStyled>
                        <ButtonStyled customStyled={customStyled} href="https://www.linkedin.com" target='_nextpage' className="social-icon"><img src={linkedinicon}  alt="linkedin" /></ButtonStyled>
                    </div>
                </div>
                <div className="footer-column">
                    <h4 className="footer-title">{FooterMsgs.workWithUs}</h4>
                    <ButtonStyled to='/contact' customStyled={customStyled}>
                        Contach Us
                    </ButtonStyled>
                </div>
                <div className="footer-column">
                    <h4 className="footer-title">{FooterMsgs.citiesMsg}</h4>

                    {
                        FooterMsgs.cities.map((city) => {
                            return (
                                <li className='footer-link'>{city}</li>
                            )
                        }
                        )
                    }
                </div>
            </div>
            <hr />
            <p>&#169; 2024, {Message.company_contact_details.companyName}</p>
        </div>
    );
}

export default Footer;
