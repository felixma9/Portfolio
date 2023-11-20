import "./HeroImgStyles.css";
import IntroImg from "../assets/intro-bg.jpg";

import { Link } from "react-router-dom";
import React from 'react';

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img"
            src={IntroImg} alt="IntroImg"></img>
        </div>
        <div className="content">
            <p>
                Hello I am a developer
            </p>
            <h1>
                Full-stack Developer
            </h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg;