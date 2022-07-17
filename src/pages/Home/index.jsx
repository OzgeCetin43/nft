import React, { useState, useRef, useEffect } from "react";
import HistoryModal from "../../components/Modals/HistoryModal";
import BidModal from "../../components/Modals/BidModal";
import "./Home.css";
import hero from "../../assets/images/hero.png";
import { Link } from "react-router-dom";
import eth from "../../assets/images/eth.png"; 
import dog from "../../assets/images/dog.png";
import { TRENDS } from "../../assets/data/trends";
import { STEPS } from "../../assets/data/steps";
import { TESTIMONIALS } from "../../assets/data/testimonials";
import { SELLERS } from "../../assets/data/seller";

const Home = (props) => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  const [historyIsActive, setHistoryIsActive] = useState(false);
  const [bidIsActive, setBidIsActive] = useState(false);

  let interval = useRef();

  const startTimer = () => {
      const endDate = new Date("May 31, 2023 00:00:00").getTime();

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
      <div className="hero-container">
        <div className="left">
          <p className="subtitle">NFTs are Trend Today!</p>
          <h1 className="title">Discover Best <span className="title-inner">Digital Art</span> and Collect <span className="title-inner">NFTs</span></h1>
          <p className="description">The original creators and designers of Non-Fungible Token technology have joined forces to create the world's first marketplace for height-end collectors. Collect, buy, and sell exclusive Crypto Art from over 10000 artists.</p>
          <div className="buttons">
            <Link to="/nft/market" className="explore-btn">Explore</Link>
            <Link to="/nft/createNft" className="create-btn">Create</Link>
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
          <img className="hero" src={hero} alt="hero, nft, ethereum"/>
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
      <div className="hero-description">
        <div className="left">
          <img src={dog}  alt="nft, marketplace, ethereum" className="dog"/>
        </div>
        <div className="right">
          <h2 className="title">The Biggest <span>NFT</span> Marketplace</h2>
          <p className="description">Welcome to the largest NFT marketplace in the digital arts industry. Here you can find rare collectibles for all kinds of artwork made by talented.</p>
          <p className="description">Creators from all accross the globe. Whether you are interested in digital art, photography or unique mixed media, you can find it here.</p>
          <Link to="/nft/contact" className="contact-btn">Contact Us</Link>
        </div>
      </div>
      <div className="popular-works">
        <h1 className="title">Trending this week</h1>
        <p className="description">Various kinds of Artwork categories that are trending this week. The trend will be reset every week. Don't miss out on the best artworks every week!</p>  
        {
          historyIsActive && <HistoryModal setHistoryIsActive={setHistoryIsActive}/>
        }
        <div className="trends">
          {
            TRENDS.map(data => {
              return (
                <div className="trend-item" key={data.id}>
                  <div className={data.className}/>
                  <p className="trend-item-title">{data.title}</p>
                  <div className="trend-item-prices">
                    <div>
                      <p className="eth">{data.eth} ETH</p>
                      <p className="dollar">${data.dollar}</p>
                    </div>
                    <p className="last-bid">Last bid: <span>{data.lastBid} ETH</span></p>
                    <img src={eth} className="eth-logo" alt="ethereum, price, nft"/>
                  </div>
                  <div className="trend-item-creator">
                    <div className="trend-item-creator-inner">
                      <img src={data.creatorImage} alt="creator, nft, marketplace, ethereum" className="trend-item-creator-image"/>
                      <div>
                        <p className="created-by">Created by</p>
                        <p className="creator">{data.creatorName}</p>
                      </div>
                    </div>
                    <i class="ri-heart-fill heart"></i>
                  </div>
                  <div className="buttons">
                    <button className="bid-btn" onClick={() => setBidIsActive(true)}>Place a bid</button>
                    <button className="history-btn" onClick={() => setHistoryIsActive(true)}>History</button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      {
        bidIsActive && <BidModal setBidIsActive={setBidIsActive}/>
      }
      <div className="more-container">
        <Link to="/nft/market" className="more-btn">More</Link>
      </div>
      <div className="info">
        {
          STEPS.map(data => {
            return (
              <div className="info-container" key={data.id}>
                <img src={data.icon} alt="nft, ethereum, marketplace" className="icon"/>
                <p className="info-description">{data.title}</p>
                <p className="info-description-long">{data.description}</p>
              </div>
            )
          })
        }
      </div>
      <div className="testimonials">
        <h2 className="title">What Customers're Saying</h2>
        <p className="description">More than 170 countries' buyers and sellers have chosen us. They are very happy for care of us. Here are some client's testimony. Be a part of us.</p>
        <div className="testimonials-customers">
          {
            TESTIMONIALS.map(data => {
              return (
                <div className="customer" key={data.id}>
                  <i class="ri-double-quotes-l quote"></i>
                  <p className="comment">{data.comment}</p>
                  <div className="customer-info">
                    <img src={data.customerImage} alt="customer, nft, marketplace, ethereum" className="customer-image"/>
                    <span>{data.customerName}</span>
                  </div>
                </div>     
              )
            })
          }
        </div>
      </div>
      <div className="seller">
        <small className="subtitle">Top Artists</small>
        <h2 className="title">Creative Authors</h2>
        <div className="seller-container">
          {
            SELLERS.map(data => {
              return (
                <div className="seller-item" key={data.id}>
                  <img src={data.image} alt="seller, nft, marketplace, ethereum" className="seller-image"/>
                  <div className="seller-info">
                    <h3 className="name">{data.name}</h3>
                    <p className="product-count">Product: {data.productCount}</p>
                    <b className="price">Earned: {data.earned} ETH</b>
                  </div>
                  <h1 className="rank">{data.id}</h1>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Home;