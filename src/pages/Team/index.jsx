import React, { useState, useEffect, useRef } from "react";
import hero from "../../assets/images/our-team-hero.png";
import developer from "../../assets/images/developer.jpg";
import "./Team.css";
import { Link } from "react-router-dom";

const Team = () => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
      const endDate = new Date("Jul 31, 2023 00:00:00").getTime();

      interval = setInterval(() => {
          const today = new Date().getTime();
          const difference = endDate - today;

          const calculatedDays = Math.floor((difference / (1000 * 60 * 60 * 24)));
          const calculatedHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const calculatedMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
          const calculatedSeconds = Math.floor((difference % (1000 * 60)) / 1000);

          if(difference < 0) {
              clearInterval(interval.current);
          }

          else {
              setDays(calculatedDays);
              setHours(calculatedHours);
              setMinutes(calculatedMinutes);
              setSeconds(calculatedSeconds);
          }
      }, 1000);
  };

  useEffect(() => {
      startTimer();
      return () => {
          clearInterval(interval.current);
      }
  });

  return (
    <>
        <div className="team-container">
            <div className="left">
                <p className="subtitle">Our Team</p>
                <h1 className="title">Meet Our Team</h1>
                <p className="description">We’re impartial and independent, and every day we create distinctive, world-class programmes and content which inform, educate and entertain millions of people in the around the world.</p>
                <div className="timer">
                    <div className="time-container">
                        <h3 className="time">{days}</h3>
                        <p className="time-description">Days</p>
                    </div>
                    <span className="divider">:</span>
                    <div className="time-container">
                        <h3 className="time">{hours}</h3>
                        <p className="time-description">Hours</p>
                    </div>
                    <span className="divider">:</span>
                    <div className="time-container">
                        <h3 className="time">{minutes}</h3>
                        <p className="time-description">Minutes</p>
                    </div>
                    <span className="divider">:</span>
                    <div className="time-container">
                        <h3 className="time">{seconds}</h3>
                        <p className="time-description">Seconds</p>
                    </div>
                </div>
                <h3 className="description">We will extend our team as soon as possible!</h3>
                <Link to="/nft/contact" className="contact-btn">Join Us</Link>
            </div>
            <div className="right">
                <img src={hero} alt="nft, marketplace, ethereum" />
                <div className="about">
                    <div className="about-inner">
                        <p className="about-title">28K+</p>
                        <p className="about-description">Artwork</p>
                    </div>
                    <div className="about-inner">
                        <p className="about-title">18K+</p>
                        <p className="about-description">Auction</p>
                    </div>
                    <div className="about-inner">
                        <p className="about-title">8K+</p>
                        <p className="about-description">Artist</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="developer-container">
            <div className="left">
                <img src={developer} alt="developer, css, html, nft, ethereum, marketplace" />
            </div>
            <div className="right">
                <h1 className="name job-title">DEVELOPER</h1>
                <h1 className="name">Özge Çetin</h1>
                <h3 className="about-subtitle">Something About Me</h3>
                <p className="about">Hello everyone 🖐. I'm Özge Çetin. I'm newly graduated from Computer Engineering department at Ankara University and Software Developer Asistant Specialist at Odeon Software & Technology. This is my first work experience 💻, so I'm Junior Developer 😂. I like to design Web apps and want to get experience in this area.</p>
                <h3 className="about-subtitle">Contact</h3>
                <p className="about">Izmir/Turkey</p>
                <p className="about">ozgecetin43@gmail.com</p>
            </div>
        </div>

        <div className="about-us-container">

        </div>
    </>
  )
}

export default Team;