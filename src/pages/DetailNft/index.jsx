import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { NFT_DATA } from "../../assets/data/data";
import customer1 from "../../assets/images/seller1.png";
import customer2 from "../../assets/images/seller2.png";
import customer3 from "../../assets/images/seller3.png";
import customer4 from "../../assets/images/seller4.png";
import "./DetailNft.css";

const DetailNft = (props) => {
  const {id} = useParams();
  const nft = NFT_DATA[id-1];

  const [bidIsShowable, setBidIsShowable] = useState(false);
  const [historyIsShowable, setHistoryIsShowable] = useState(false);

  const bidShowHandler = () => {
    setBidIsShowable(true);
    setHistoryIsShowable(false);
  }
  
  const historyShowHandler = () => {
    setHistoryIsShowable(true);
    setBidIsShowable(false);
  }

  return (
    <div className="detail-container">
      <div className="left">
        <img src={nft.imageUrl} alt="ethereum, nft, marketplace" className="hero"/>
      </div>
      <div className="right">
        <h1 className="title">{nft.name}</h1>
        <div className="info">
          <div className="info-item">
            <i class="ri-stack-line"></i>
            <span>Digital Art</span>
          </div>
          <div className="info-item">
            <i class="ri-eye-fill"></i>
            <span>255</span>
          </div>
          <div className="info-item">
            <i class="ri-heart-fill"></i>
            <span>50</span>
          </div>
        </div>
        <p className="description">{nft.description}</p>
        <small className="creator">Creator</small>
        <div className="creator-info">
          <img src={nft.creatorImage} alt="nft, marketplace, ethereum" className="creator-image"/> 
          <p className="name">{nft.creator}</p>
        </div>
        <div className="bid-and-history">
          <button className="bids" onClick={bidShowHandler}>Bids</button>
          <button className="history" onClick={historyShowHandler}>History</button>
        </div>  
        {
          bidIsShowable && <div className="bid-info">
            <div className="bid-item">
              <img src={customer1} alt="ethereum, nft, marketplace, customer" className="customer"/>
              <div className="description-area">
                <p className="description">Bid accepted <span className="description-mark">11 ETH</span></p>
                <p className="description">by <span className="description-mark">Adam Will </span>at 4/20/2022, 15:20 PM</p>
              </div>
            </div>
            <div className="bid-item">
              <img src={customer2} alt="ethereum, nft, marketplace, customer" className="customer"/>
              <div className="description-area">
                <p className="description">Bid <span className="description-mark">10.85 ETH</span></p>
                <p className="description">by <span className="description-mark">Danny Adel </span>at 4/20/2022, 14:28 PM</p>
              </div>
            </div>
            <div className="bid-item">
              <img src={customer3} alt="ethereum, nft, marketplace, customer" className="customer"/>
              <div className="description-area">
                <p className="description">Bid <span className="description-mark">10.65 ETH</span></p>
                <p className="description">by <span className="description-mark">Sarah Paul </span>at 4/20/2022, 14:21 PM</p>
              </div>
            </div>
            <div className="bid-item">
              <img src={customer4} alt="ethereum, nft, marketplace, customer" className="customer"/>
              <div className="description-area">
                <p className="description">Bid <span className="description-mark">10.55 ETH</span></p>
                <p className="description">by <span className="description-mark">Sam Happy </span>at 4/20/2022, 14:09 PM</p>
              </div>
            </div>
          </div>
        }
        {
          historyIsShowable && <div className="history-info">
            <div className="history-item">
              <img src={customer1} alt="ethereum, nft, marketplace, customer" className="customer"/>
              <div className="description-area">
                <p className="description">Bid accepted <span className="description-mark">11 ETH</span></p>
                <p className="description">by <span className="description-mark">Adam Will </span>at 4/20/2022, 15:20 PM</p>
              </div>
            </div>
            <div className="history-item">
              <img src={customer2} alt="ethereum, nft, marketplace, customer" className="customer"/>
              <div className="description-area">
                <p className="description">Like and bid<span className="description-mark">10.85 ETH</span></p>
                <p className="description">by <span className="description-mark">Danny Adel </span>at 4/20/2022, 14:28 PM</p>
              </div>
            </div>
            <div className="history-item">
              <img src={customer3} alt="ethereum, nft, marketplace, customer" className="customer"/>
              <div className="description-area">
                <p className="description">Show and bid <span className="description-mark">10.65 ETH</span></p>
                <p className="description">by <span className="description-mark">Sarah Paul </span>at 4/20/2022, 14:21 PM</p>
              </div>
            </div>
            <div className="history-item">
              <img src={customer4} alt="ethereum, nft, marketplace, customer" className="customer"/>
              <div className="description-area">
                <p className="description">Show, like and bid <span className="description-mark">10.55 ETH</span></p>
                <p className="description">by <span className="description-mark">Sam Happy </span>at 4/20/2022, 14:09 PM</p>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default DetailNft;