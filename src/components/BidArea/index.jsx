import React from "react";
import "./BidArea.css";
import customer1 from "../../assets/images/seller1.png";
import customer2 from "../../assets/images/seller2.png";
import customer3 from "../../assets/images/seller3.png";
import customer4 from "../../assets/images/seller4.png";

const BidArea = (props) => {
    return (
        <div className="bid-info">
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
    );
}

export default BidArea;