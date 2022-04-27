import React from "react";
import hero from "../../assets/images/character7.svg";
import { Typewriter } from 'react-simple-typewriter';
import "./CreateNft.css";
import { Link } from "react-router-dom";

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
                words={["NFTs", "Digital Arts", "Characters"]}
                loop
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>
          </h1>
          <p className="description">NFTs, the world's largest and best marketplace, is waiting for your support to launch new ventures. As it is known, NFT's are created about animals. However, you will also be able to produce character-themed NFT's upon intense requests from you.</p>
          <Link to="/nft/contact" className="contact-btn">Contact Us</Link>
        </div>
        <div className="right"/>
      </div>
    </div>
  )
}

export default CreateNft;