import React from "react";
import "./BidModal.css";

const BidModal = (props) => {
    return (
        <div className="place-bid-modal">
            <div className="place-bid-modal-inner">
                <i class="ri-close-fill close" onClick={() => props.setBidIsActive(false)}></i>
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
    );
}

export default BidModal;