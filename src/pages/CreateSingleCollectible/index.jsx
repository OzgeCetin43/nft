import React, { useState } from "react";
import { SELECT_METHODS } from "../../assets/data/selectMethods";
import FixedPrice from "../../components/FixedPrice";
import tiger from "../../assets/images/tiger2.png";
import creator from "../../assets/images/creator2.jpg";
import arrow from "../../assets/images/arrow.png";
import "./CreateSingleCollectible.css";

const CreateSingleCollectible = () => {
  const [methodName, setMethodName] = useState("Fixed price");

  return (
    <div className="single-container">
        <p className="single-subtitle">Create Single NFT</p>
        <h1 className="single-title">Create Single Collectible</h1>
        <div className="single-inner-container">
            <div className="single-left">
                <h3>Upload File</h3>
                <div className="file-upload">
                    <p className="single-description">PNG, JPG or WEBP. Max 200 mb.</p>
                    <label className="file-label">
                        <input type="file" className="file-input"/>
                        Browse
                    </label>
                </div>
                <h3>Select Method</h3>
                <div className="bids-methods">
                   {
                       SELECT_METHODS.map(item => {
                        return (
                            <div className={methodName === item.name ? "bid-method active" : "bid-method"} key={item.id} onClick={() => setMethodName(item.name)}>
                                <i className={item.icon + " icon"}></i>
                                <p className="bid-method-name">{item.name}</p>
                            </div>
                        )
                       })
                   }
                </div>
                {
                    methodName === "Fixed price" && <FixedPrice/>
                }
                <button className="create-item-button">Create Item</button>
            </div>
            <div className="single-right">
                <div>
                    <h3>Preview Item</h3>
                    <div className="item-card">
                        <div className="item-card-inner">
                            <img src={tiger} alt="Ethereum, nft, marketplace" className="item-card-image" />
                            <h3 className="item-card-title">Tiger 1</h3>
                            <div className="item-card-creator-container">
                                <img src={creator} alt="Ethereum, nft, marketplace" className="item-card-creator" />
                                <div className="created-container">
                                    <p className="item-card-created">Created by</p>
                                    <h3 className="item-card-creator-name">John Grey</h3>
                                </div>
                            </div>
                            <div className="item-card-info">
                                <div className="item-card-bid">
                                    <p className="item-card-bid-title">Last Bid</p>
                                    <div className="item-card-bid-info">
                                        <h3>8 ETH</h3>
                                        <p>$24.203,6</p>
                                    </div>
                                </div>
                            <div className="item-card-like-container">
                                    <i class="ri-heart-3-line"></i>
                                    <span>50</span>
                            </div>
                            </div>
                            <button className="bid-button">Place a bid</button>
                        </div>
                    </div>
                </div>
                <div className="description-container">
                    <img src={arrow} alt="Ethereum, nft, marketplace" className="arrow" />
                    <h3 className="description-title">Description</h3>
                    <p className="description-paragraph">The tiger (Panthera tigris) is the largest living cat species and a member of the genus Panthera. It is most recognisable for its dark vertical stripes on orange fur with a white underside. An apex predator, it primarily preys on ungulates such as deer and wild boar. It is territorial and generally a solitary but social predator, requiring large contiguous areas of habitat, which support its requirements for prey and rearing of its offspring. Tiger cubs stay with their mother for about two years, then become independent and leave their mother's home range to establish their own.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateSingleCollectible;