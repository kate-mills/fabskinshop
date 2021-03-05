import React from 'react'
import styled from 'styled-components'
import {socialLinks} from '../../../constants/links'
import {PhoneNumber, Email, Address} from '../ContactInfo'

const Footer = ()=>{
  return (
    <div>
      <hr/>
    <FooterWrapper>
      <p className="follow-us-on">Follow Us on</p>
      <div className="social-icons">
        {
          socialLinks.map(({icon, id, label, name, url}) => {
            return(
              <div className="icon" key={id}>
                <a
                  aria-label={`${label}`}
                  className={`${name}`}
                  href={`${url}`}
                  rel="noopener noreferrer"
                  target="_blank">
                  {icon}
                </a>
              </div>
            )
          })
        }
      </div>
      <div className="phone-email-box">
        <Email className="footer-email"/>
        <span className="middot">&middot;</span>
        <PhoneNumber className="footer-phone"/>
      </div>
      <div className="address-box">
        <Address/>
      </div>
      <p className="tiny-last-p">All rights reserved. © {new Date().getFullYear()}</p>
    </FooterWrapper>
    </div>
  )
}
const FooterWrapper = styled.footer`
  & {
    text-align: center;
  }
  .follow-us-on {
    font-size: 1.35rem;
    font-weight: 300;
    margin-bottom: 0;
  }
  .social-icons {
    display: flex;
    flex-flow: wrap;
    width: 50%;
    max-width: 250px;     /* May need to change width depending on number of icons */
    margin: 0.25rem auto 0;
    justify-content: space-evenly;
    .icon {
      font-size: 1.5rem;
      margin: 1rem;
    }
    .facebook {
      color: #00f;
    }
    .instagram {
      color: deeppink;
    }
    .icon {
     -webkit-transition: var(--transition);
      transition: var(--transition);
    }
    .icon:hover {
      transform: translateY(-5px);
    }
  }
  .phone-email-box {
    font-size: 0.85rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0.5rem 0;
    .footer-email,
    .footer-phone {
      margin: 0.25rem;
    }
    .middot {
      position: relative;
      top: 0.3rem;
      display:none;
    }
  }
  .address-box {
    font-size: 0.85rem;
    margin: 0 1rem;
  }
  .tiny-last-p {
    font-size: 0.75rem;
    margin-bottom: 3.3rem;
  }
  @media (min-width: 768px) {
    .phone-email-box{
      flex-direction: row;
      font-size: 1rem;
      justify-content: center;
      .middot {
        display:unset;
        margin: 0 .34rem;
      }
    }
    .tiny-last-p {
      margin-bottom: 0;
    }
  }
`
export default Footer;
