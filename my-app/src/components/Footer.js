import "./FooterStyles.css";
import { 
    FaHome, 
    FaPhone, 
    FaMailBulk, 
    FaLinkedin, 
    FaFacebook, 
    FaTwitter 
} from "react-icons/fa";

import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">

                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    <div>
                        <p>123 Housing Society</p>
                        <p>Canada</p>
                    </div>
                </div>

                <div className="phone">
                    <h4><FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    778-985-1277</h4>
                </div>

                <div className="email">
                    <h4><FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    felixma.home@gmail.com</h4>
                </div>
            </div>

            <div className="right">
                <h4>About me</h4>
                <p>This is my portfolio website. I am Felix Ma, a Computer Engineering student at UBC.</p>
                <div className="social">
                    <FaFacebook size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                    <FaTwitter size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                    <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;