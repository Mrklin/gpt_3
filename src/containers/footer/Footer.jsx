import React from 'react'
import gpt3Logo from "../../assets/logo.svg"
import "./footer.css"

const Footer = () => {
    const year = new Date().getFullYear();
    
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step into the future</h1>
      </div>
      <div className='gpt3__footer-btn'>
          <p>Request Early Access</p>
      </div>
      <div className='gpt3__footer-links'>
          <div className='gpt3__footer-links_logo'>
              <img src={gpt3Logo} alt='logo'/>
              <p>Crechterwood K12 182 DK Alknjkcb, All right Reserved</p>
          </div>
          <div className='gpt3__footer-links_div'>
              <h4>Links</h4>
              <p>Overuns</p>
              <p>Social Media</p>
              <p>Counters</p>
              <p>Contact</p>
          </div>
          <div className='gpt3__footer-links_div'>
              <h4>Company</h4>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
              <p>Contact</p>
          </div>
          <div className='gpt3__footer-links_div'>
              <h4>Get in Touch</h4>
              <p>Crechterwood K12 182 DK Alknjkcb</p>
              <p>+234 903 4842 606</p>
              <p>info@payme.net</p>
          </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>Copyright ⓒ {year} GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer