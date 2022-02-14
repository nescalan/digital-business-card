import React from "react";
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
          <button className="btn">Email</button>
          <button className="btn">LinkedIn</button>
        </div>

        <div className="content-card">
          <span>About</span>
          <p>
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
          <spant>Interests</spant>
          <p>
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
      </div>
    </div>
  );
};

export { BusinessCard };
