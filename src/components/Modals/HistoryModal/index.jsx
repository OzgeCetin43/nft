import React from "react";
import "./HistoryModal.css";
import customer1 from "../../../assets/images/customer1.jpg"; 
import customer2 from "../../../assets/images/customer2.jpg";

const HistoryModal = (props) => {
    return(
        <div className="history-modal">
            <div className="history-modal-inner">
                <i class="ri-close-fill close" onClick={() => props.setHistoryIsActive(false)}></i>
                <h1 className="title">History</h1>
                <div className="bid-info">
                <img src={customer1} alt="nft, marketplace, ethereum" className="customer-image"/>
                <div className="customer-info">
                    <p className="description">Bid accepted by</p>   
                    <p className="name">Derek White</p>
                    <small className="date">17/04/2022, 17:28</small>           
                </div>
                <i class="ri-check-double-line check"></i>
                </div>
                <div className="bid-info">
                <img src={customer2} alt="nft, marketplace, ethereum" className="customer-image"/>
                <div className="customer-info">
                    <p className="description">Bid accepted by</p>   
                    <p className="name">Mary Adel</p>
                    <small className="date">17/04/2022, 17:30</small>           
                </div>
                <i class="ri-check-double-line check"></i>
                </div>
            </div>
        </div>
    );
}

export default HistoryModal;