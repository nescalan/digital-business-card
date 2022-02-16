import React from "react";
import mail from "../../assets/Mail.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/TwitterIcon.svg";
import facebook from "../../assets/FacebookIcon.svg";
import instagram from "../../assets/InstagramIcon.svg";
import github from "../../assets/GitHubIcon.svg";

import "./BusinessCard.css";

const BusinessCard = () => {
  return (
    <div className="businnes_card">
      <div className="image-card"></div>

      <div className="info-card ">
        <div className="center">
          <h1>Laura Smith</h1>
          <span>Frontend Developer</span>
          <p>laurasmith.website</p>
        </div>

        <div className="buttons">
          <button className="btn btn-email">
            <img src={mail} alt="email button" />
            <span>Email</span>
          </button>
          <button className="btn btn-linkedin">
            <img src={linkedin} alt="linkedin button" />
            <span>LinkedIn</span>
          </button>
        </div>

        <div className="content-card">
          <span>About</span>
          <p>
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
          <span>Interests</span>
          <p>
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
      </div>
      <div className="footer-card">
        <div className="footer-icons">
          <img src={twitter} alt="" />
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={github} alt="" />
        </div>
      </div>
    </div>
  );
};

export { BusinessCard };
