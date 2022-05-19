import React from "react";
import { Typewriter } from 'react-simple-typewriter';
import { Link } from "react-router-dom";
import { createSteps } from "../../assets/data/createSteps";
import single from "../../assets/images/single.png";
import multiple from "../../assets/images/multiple.png";
import "./CreateNft.css";

const CreateNft = (props) => {
  return (
    <div className="create-nft-container">
      <div className="create-nft-hero">
        <div className="left">
          <p className="subtitle">Create Your Own NFTs</p>
          <h1 className="title">
            Create and Sell Best 
            <p className="subtitle-hero">
              <Typewriter 
                words={["NFTs", "Digital Arts", "Animals"]}
                loop
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>
          </h1>
          <p className="description">NFTs, the world's largest and best market, are waiting for your support to produce new NFTs. As is known, NFTs are created about animals. You can create and sell your own NFTs right away.</p>
          <Link to="/nft/contact" className="contact-btn">Contact Us</Link>
        </div>
        <div className="right"/>
      </div>
      <div className="create-nft-steps">
        <p className="nft-create-steps-subtitle">Create NFT</p>
        <h1 className="nft-create-steps-title">What are the NFT creation steps?</h1>
        <div className="create-nft-steps-inner">
          {
            createSteps.map(item => {
              return (
                <div className="create-nft-step" key={item.id}>
                  <div className="order-container">
                    <i className={item.iconClass + " icon"}></i>
                    <p className="order">{item.id}</p>
                  </div>
                  <h1 className="step-title">{item.title}</h1>
                  <p className="step-description">{item.description}</p>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="create-nft-area">
        <p>Choose "Single" if you want your collectible to be one of a kind or "Multiple" if you want to sell one collectible times</p>
        <div className="create-nft-choices">
          <div className="create-nft-choice">
            <Link to="/nft/single">
              <img src={single} alt="NFT, Ethereum, marketplace"/>
              <p>Single</p>
            </Link>
          </div>
          <div className="create-nft-choice">
            <Link to="/nft/multiple">
              <img src={multiple} alt="NFT, Ethereum, marketplace"/>
              <p>Multiple</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateNft;