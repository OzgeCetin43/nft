import React from "react";
import { Link } from "react-router-dom";
import "./TermsAndCondition.css";

const TermsAndCondition = () => {
  return (
    <div className="terms-container">
        <p className="terms-subtitle">NFTs Terms of Use</p>
        <h1 className="terms-title">Terms & Condition</h1>
        <small className="terms-date">Last revised: 21 June 2022</small>
        <p className="terms-description">
            These NFTs Terms of Use is entered into between you (hereinafter referred to as “you” or “your”) and NFTs operators (as defined below). By accessing, downloading, using or clicking on “I agree” to accept any NFTs. Services (as defined below) provided by NFTs (as defined below), you agree that you have read, understood and accepted all of the terms and conditions stipulated in these Terms of Use (hereinafter referred to as “these Terms”) as well as our Privacy Policy at 
            <Link to="/nft/privacyPolicy" className="privacy-link"> there</Link>. 
            In addition, when using some features of the Services, you may be subject to specific additional terms and conditions applicable to those features.
        </p>
        <p className="terms-description">
            Please read the terms carefully as they govern your use of NFTs Services.
            <b>THESE TERMS CONTAIN IMPORTANT PROVISIONS INCLUDING AN ARBITRATION PROVISION THAT REQUIRES ALL CLAIMS TO BE RESOLVED BY WAY OF LEGALLY BINDING ARBITRATION. </b>
            The terms of the arbitration provision are set forth in Article 10, “Resolving Disputes: Forum, Arbitration, Class Action Waiver”, hereunder. As with any asset, the values of Digital Currencies (as defined below) may fluctuate significantly and there is a substantial risk of economic losses when purchasing, selling, holding or investing in Digital Currencies and their derivatives.
            <b> BY MAKING USE OF NFTs SERVICES, YOU ACKNOWLEDGE AND AGREE THAT: (1) YOU ARE AWARE OF THE RISKS ASSOCIATED WITH TRANSACTIONS OF DIGITAL CURRENCIES AND THEIR DERIVATIVES; (2) YOU SHALL ASSUME ALL RISKS RELATED TO THE USE OF NFTs SERVICES AND TRANSACTIONS OF DIGITAL CURRENCIES AND THEIR DERIVATIVES; AND (3) NFTs SHALL NOT BE LIABLE FOR ANY SUCH RISKS OR ADVERSE OUTCOMES.</b>
        </p>
    </div>
  )
}

export default TermsAndCondition;