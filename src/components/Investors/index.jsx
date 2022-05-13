import React from "react";
import investor1 from "../../assets/images/investor1.png";
import investor2 from "../../assets/images/investor2.png";
import investor3 from "../../assets/images/investor3.png";
import investor4 from "../../assets/images/investor4.png";
import investor5 from "../../assets/images/investor5.png";
import investor6 from "../../assets/images/investor6.png";
import "./Investors.css";

const Investors = () => {
  return (
    <div className="investors-container">
        <h1 className="investors-title">Our Partners & Investors</h1>
        <div className="investors">
            <img src={investor1} alt="nft, ethereum, marketplace" className="investor"/>
            <img src={investor2} alt="nft, ethereum, marketplace" className="investor"/>
            <img src={investor3} alt="nft, ethereum, marketplace" className="investor"/>
            <img src={investor4} alt="nft, ethereum, marketplace" className="investor"/>
            <img src={investor5} alt="nft, ethereum, marketplace" className="investor"/>
            <img src={investor6} alt="nft, ethereum, marketplace" className="investor"/>
        </div>
    </div>
  )
}

export default Investors;