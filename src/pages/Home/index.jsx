import React, { useState, useRef, useEffect } from "react";
import "./Home.css";
import hero from "../../assets/images/hero.png";
import { Link } from "react-router-dom";
import creator1 from "../../assets/images/creator1.jpg";
import creator2 from "../../assets/images/creator2.jpg";
import creator3 from "../../assets/images/creator3.jpg";
import eth from "../../assets/images/eth.png"; 
import dog from "../../assets/images/dog.png";
import customer1 from "../../assets/images/customer1.jpg";
import customer2 from "../../assets/images/customer2.jpg";
import customer3 from "../../assets/images/customer3.jpg";
import seller1 from "../../assets/images/seller1.png";
import seller2 from "../../assets/images/seller2.png";
import seller3 from "../../assets/images/seller3.png";
import seller4 from "../../assets/images/seller4.png";

const Home = (props) => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  const [historyIsActive, setHistoryIsActive] = useState(false);
  const [bidIsActive, setBidIsActive] = useState(false);

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
          historyIsActive && <div className="history-modal">
            <div className="history-modal-inner">
              <i class="ri-close-fill close" onClick={() => setHistoryIsActive(false)}></i>
              <h1 className="title">History</h1>
              <div className="bid-info">
                <img src={customer1} alt="nft, marketplace, ethereum" className="customer-image"/>
                <div className="customer-info">
                  <p className="description">Bid accepted by</p>   
                  <p className="name">Derek White</p>
                  <small className="date">17/04/2022, 17:28</small>           
                </div>
                <i class="ri-check-double-line check"></i>
              </div>
              <div className="bid-info">
                <img src={customer2} alt="nft, marketplace, ethereum" className="customer-image"/>
                <div className="customer-info">
                  <p className="description">Bid accepted by</p>   
                  <p className="name">Mary Adel</p>
                  <small className="date">17/04/2022, 17:30</small>           
                </div>
                <i class="ri-check-double-line check"></i>
              </div>
            </div>
          </div>
        }
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
              <button className="bid-btn" onClick={() => setBidIsActive(true)}>Place a bid</button>
              <button className="history-btn" onClick={() => setHistoryIsActive(true)}>History</button>
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
              <button className="bid-btn" onClick={() => setBidIsActive(true)}>Place a bid</button>
              <button className="history-btn" onClick={() => setHistoryIsActive(true)}>History</button>
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
              <button className="bid-btn" onClick={() => setBidIsActive(true)}>Place a bid</button>
              <button className="history-btn" onClick={() => setHistoryIsActive(true)}>History</button>
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
              <button className="bid-btn" onClick={() => setBidIsActive(true)}>Place a bid</button>
              <button className="history-btn" onClick={() => setHistoryIsActive(true)}>History</button>
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
              <button className="bid-btn" onClick={() => setBidIsActive(true)}>Place a bid</button>
              <button className="history-btn" onClick={() => setHistoryIsActive(true)}>History</button>
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
              <button className="bid-btn" onClick={() => setBidIsActive(true)}>Place a bid</button>
              <button className="history-btn" onClick={() => setHistoryIsActive(true)}>History</button>
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
              <button className="bid-btn" onClick={() => setBidIsActive(true)}>Place a bid</button>
              <button className="history-btn" onClick={() => setHistoryIsActive(true)}>History</button>
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
              <button className="bid-btn" onClick={() => setBidIsActive(true)}>Place a bid</button>
              <button className="history-btn" onClick={() => setHistoryIsActive(true)}>History</button>
            </div>
          </div>
        </div>
      </div>
      {
        bidIsActive && <div className="place-bid-modal">
            <div className="place-bid-modal-inner">
            <i class="ri-close-fill close" onClick={() => setBidIsActive(false)}></i>
              <h1 className="title">Place a Bid</h1>
              <p className="description">You must bid at least <b>11 ETH</b></p>
              <input type="text" placeholder="00.00 ETH"/>
              <p className="description">Enter Quantity, 7 Available</p>
              <input type="text" placeholder="Quantity"/>
              <div className="info">
                <p>You must bid at least</p>
                <span>11 ETH</span>
              </div>
              <div className="info">
                <p>Service Fee</p>
                <span>0.56 ETH</span>
              </div>
              <div className="info">
                <p>Total Bid Amount</p>
                <span>11.56 ETH</span>
              </div>
              <button className="bid-btn">Place a bid</button>
            </div>
          </div>
      }
      <div className="more-container">
        <Link to="/nft/market" className="more-btn">More</Link>
      </div>
      <div className="info">
        <div className="info-container">
          <i class="ri-wallet-line wallet"></i>
          <p className="info-description">Connect your Wallet</p>
          <p className="info-description-long">Powerful features and inclusions, which makes NFTs standout, easily customizable and scalable.</p>
        </div>
        <div className="info-container">
          <i class="ri-stack-line stack"></i>
          <p className="info-description">Create a Collection</p>
          <p className="info-description-long">A great collection of beautiful website templates for your need. Choose the best suitable template.</p>
        </div>
        <div className="info-container">
          <i class="ri-folder-add-line add"></i>
          <p className="info-description">Add New NFTs</p>
          <p className="info-description-long">We've made the template fully responsive, so it looks great on all devices: desktop, tables and mobile.</p>
        </div>
        <div className="info-container">
          <i class="ri-shopping-cart-line chart"></i>
          <p className="info-description">Ready for Sale</p>
          <p className="info-description-long">I throw myself down amoung the tall grass by the stream as I lie close the earth NFT's.</p>
        </div>
      </div>
      <div className="testimonials">
        <h2 className="title">What Customers're Saying</h2>
        <p className="description">More than 170 countries' buyers and sellers have chosen us. They are very happy for care of us. Here are some client's testimony. Be a part of us.</p>
        <div className="testimonials-customers">
          <div className="customer">
            <i class="ri-double-quotes-l quote"></i>
            <p className="comment">The best marketplace for NFTs. They have a huge collection of beautiful digital art, and it is super easy to sell and buy your NFTs here.</p>
            <div className="customer-info">
              <img src={customer1} alt="customer, nft, marketplace, ethereum" className="customer-image"/>
              <span>Alex - Canada</span>
            </div>
          </div>
          <div className="customer">
            <i class="ri-double-quotes-l quote"></i>
            <p className="comment">The best marketplace for NFTs. They have a huge collection of beautiful digital art, and it is super easy to sell and buy your NFTs here.</p>
            <div className="customer-info">
              <img src={customer2} alt="customer, nft, marketplace, ethereum" className="customer-image"/>
              <span>Mary - USA</span>
            </div>
          </div>
          <div className="customer">
            <i class="ri-double-quotes-l quote"></i>
            <p className="comment">The best marketplace for NFTs. They have a huge collection of beautiful digital art, and it is super easy to sell and buy your NFTs here.</p>
            <div className="customer-info">
              <img src={customer3} alt="customer, nft, marketplace, ethereum" className="customer-image"/>
              <span>Tom - Italy</span>
            </div>
          </div>
        </div>
      </div>
      <div className="seller">
        <small className="subtitle">Top Artists</small>
        <h2 className="title">Creative Authors</h2>
        <div className="seller-container">
          <div className="seller-item">
            <img src={seller1} alt="seller, nft, marketplace, ethereum" className="seller-image"/>
            <div className="seller-info">
              <h3 className="name">Danny Green</h3>
              <p className="product-count">Product: 06</p>
              <b className="price">Earned: 24.5 ETH</b>
            </div>
            <h1 className="rank">1</h1>
          </div>
          <div className="seller-item">
            <img src={seller2} alt="seller, nft, marketplace, ethereum" className="seller-image"/>
            <div className="seller-info">
              <h3 className="name">Ben Willer</h3>
              <p className="product-count">Product: 36</p>
              <b className="price">Earned: 84.5 ETH</b>
            </div>
            <h1 className="rank">2</h1>
          </div>
          <div className="seller-item">
            <img src={seller3} alt="seller, nft, marketplace, ethereum" className="seller-image"/>
            <div className="seller-info">
              <h3 className="name">Mary Grey</h3>
              <p className="product-count">Product: 17</p>
              <b className="price">Earned: 44.5 ETH</b>
            </div>
            <h1 className="rank">3</h1>
          </div>
          <div className="seller-item">
            <img src={seller4} alt="seller, nft, marketplace, ethereum" className="seller-image"/>
            <div className="seller-info">
              <h3 className="name">Tom Adam</h3>
              <p className="product-count">Product: 43</p>
              <b className="price">Earned: 39.5 ETH</b>
            </div>
            <h1 className="rank">4</h1>
          </div>
          <div className="seller-item">
            <img src={seller1} alt="seller, nft, marketplace, ethereum" className="seller-image"/>
            <div className="seller-info">
              <h3 className="name">Danny Green</h3>
              <p className="product-count">Product: 06</p>
              <b className="price">Earned: 24.5 ETH</b>
            </div>
            <h1 className="rank">5</h1>
          </div>
          <div className="seller-item">
            <img src={seller2} alt="seller, nft, marketplace, ethereum" className="seller-image"/>
            <div className="seller-info">
              <h3 className="name">Ben Willer</h3>
              <p className="product-count">Product: 36</p>
              <b className="price">Earned: 84.5 ETH</b>
            </div>
            <h1 className="rank">6</h1>
          </div>
          <div className="seller-item">
            <img src={seller3} alt="seller, nft, marketplace, ethereum" className="seller-image"/>
            <div className="seller-info">
              <h3 className="name">Mary Grey</h3>
              <p className="product-count">Product: 17</p>
              <b className="price">Earned: 44.5 ETH</b>
            </div>
            <h1 className="rank">7</h1>
          </div>
          <div className="seller-item">
            <img src={seller4} alt="seller, nft, marketplace, ethereum" className="seller-image"/>
            <div className="seller-info">
              <h3 className="name">Tom Adam</h3>
              <p className="product-count">Product: 43</p>
              <b className="price">Earned: 39.5 ETH</b>
            </div>
            <h1 className="rank">8</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;