import styled from 'styled-components';
import Footer from './Footer';

export const FooterStyled = styled(Footer)`
  background-color: #000;
  color: #fff;
  padding: 20px;
  text-align: center;
  font-family: Arial, sans-serif;

  .footer-row {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 20px 0;
  }

   .social-media-icons Button{
    width: 20px;
   }
  
  .footer-column {
    flex: 1;
    padding: 10px;
    min-width: 200px;
    text-align: left;
  }

  .footer-logo {
    width: 100px;
  }

  .footer-link {
    color: #fff;
    text-decoration: none;
    display: block;
    margin: 5px 0;
    &:hover {
      text-decoration: underline;
    }
  }

  .footer-title {
    color: #5bc0de;
    margin-bottom: 10px;
  }

  .social-media-icons {
    display: flex;
    gap: 10px;
    font-size: 24px;
  }

  .social-icon img{
    height: 40px;
    width: 40px;
    background: white;
    border-radius: 50%;
  }

`;
