import React from "react";
import "./OrderCoffeeModal.css";
import coffee from "../../../assets/images/coffee.png";
import star from "../../../assets/images/star.png";

const OrderCoffeeModal= (props) => {
    return (
        <div className="order-coffee-modal">
            <div className="order-coffee-modal-inner">
            <i class="ri-close-fill close" onClick={() => props.setBidIsActive(false)}></i>
                <div className="order-left">
                    <img src={coffee} alt="coffee, nft, ethereum, marketplace"/>
                </div>
                <div className="order-right">
                    <img src={star} alt="nft, star, ethereum, marketplace" className="order-star"/>
                    <h1 className="thanks-title">Thanks for Support</h1>
                    <p className="thanks-description">You have made me very happy by supporting my work. You can buy my work that you like in order to be more supportive. Stay tuned for my new works.</p>
                    <input type="text" placeholder="Enter Quantity"/>
                    <button className="order-coffee-btn">Order Coffee</button>
                </div>
            </div>
        </div>
    );
}

export default OrderCoffeeModal;