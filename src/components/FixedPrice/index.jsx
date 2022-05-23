import React from "react";
import { useState } from "react";
import "./FixedPrice.css";

const FixedPrice = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="fixed-price-container">
        <h3>Price</h3>
        <input type="text" placeholder="Enter price for one item (ETH)" className="fixed-price-input"/>
        <div className="purchased-container">
          <div className="purchased-inner-container">
            <h3><i class="ri-lock-fill"></i> Unlocked Once Purchased</h3>
            <label className="switch">
              <input type="checkbox" onChange={() => setIsToggled(!isToggled)}/>
              <span className="slider"/>
            </label>
          </div>
          <p>Unlock content after successful transaction.</p>
          {
            isToggled && <input type="text" placeholder="Access key, code to redeem or link to a file" className="purchased-input"/>
          }
        </div>
        <h3>Choose Collection</h3>
        <p>This is the collection where your item will appear.</p>
        <select className="selection">
          <option className="option">Select your collection</option>
          <option className="option" value="dog">Dog</option>
          <option className="option" value="lion">Lion</option>
          <option className="option" value="monkey">Monkey</option>
          <option className="option" value="tiger">Tiger</option>
        </select>
        <h3>Title</h3>
        <input type="text" placeholder="Enter title for your NFT" className="title-input"/>
        <h3>Description</h3>
        <input type="text" placeholder="Enter description for your NFT" className="description-input"/>
    </div>
  )
}

export default FixedPrice;