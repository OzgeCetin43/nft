import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
        <div className="logo-container">
            <i className="ri-bubble-chart-fill logo"></i>
            <span className="brand">NFTs</span>
        </div>
        <nav className="navigation">
            <ul className="navigation-links">
                <li className="navigation-link">
                    <NavLink to="/home" className={navClass => navClass.isActive ? "link active" : "link"}>Home</NavLink>
                </li>
                <li className="navigation-link">
                    <NavLink to="/market" className={navClass => navClass.isActive ? "link active" : "link"}>Market</NavLink>
                </li>
                <li className="navigation-link">
                    <NavLink to="/createNft" className={navClass => navClass.isActive ? "link active" : "link"}>Create Nft</NavLink>
                </li>
                <li className="navigation-link">
                    <NavLink to="/contact" className={navClass => navClass.isActive ? "link active" : "link"}>Contact</NavLink>
                </li>
            </ul>
        </nav>
        <div className="button-link">
            <NavLink to="/wallet" className="btn-link"><i class="ri-wallet-line wallet-icon"></i>Connect Wallet</NavLink>
        </div>
    </header>
  )
}

export default Header;