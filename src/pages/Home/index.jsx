import React, { useState, useRef, useEffect } from "react";
import "./Home.css";
import hero from "../../assets/images/hero.png";
import { Link } from "react-router-dom";
import creator1 from "../../assets/images/creator1.jpg";
import creator2 from "../../assets/images/creator2.jpg";
import creator3 from "../../assets/images/creator3.jpg";
import eth from "../../assets/images/eth.png"; 
import dog from "../../assets/images/dog.png";

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
    <>
      <div className="hero-container">
        <div className="left">
          <p className="subtitle">NFTs are Trend Today!</p>
          <h1 className="title">Discover Best <span className="title-inner">Digital Art</span> and Collect <span className="title-inner">NFTs</span></h1>
          <p className="description">The original creators and designers of Non-Fungible Token technology have joined forces to create the world's first marketplace for height-end collectors. Collect, buy, and sell exclusive Crypto Art from over 10000 artists.</p>
          <div className="buttons">
            <Link to="/nft/market" className="explore-btn">Explore</Link>
            <Link to="/nft/createNft" className="create-btn">Cretae</Link>
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
        <div className="trends">
          <div className="trend-item">
            <div className="trend-item-image-1"/>
            <p className="trend-item-title">Trend #1</p>
            <div className="trend-item-prices">
              <div>
                <p className="eth">10 ETH</p>
                <p className="dollar">$30.254,5</p>
              </div>
              <p className="last-bid">Last bid: <span>11 ETH</span></p>
              <img src={eth} className="eth-logo" alt="ethereum, price, nft"/>
            </div>
            <div className="trend-item-creator">
              <div className="trend-item-creator-inner">
                <img src={creator1} alt="creator, nft, marketplace, ethereum" className="trend-item-creator-image"/>
                <div>
                  <p className="created-by">Created by</p>
                  <p className="creator">Smith Wright</p>
                </div>
              </div>
              <i class="ri-heart-fill heart"></i>
            </div>
            <div className="buttons">
              <button className="bid-btn">Place a bid</button>
              <button className="history-btn">History</button>
            </div>
          </div>
          <div className="trend-item">
            <div className="trend-item-image-2"/>
            <p className="trend-item-title">Trend #2</p>
            <div className="trend-item-prices">
              <div>
                <p className="eth">10 ETH</p>
                <p className="dollar">$30.254,5</p>
              </div>
              <p className="last-bid">Last bid: <span>11 ETH</span></p>
              <img src={eth} className="eth-logo" alt="ethereum, price, nft"/>
            </div>
            <div className="trend-item-creator">
              <div className="trend-item-creator-inner">
                <img src={creator2} alt="creator, nft, marketplace, ethereum" className="trend-item-creator-image"/>
                <div>
                  <p className="created-by">Created by</p>
                  <p className="creator">Smith Wright</p>
                </div>
              </div>
              <i class="ri-heart-fill heart"></i>
            </div>
            <div className="buttons">
              <button className="bid-btn">Place a bid</button>
              <button className="history-btn">History</button>
            </div>
          </div>
          <div className="trend-item">
            <div className="trend-item-image-3"/>
            <p className="trend-item-title">Trend #3</p>
            <div className="trend-item-prices">
              <div>
                <p className="eth">10 ETH</p>
                <p className="dollar">$30.254,5</p>
              </div>
              <p className="last-bid">Last bid: <span>11 ETH</span></p>
              <img src={eth} className="eth-logo" alt="ethereum, price, nft"/>
            </div>
            <div className="trend-item-creator">
              <div className="trend-item-creator-inner">
                <img src={creator3} alt="creator, nft, marketplace, ethereum" className="trend-item-creator-image"/>
                <div>
                  <p className="created-by">Created by</p>
                  <p className="creator">Smith Wright</p>
                </div>
              </div>
              <i class="ri-heart-fill heart"></i>
            </div>
            <div className="buttons">
              <button className="bid-btn">Place a bid</button>
              <button className="history-btn">History</button>
            </div>
          </div>
          <div className="trend-item">
            <div className="trend-item-image-4"/>
            <p className="trend-item-title">Trend #4</p>
            <div className="trend-item-prices">
              <div>
                <p className="eth">10 ETH</p>
                <p className="dollar">$30.254,5</p>
              </div>
              <p className="last-bid">Last bid: <span>11 ETH</span></p>
              <img src={eth} className="eth-logo" alt="ethereum, price, nft"/>
            </div>
            <div className="trend-item-creator">
              <div className="trend-item-creator-inner">
                <img src={creator1} alt="creator, nft, marketplace, ethereum" className="trend-item-creator-image"/>
                <div>
                  <p className="created-by">Created by</p>
                  <p className="creator">Smith Wright</p>
                </div>
              </div>
              <i class="ri-heart-fill heart"></i>
            </div>
            <div className="buttons">
              <button className="bid-btn">Place a bid</button>
              <button className="history-btn">History</button>
            </div>
          </div>
          <div className="trend-item">
            <div className="trend-item-image-5"/>
            <p className="trend-item-title">Trend #5</p>
            <div className="trend-item-prices">
              <div>
                <p className="eth">10 ETH</p>
                <p className="dollar">$30.254,5</p>
              </div>
              <p className="last-bid">Last bid: <span>11 ETH</span></p>
              <img src={eth} className="eth-logo" alt="ethereum, price, nft"/>
            </div>
            <div className="trend-item-creator">
              <div className="trend-item-creator-inner">
                <img src={creator2} alt="creator, nft, marketplace, ethereum" className="trend-item-creator-image"/>
                <div>
                  <p className="created-by">Created by</p>
                  <p className="creator">Smith Wright</p>
                </div>
              </div>
              <i class="ri-heart-fill heart"></i>
            </div>
            <div className="buttons">
              <button className="bid-btn">Place a bid</button>
              <button className="history-btn">History</button>
            </div>
          </div>
          <div className="trend-item">
            <div className="trend-item-image-6"/>
            <p className="trend-item-title">Trend #6</p>
            <div className="trend-item-prices">
              <div>
                <p className="eth">10 ETH</p>
                <p className="dollar">$30.254,5</p>
              </div>
              <p className="last-bid">Last bid: <span>11 ETH</span></p>
              <img src={eth} className="eth-logo" alt="ethereum, price, nft"/>
            </div>
            <div className="trend-item-creator">
              <div className="trend-item-creator-inner">
                <img src={creator3} alt="creator, nft, marketplace, ethereum" className="trend-item-creator-image"/>
                <div>
                  <p className="created-by">Created by</p>
                  <p className="creator">Smith Wright</p>
                </div>
              </div>
              <i class="ri-heart-fill heart"></i>
            </div>
            <div className="buttons">
              <button className="bid-btn">Place a bid</button>
              <button className="history-btn">History</button>
            </div>
          </div>
          <div className="trend-item">
            <div className="trend-item-image-7"/>
            <p className="trend-item-title">Trend #7</p>
            <div className="trend-item-prices">
              <div>
                <p className="eth">10 ETH</p>
                <p className="dollar">$30.254,5</p>
              </div>
              <p className="last-bid">Last bid: <span>11 ETH</span></p>
              <img src={eth} className="eth-logo" alt="ethereum, price, nft"/>
            </div>
            <div className="trend-item-creator">
              <div className="trend-item-creator-inner">
                <img src={creator1} alt="creator, nft, marketplace, ethereum" className="trend-item-creator-image"/>
                <div>
                  <p className="created-by">Created by</p>
                  <p className="creator">Smith Wright</p>
                </div>
              </div>
              <i class="ri-heart-fill heart"></i>
            </div>
            <div className="buttons">
              <button className="bid-btn">Place a bid</button>
              <button className="history-btn">History</button>
            </div>
          </div>
          <div className="trend-item">
            <div className="trend-item-image-8"/>
            <p className="trend-item-title">Trend #8</p>
            <div className="trend-item-prices">
              <div>
                <p className="eth">10 ETH</p>
                <p className="dollar">$30.254,5</p>
              </div>
              <p className="last-bid">Last bid: <span>11 ETH</span></p>
              <img src={eth} className="eth-logo" alt="ethereum, price, nft"/>
            </div>
            <div className="trend-item-creator">
              <div className="trend-item-creator-inner">
                <img src={creator2} alt="creator, nft, marketplace, ethereum" className="trend-item-creator-image"/>
                <div>
                  <p className="created-by">Created by</p>
                  <p className="creator">Smith Wright</p>
                </div>
              </div>
              <i class="ri-heart-fill heart"></i>
            </div>
            <div className="buttons">
              <button className="bid-btn">Place a bid</button>
              <button className="history-btn">History</button>
            </div>
          </div>
        </div>
      </div>
      <div className="more-container">
        <Link to="/nft/market" className="more-btn">More</Link>
      </div>
      <div className="info">
        <div className="info-container">
          <i class="ri-wallet-line wallet"></i>
          <p className="info-description">Connect your Wallet</p>
        </div>
        <div className="info-container">
          <i class="ri-stack-line stack"></i>
          <p className="info-description">Create a Collection</p>
        </div>
        <div className="info-container">
          <i class="ri-folder-add-line add"></i>
          <p className="info-description">Add NFT Products</p>
        </div>
        <div className="info-container">
          <i class="ri-shopping-cart-line chart"></i>
          <p className="info-description">Ready for Sale</p>
        </div>
      </div>
    </>
  )
}

export default Home;