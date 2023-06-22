import React from 'react'
import footer_icon from '../../assets/footer_icon.png'
import contact_icon from '../../assets/phone_icon.png'
import mail_icon from '../../assets/email_icon.png'
import facebook_whitebg from '../../assets/facebook_whitebg.png'
import twitter_whitebg from '../../assets/twitter_whitebg.png'
import youtube_whitebg from '../../assets/youtube_whitebg.png'
import instagram_whitebg from '../../assets/instagram_whitebg.png'
import location_icon from '../../assets/location_icon.png'
import './Footer.css'

export default function Footer() {
  return (
    <div className="footer_section">
        <div className="footer_section1">
            <img  className="footer_img" src={footer_icon} alt="BTTR Logo" />
        </div>
        <div className="footer_section2">
            <div className="contact_heading">CONTACT</div>
            <br></br>
            <div className="contact">
                <div className="contact_logo"><img src={contact_icon} alt="Phone Logo"></img></div>
                <div className="contact_details">+91-9533 780 640/ <br></br> (+1) 408-373-6959</div>
            </div>
            <br></br>
            <div className="contact">
                <div className="contact_logo"><img src={mail_icon} alt="Email Logo"></img></div>
                <div className="contact_details">backtotherootsproject@gmail.com</div>
            </div>
            <br></br>
            <br></br>
            <div className="contact_heading">SOCIAL LINKS</div>
            <br></br>
            <div className="contact_buttons">
                <img src={facebook_whitebg} alt="Facebook"></img>
                <img src={instagram_whitebg} alt="Instagram"></img>
                <img src={twitter_whitebg} alt="Twitter"></img>
                <img src={youtube_whitebg} alt="Youtube"></img>
            </div>
            <br></br>

        </div>

        <div className="footer_section3">
            <div className="contact_heading">LOCATION</div>
            <br></br>
            <div className="contact">
                <div className="contact_logo"><img src={location_icon} alt="Map"></img></div>
                <div className="contact_details">
                    <div className="contact_heading1">USA</div>
                    Back to the Roots Project, Ved
                    Vignan Mahavidyapeeth, 12 Murphy
                    Drive, Nashua, NH 03062, USA
                </div>
            </div>
            <div className="contact">
                <div className="contact_logo"><img src={location_icon} alt="Map"></img></div>
                <div className="contact_details">
                    <div className="contact_heading1">India</div>
                    <div className="contact_heading2">Bangalore, INDIA:</div> VVMVP Trust Office, 21st Km.,
                     Kanakpura Road, Udayapura, Bangalore
                     South – 560082, INDIA
                    <div className="contact_heading2">Hyderabad, INDIA:</div> Mohan Nagar, Kothapet,
                    Hyderabad, INDIA
                </div>
            </div>

             
        </div>
    </div>
  )
}
