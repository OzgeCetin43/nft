import React from "react";
import "./TimedAuction.css";

const TimedAuction = () => {
  return (
    <div className="timed-auction-container">
        <h3>Minimum Bid</h3>
        <input type="text" placeholder="Enter minimum bid (ETH)" className="timed-auction-input"/>
        <div className="date-container">
            <div className="date-inner-container">
                <h3>Starting Date</h3>
                <input type="date" className="date-input"/>
            </div>
            <div className="date-inner-container">
                <h3>Expiration Date</h3>
                <input type="date" className="date-input"/>
            </div>
        </div>
    </div>
  )
}

export default TimedAuction;