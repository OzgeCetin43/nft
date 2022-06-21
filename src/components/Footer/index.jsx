import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer">
        <div className="description-area">
          <i className="ri-bubble-chart-fill logo"></i>
          <p className="description">
            Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital assets.
          </p>
        </div>
        <div className="my-account">
          <h4 className="title">My Account</h4>
          <ul className="my-account-links">
            <li className="my-account-link-item">
              <i class="ri-arrow-right-s-fill right-arrow"></i><NavLink className="my-account-link" to="/nft/createNft">Create Nft</NavLink>
            </li>
            <li className="my-account-link-item">
              <i class="ri-arrow-right-s-fill right-arrow"></i><NavLink className="my-account-link" to="/nft/profile">Profile</NavLink>
            </li>
            <li className="my-account-link-item">
              <i class="ri-arrow-right-s-fill right-arrow"></i><NavLink className="my-account-link" to="/nft/editProfile">Edit Profile</NavLink>
            </li>
            <li className="my-account-link-item">
              <i class="ri-arrow-right-s-fill right-arrow"></i><NavLink className="my-account-link" to="/nft/market">Collection</NavLink>
            </li>
          </ul>
        </div>
        <div className="community">
          <h4 className="title">Community</h4>
          <ul className="community-links">
            <li className="community-link-item">
              <i class="ri-arrow-right-s-fill right-arrow"></i><NavLink className="community-link" to="/nft/team">Team</NavLink>
            </li>
            <li className="community-link-item">
              <i class="ri-arrow-right-s-fill right-arrow"></i><NavLink className="community-link" to="/nft/termsCondition">Terms & Condition</NavLink>
            </li>
            <li className="community-link-item">
              <i class="ri-arrow-right-s-fill right-arrow"></i><NavLink className="community-link" to="/nft/privacyPolicy">Privacy Policy</NavLink>
            </li>
            <li className="community-link-item">
              <i class="ri-arrow-right-s-fill right-arrow"></i><NavLink className="community-link" to="#">Blog</NavLink>
            </li>
            <li className="community-link-item">
              <i class="ri-arrow-right-s-fill right-arrow"></i><NavLink className="community-link" to="/nft/faq">FAQ</NavLink>
            </li>
          </ul>
        </div>
        <div className="help-and-support">
          <h4 className="title">Help And Support</h4>
          <p><i class="ri-arrow-right-s-fill right-arrow"></i><span>Support : <span className="communication">info@nfts.com</span></span></p>
          <p><i class="ri-arrow-right-s-fill right-arrow"></i><span>Sales : <span className="communication">sales@nfts.com</span></span></p>
          <p><i class="ri-arrow-right-s-fill right-arrow"></i><span>Phone : <span className="communication">+90 000 00 00</span></span></p>
          <div className="social-media">
            <i class="ri-instagram-fill social-media-item"></i>
            <i class="ri-facebook-circle-fill social-media-item"></i>
            <i class="ri-twitter-fill social-media-item"></i>
          </div>
        </div>
      </div>
      <hr className="line"/>
      <p className="copyright">&copy; Copyrights 2022 - All Rights Reserved | Özge Çetin</p>
    </div>
  )
}

export default Footer;