import React from "react";
import hero from "../../assets/images/blog-hero.png";
import Investors from "../../components/Investors";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog-container">
       <div className="blog-container-left">
            <p blog-subtitle>Read Blog</p>
            <h1 className="blog-title">NFT Blog</h1>
            <p className="blog-description">Learn how to get the most from your NFTs. Explore the latest NFTs news and tips and tricks all brought to you by your friendly, talkative NFT marketplace on NFTs.</p>
            <Investors/>
       </div>
        <div className="blog-container-right">
            <img src={hero} alt="nft, marketplace, ethereum" className="hero"/>
        </div>
    </div>
  )
}

export default Blog;