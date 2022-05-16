import React from "react";
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
    </div>
  )
}

export default CreateNft;