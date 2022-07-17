import React, {useState} from "react";
import { Link } from "react-router-dom";
import profile from "../../assets/images/creator2.jpg";
import lion1 from "../../assets/images/lion1.png";
import lion2 from "../../assets/images/lion2.png";
import dog1 from "../../assets/images/dog1.png";
import dog2 from "../../assets/images/dog2.png";
import "./Profile.css";
import OrderCoffeeModal from "../../components/Modals/OrderCoffeeModal";
import Investors from "../../components/Investors";

const Profile = (props) => {
  const [orderCoffeeModalIsActive, setOrderCoffeeModalIsActive] = useState(false);

  return (
    <div className="container">
      <div className="profile-top"/>
      <div className="profile">
        <img src={profile} alt="nft, marketplace, ethereum"/>
      </div>
      <div className="profile-info">
        <div className="profile-name">
          <p>Tom Adams</p>
          <i class="ri-twitter-fill"></i><span>tomadams10</span>
        </div>
        <div className="profile-follow">
          <div className="profile-follow-item">
            <b>200k</b><span>Followers</span>
          </div>
          <div className="profile-follow-item">
            <b>92k</b><span>Following</span>
          </div>
        </div>
      </div>
      <div className="actions">
        <Link to="#" className="btn">
          <i class="ri-user-follow-line"></i><span>Follow</span>
        </Link>
        <Link  to="#" className="btn">
          <i class="ri-stackshare-line"></i>
        </Link>
        <Link to="#" className="btn">
          <i class="ri-more-fill"></i>
        </Link>
        <Link to="/nft/editProfile" className="btn">
          <i class="ri-edit-2-fill"></i>
        </Link>
      </div>
      <div className="works">
        <h1>Works</h1>
        <div className="work-item">
          <img src={lion1} alt="nft, marketplace, ethereum" />
          <img src={dog1} alt="nft, marketplace, ethereum" />
          <img src={lion2} alt="nft, marketplace, ethereum" />
          <img src={dog2} alt="nft, marketplace, ethereum" />
        </div>
      </div>
      <button className="order-btn" onClick={() => setOrderCoffeeModalIsActive(true)}><i class="ri-cup-fill"></i>Order Coffee</button>
      {
        orderCoffeeModalIsActive && <OrderCoffeeModal setOrderCoffeeIsActive={setOrderCoffeeModalIsActive}/>
      }
      <Investors/>
    </div>
  )
}

export default Profile;