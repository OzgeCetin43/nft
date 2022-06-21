import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
        <p className="privacy-subtitle">Follow Privacy Policy</p>
        <h1 className="privacy-title">Privacy Policy</h1>
        <small className="privacy-date">Last updated: 22 June 2022</small>
        <p className="privacy-description">This Privacy Policy applies to all platforms, websites, and departments of NFTs and NFTs Operators. By using NFTs Services, you are consenting to the collection, storage, processing and transfer of your personal information as described in this Privacy Policy.</p>
        <h3>1. What personal information does Binance collect and process?</h3>
        <ul className="list-items">
            <div>
                <li className="list-item"><i class="ri-arrow-right-s-fill arrow"></i>email address</li>
                <li className="list-item"><i class="ri-arrow-right-s-fill arrow"></i>name</li>
                <li className="list-item"><i class="ri-arrow-right-s-fill arrow"></i>gender</li>
                <li className="list-item"><i class="ri-arrow-right-s-fill arrow"></i>date of birth</li>
            </div>
           <div>
                <li className="list-item"><i class="ri-arrow-right-s-fill arrow"></i>device ID</li>
                <li className="list-item"><i class="ri-arrow-right-s-fill arrow"></i>phone number</li>
                <li className="list-item"><i class="ri-arrow-right-s-fill arrow"></i>a photographic image</li>
           </div>
        </ul>
        <h3>2. Can Children Use NFTs Services?</h3>
        <p className="privacy-description">NFTs does not allow anyone under the age of 18 to use NFTs Services.</p>
        <h3>3. What About Cookies and Other Identifiers?</h3>
        <p className="privacy-description">We use cookies and similar tools to enhance your user experience, provide our services, and understand how customers use our services so we can make improvements. Depending on applicable laws in the region you are located in, the cookie banner on your browser will tell you how to accept or refuse cookies.</p>
    </div>
  )
}

export default PrivacyPolicy;