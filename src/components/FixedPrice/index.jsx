import React from "react";
import "./FixedPrice.css";

const FixedPrice = () => {
  return (
    <div className="fixed-price-container">
        <h3>Price</h3>
        <input type="text" placeholder="Enter price for one item (ETH)" className="fixed-price-input"/>
    </div>
  )
}

export default FixedPrice;