import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { NFT_DATA } from "../../assets/data/data";
import "./DetailNft.css";
import BidArea from "../../components/BidArea";
import HistoryArea from "../../components/HistoryArea";
import eth from "../../assets/images/eth.png";
import BidModal from "../../components/Modals/BidModal";
import BuyModal from "../../components/Modals/BuyModal";

const DetailNft = (props) => {
  const {id} = useParams();
  const nft = NFT_DATA[id-1];

  const [bidIsShowable, setBidIsShowable] = useState(false);
  const [historyIsShowable, setHistoryIsShowable] = useState(false);
  const [bidModalIsShowable, setBidModalIsShowable] = useState(false);
  const [buyModalIsActive, setBuyModalIsActive] = useState(false);

  const bidShowHandler = () => {
    setBidIsShowable(true);
    setHistoryIsShowable(false);
  }
  
  const historyShowHandler = () => {
    setHistoryIsShowable(true);
    setBidIsShowable(false);
  }

  const closeHandler = () => {
    setHistoryIsShowable(false);
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
          <div>
            <button className="bids" onClick={bidShowHandler}>Bids</button>
            <button className="history" onClick={historyShowHandler}>History</button>
          </div>
          {
            (bidIsShowable || historyIsShowable) && <i class="ri-close-fill close" onClick={closeHandler}></i>
          }
        </div>  
        {
          bidIsShowable && <BidArea/>
        }
        {
          historyIsShowable && <HistoryArea/>
        }
        <small className="price">Price</small>
        <div className="price-container">
          <img src={eth} alt="ethereum, marketplace, nft" className="eth"/>
          <span className="eth-price">10 ETH</span>
          <span className="dollar-price">($30.254,5)</span>
        </div>
        <div className="buttons">
          <button className="buy-btn" onClick={() => setBuyModalIsActive(true)}><i class="ri-shopping-cart-2-fill"></i> Buy Now</button>
          <button className="bid-btn" onClick={() => setBidModalIsShowable(true)}><i class="ri-bit-coin-fill"></i> Place a Bid</button>
          <button className="coffee-btn"><i class="ri-cup-fill"></i> Buy a Coffee</button>
        </div>
      </div>
      {
        bidModalIsShowable && <BidModal setBidIsActive={setBidModalIsShowable}/>
      }
      {
        buyModalIsActive&& <BuyModal name={nft.name} creator={nft.creator} setBuyIsActive={setBuyModalIsActive}/>
      }
    </div>
  )
}

export default DetailNft;