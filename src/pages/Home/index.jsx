import React, { useState, useRef, useEffect } from "react";
import "./Home.css";
import hero from "../../assets/images/hero.png";
import { Link } from "react-router-dom";

const Home = (props) => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  let interval = useRef();

    const startTimer = () => {
        const endDate = new Date("May 31, 2022 00:00:00").getTime();

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
    <div className="hero-container">
      <div className="left">
        <p className="subtitle">NFTs are Trend Today!</p>
        <h1 className="title">Discover Best <span className="title-inner">Digital Art</span> and Collect <span className="title-inner">NFTs</span></h1>
        <p className="description">The original creators and designers of Non-Fungible Token technology have joined forces to create the world's first marketplace for height-end collectors. Collect, buy, and sell exclusive Crypto Art from over 10000 artists.</p>
        <div className="buttons">
          <Link to="/market" className="explore-btn">Explore</Link>
          <Link to="/createNfft" className="create-btn">Cretae</Link>
        </div>
        <div className="bid-and-auction">
          <div className="current-bid">
            <p className="title">Current Bid</p>
            <p className="bid-eth">2.00 ETH<span className="bid-dollar">$6050.90</span></p>
          </div>
          <div className="auction">
            <p className="title">Auction ending in</p>
            <div className="timer">
              <div className="time-container">
                <div className="time">{days}</div>
                <div className="time-description">Days</div>
              </div>
              <div className="time-container">
                <div className="time">{hours}</div>
                <div className="time-description">Hours</div>
              </div>
              <div className="time-container">
                <div className="time">{minutes}</div>
                <div className="time-description">Minutes</div>
              </div>
              <div className="time-container">
                <div className="time">{seconds}</div>
                <div className="time-description">Seconds</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <img className="hero" src={hero} alt={"hero, nft, ethereum"}/>
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
  )
}

export default Home;