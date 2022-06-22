import React from "react";
import { BLOG_DATA } from "../../assets/data/blogs";
import hero from "../../assets/images/blog-hero.png";
import Investors from "../../components/Investors";
import { Link } from "react-router-dom";
import "./Blog.css";

const Blog = () => {
  return (
    <>
        <div className="blog-container">
            <div className="blog-container-left">
                <p className="blog-subtitle">Read Blog</p>
                <h1 className="blog-title">NFT Blog</h1>
                <p className="blog-description">Learn how to get the most from your NFTs. Explore the latest NFTs news and tips and tricks all brought to you by your friendly, talkative NFT marketplace on NFTs.</p>
                <Investors/>
            </div>
            <div className="blog-container-right">
                <img src={hero} alt="nft, marketplace, ethereum" className="hero"/>
            </div>
        </div>
        <div className="blog-items-container">
            <p className="blog-items-subtitle">NFT Blog</p>
            <h1 className="blog-items-title">Latest Our Blogs</h1>
            <div className="blog-items-inner-container">
                {
                    BLOG_DATA.map(item => {
                        return (
                            <div key={item.id} className="blog-item">
                                <img className="blog-image" src={item.image} alt="nft, marketplace, ethereum" />
                                <div className="blog-reading">
                                    <p className="short-description">{item.description}</p>
                                    <div className="blog-action">
                                        <Link to={"/nft/blog/" + item.id}  className="blog-read-btn">Read <i class="ri-arrow-right-s-fill"></i></Link>
                                    </div>
                                    <hr className="line"/>
                                    <small className="blog-date">{item.date}</small>
                                </div>
                            </div>
                        );
                    })
                }                
            </div>
        </div>
    </>
  )
}

export default Blog;