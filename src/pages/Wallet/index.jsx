import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { CONNECT_WALLET } from "../../assets/data/connectWallet";
import {WALLET_DATA} from "../../assets/data/wallet";
import Investors from "../../components/Investors";
import "./Wallet.css";

const Wallet = () => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  return (
    <div className='wallet-container'>
      <div>
        <div className='credit-card'>
          <Cards
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focus}
          />
        </div>  
        <form>
          <input
            type='tel'
            name='number'
            placeholder='Card Number'
            value={number}
            onChange={e => setNumber(e.target.value)}
            onFocus={e => setFocus(e.target.name)}
          />
          <input
            type='text'
            name='name'
            placeholder='Name'
            value={name}
            onChange={e => setName(e.target.value)}
            onFocus={e => setFocus(e.target.name)}
          />
          <input
            type='text'
            name='expiry'
            placeholder='MM/YY Expiry'
            value={expiry}
            onChange={e => setExpiry(e.target.value)}
            onFocus={e => setFocus(e.target.name)}
          />
          <input
            type='tel'
            name='cvc'
            placeholder='CVC'
            value={cvc}
            onChange={e => setCvc(e.target.value)}
            onFocus={e => setFocus(e.target.name)}
          />
          <button>Connect Wallet</button>
        </form>
      </div>
      <div className="create-sell-container">
       <p className="create-sell-subtitle">Create and Sell</p>
       <h1 className="create-sell-title">Create and Sell Your Own NFTs</h1>
       <div className="create-sell-inner-container">
         {
           CONNECT_WALLET.map(item => {
             return (
               <div className="create-sell-item">
                 <img src={item.icon} alt="NFT, marketplace, Ethereum" className="icon" />
                 <h1 className="create-sell-item-title">{item.title}</h1>
                 <p className="create-sell-item-description">{item.description}</p>
               </div>
             )
           })
         }
       </div>
      </div>
      <div className='wallet-items'>
        {
          WALLET_DATA.map(data => {
            return (
              <div className="wallet-item" key={data.id}>
                <img src={data.image} alt="wallet, coin, ethereum, nft, marketplace"/> 
                <h3 className="title">{data.name}</h3>
                <p className="description">{data.description}</p>
              </div>
            )
          })
        }
      </div>
      <Investors/>
    </div>
  )
}

export default Wallet;