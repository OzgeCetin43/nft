import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { NFT_DATA } from "../../assets/data/data";
import "./DetailNft.css";
import BidArea from "../../components/BidArea";
import HistoryArea from "../../components/HistoryArea";

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
          bidIsShowable && <BidArea/>
        }
        {
          historyIsShowable && <HistoryArea/>
        }
      </div>
    </div>
  )
}

export default DetailNft;