import React, { useState } from "react";
import { SELECT_METHODS } from "../../assets/data/selectMethods";
import FixedPrice from "../../components/FixedPrice";
import tiger from "../../assets/images/tiger2.png";
import creator from "../../assets/images/creator2.jpg";
import arrow from "../../assets/images/arrow.png";
import "./CreateMultipleCollectible.css";

const CreateMultipleCollectible = () => {
  const [methodName, setMethodName] = useState("Fixed price");
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="multiple-container">
        <p className="multiple-subtitle">Create Multiple NFT</p>
        <h1 className="multiple-title">Create Multiple Collectible</h1>
        <div className="multiple-inner-container">
            <div className="multiple-left">
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
                            item.id !== 2 && <div className={methodName === item.name ? "bid-method active" : "bid-method"} key={item.id} onClick={() => setMethodName(item.name)}>
                                <i className={item.icon + " icon"}></i>
                                <span className="bid-method-name">{item.name}</span>
                            </div>
                        )
                       })
                   }
                </div>
                {
                    methodName === "Fixed price" && <FixedPrice/>
                }
                <div className="purchased-container">
                    <div className="purchased-inner-container">
                        <h3><i class="ri-lock-fill"></i> Unlocked Once Purchased</h3>
                        <label className="switch" onChange={() => setIsToggled(!isToggled)}>
                        <input type="checkbox"/>
                        <span className="slider"></span>
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
                <h3>Number of copies</h3>
                <input type="text" placeholder="E.g. 12" className="copies-input"/>
                <button className="create-item-button">Create Item</button>
            </div>
            <div className="multiple-right">
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

export default CreateMultipleCollectible;