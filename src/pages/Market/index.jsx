import React, {useState} from "react";
import "./Market.css";
import hero from "../../assets/images/market-hero.png";
import eth from "../../assets/images/eth.png";
import { Link } from "react-router-dom";
import {NFT_DATA} from "../../assets/data/data";
import BidModal from "../../components/Modals/BidModal";

const Market = (props) => {
  const [filterAreaShowable, setFilterAreaShowable] = useState(false);
  const [bidModalIsShowable, setBidModalIsShowable] = useState(false);

  return (
    <>
      <div className="market-hero-container">
        <div className="left">
          <small className="subtitle">Largest NFT marketplace on the world!</small>
          <h1 className="title">NFT Marketplace</h1>
          <p className="description">Explore on the world's best & largest NFT marketplace with our beautiful NFT products. We want to be a part of your smile, success and future growth.</p>
          <p className="description">Do you want to create your own NFTs?</p>
          <Link to="/nft/createNft" className="create-btn">Create</Link>
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
        <div className="right">
          <img src={hero} alt="nft, marketplace, ethereum" className="hero" />
        </div>
      </div>
      <div className="marketplace">
        <div className="filter-area">
          <h1 className="title">Explore Products</h1>
          <button className="filter-btn" onClick={() => setFilterAreaShowable(!filterAreaShowable)}>Filter {filterAreaShowable ? <i class="ri-close-fill"></i> : <i class="ri-filter-fill"></i>}</button>
        </div>
        {
          filterAreaShowable && <div className="filters">
            <select className="filter">
              <option>All Categories</option>
              <option value="dog">Dog</option>
              <option value="lion">Lion</option>
              <option value="monkey">Monkey</option>
              <option value="tiger">Tiger</option>
            </select>
            <select className="filter">
              <option>All Items</option>
              <option value="single-item">Single Item</option>
              <option value="bundle">Bundle</option>
            </select>
            <select className="filter">
              <option>Sort by</option>
              <option value="high-rate">High Rate</option>
              <option value="mid-rate">Mid Rate</option>
              <option value="low-rate">Low Rate</option>
            </select>
          </div>
        }
        <div className="products">
          {
            NFT_DATA.map(data => {
              return (
                <div key={data.id} className="product-item">
                  <div className={data.image}/>
                  <Link to={"/nft/market/" + data.id} className="title">{data.name}</Link>
                  <div className="info">
                    <div className="creator">
                      <img src={data.creatorImage} alt="nft, ethereum, marketplace" className="creator-image"/>
                      <div className="creator-inner">
                        <small className="subtitle">Owned by</small>
                        <p className="name">{data.creator}</p>
                      </div>
                    </div>
                    <div className="bid">
                      <div className="creator-inner">
                        <small className="subtitle">Current Bid</small>
                        <p className="price">10 ETH</p>
                      </div>
                    </div>
                    <img src={eth} alt="nft, marketplace, ethereum" className="eth"/>
                  </div>
                  <button className="bid-btn" onClick={() => setBidModalIsShowable(true)}>Place a Bid</button>
                </div>
              )
            })
          }
        </div>
        {
          bidModalIsShowable && <BidModal setBidIsActive={setBidModalIsShowable}/>
        }
       </div>
    </>
  )
}

export default Market;