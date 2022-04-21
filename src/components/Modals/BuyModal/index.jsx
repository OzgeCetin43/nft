import React from "react";
import "./BuyModal.css";

const BuyModal = (props) => {
    return (
        <div className="buy-modal">
            <div className="buy-modal-inner">
                <i class="ri-close-fill close" onClick={() => props.setBuyIsActive(false)}></i>
                <h1 className="title">Checkout</h1>
                <p className="info-area">You are about to purchase a <span>{props.name}</span> from <span>{props.creator}</span></p>
                <p className="available">Enter quantity, <span>8 available</span></p>
                <input type="text" placeholder="Quantity"/>
                <div className="info">
                    <p>You can buy at least</p>
                    <span>11 ETH</span>
                </div>
                <div className="info">
                    <p>Service Fee</p>
                    <span>0.56 ETH</span>
                </div>
                <div className="info">
                    <p>Total Amount</p>
                    <span>11.56 ETH</span>
                </div>
                <button className="buy-now-btn">Buy Now</button>
            </div>
        </div>
    );
}

export default BuyModal;