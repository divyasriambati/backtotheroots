import React from 'react'
import footer_icon from '../../assets/footer_icon.png'
import contact_icon from '../../assets/contact_icon.png'
import mail_icon from '../../assets/mail_icon.png'
import './Footer.css'

export default function Footer() {
  return (
    <div className="footer-section">
        <div className="footer-section1">
            <img src={footer_icon} alt="BTTR Logo" />
        </div>
        <div className="footer-section2">
            Contact Information
            <div className="contact">
                <div className="contact_logo"><img src={contact_icon} alt="Phone Logo"></img></div>
                <div className="contact_details">+91-9533 780 640/ <br></br> (+1) 408-373-6959</div>
            </div>
            <div className="contact">
                <div className="contact_logo"><img src={mail_icon} alt="Email Logo"></img></div>
                <div className="contact_details">backtotherootsproject@gmail.com</div>
            </div>
        </div>
        <div className="footer-section3">

        </div>
    </div>
  )
}
