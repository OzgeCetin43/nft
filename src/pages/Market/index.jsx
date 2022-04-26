import React, {useState} from "react";
import "./Market.css";
import hero from "../../assets/images/market-hero.png";
import eth from "../../assets/images/eth.png";
import { Link } from "react-router-dom";
import {NFT_DATA} from "../../assets/data/data";
import BidModal from "../../components/Modals/BidModal";
import image1 from "../../assets/images/coming-soon-1.jpg";
import image2 from "../../assets/images/coming-soon-2.jpg";
import image3 from "../../assets/images/coming-soon-3.jpg";
import image4 from "../../assets/images/coming-soon-4.jpg";
import image5 from "../../assets/images/coming-soon-5.jpg";
import image6 from "../../assets/images/coming-soon-6.jpg";
import image7 from "../../assets/images/coming-soon-7.jpg";
import image8 from "../../assets/images/coming-soon-8.jpg";
import image9 from "../../assets/images/coming-soon-9.jpg";
import image10 from "../../assets/images/coming-soon-10.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";

const Market = (props) => {
  const [filterAreaShowable, setFilterAreaShowable] = useState(false);
  const [bidModalIsShowable, setBidModalIsShowable] = useState(false);
  const [filteredData, setFilteredData] = useState(NFT_DATA);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const sortHandler = (event) => {
    let filteredValues = NFT_DATA.filter(item => item.level === event.target.value);
    setFilteredData(filteredValues);
  }

  const categoryHandler = (event) => {
    let filteredValues = NFT_DATA.filter(item => item.name.toLowerCase().includes(event.target.value));
    setFilteredData(filteredValues);
  }

  const itemsHandler = (event) => {
    let filteredValues = NFT_DATA.filter(item => item.bundleOrSingle ===  event.target.value);
    setFilteredData(filteredValues);
  }

  return (
    <>
      <div className="market-hero-container">
        <div className="left">
          <small className="subtitle">Largest NFT marketplace on the world!</small>
          <h1 className="title">NFT Marketplace</h1>
          <p className="description">Explore on the world's best & largest NFT marketplace with our beautiful NFT products. We want to be a part of your smile, success and future growth.</p>
          <p className="description">Do you want to create your own NFTs?</p>
          <Link to="/nft/createNft" className="create-btn">Create</Link>
          <div className="about">
            <div className="about-inner">
              <p className="about-title">28K+</p>
              <p className="about-description">Artwork</p>
            </div>
            <div className="about-inner">
              <p className="about-title">18K+</p>
              <p className="about-description">Auction</p>
            </div>
            <div className="about-inner">
              <p className="about-title">8K+</p>
              <p className="about-description">Artist</p>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={hero} alt="nft, marketplace, ethereum" className="hero" />
        </div>
      </div>
      <div className="marketplace">
        <div className="filter-area">
          <h1 className="title">Explore Products</h1>
          <button className="filter-btn" onClick={() => setFilterAreaShowable(!filterAreaShowable)}>Filter {filterAreaShowable ? <i class="ri-close-fill"></i> : <i class="ri-filter-fill"></i>}</button>
        </div>
        {
          filterAreaShowable && <div className="filters">
            <select className="filter" onChange={categoryHandler}>
              <option>All Categories</option>
              <option value="dog">Dog</option>
              <option value="lion">Lion</option>
              <option value="monkey">Monkey</option>
              <option value="tiger">Tiger</option>
            </select>
            <select className="filter" onChange={itemsHandler}>
              <option>All Items</option>
              <option value="single-item">Single Item</option>
              <option value="bundle">Bundle</option>
            </select>
            <select className="filter" onChange={sortHandler}>
              <option>Sort by</option>
              <option value="high-rate">High Rate</option>
              <option value="mid-rate">Mid Rate</option>
              <option value="low-rate">Low Rate</option>
            </select>
          </div>
        }
        <div className="products">
          {
            filteredData.map(data => {
              return (
                <div key={data.id} className="product-item">
                  <div className={data.image}/>
                  <Link to={"/nft/market/" + data.id} className="title">{data.name}</Link>
                  <div className="info">
                    <div className="creator">
                      <img src={data.creatorImage} alt="nft, ethereum, marketplace" className="creator-image"/>
                      <div className="creator-inner">
                        <small className="subtitle">Owned by</small>
                        <p className="name">{data.creator}</p>
                      </div>
                    </div>
                    <div className="bid">
                      <div className="creator-inner">
                        <small className="subtitle">Current Bid</small>
                        <p className="price">10 ETH</p>
                      </div>
                    </div>
                    <img src={eth} alt="nft, marketplace, ethereum" className="eth"/>
                  </div>
                  <button className="bid-btn" onClick={() => setBidModalIsShowable(true)}>Place a Bid</button>
                </div>
              )
            })
          }
        </div>
        <div className="coming-soon-container">
          <h1 className="coming-soon-title">Coming Soon</h1>
          <p className="coming-soon-description">Our valuable and special NFTs created by our creators for you will be with you very soon. Please stand by.</p>
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <img src={image1} alt="nft, ethereum, marketplace"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={image2} alt="nft, ethereum, marketplace"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={image3} alt="nft, ethereum, marketplace"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={image4} alt="nft, ethereum, marketplace"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={image5} alt="nft, ethereum, marketplace"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={image6} alt="nft, ethereum, marketplace"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={image7} alt="nft, ethereum, marketplace"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={image8} alt="nft, ethereum, marketplace"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={image9} alt="nft, ethereum, marketplace"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={image10} alt="nft, ethereum, marketplace"/>
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={image1} alt="nft, ethereum, marketplace"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={image2} alt="nft, ethereum, marketplace"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={image3} alt="nft, ethereum, marketplace"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={image4} alt="nft, ethereum, marketplace"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={image5} alt="nft, ethereum, marketplace"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={image6} alt="nft, ethereum, marketplace"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={image7} alt="nft, ethereum, marketplace"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={image8} alt="nft, ethereum, marketplace"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={image9} alt="nft, ethereum, marketplace"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={image10} alt="nft, ethereum, marketplace"/>
            </SwiperSlide>
          </Swiper>
        </div>
        {
          bidModalIsShowable && <BidModal setBidIsActive={setBidModalIsShowable}/>
        }
       </div>
    </>
  )
}

export default Market;