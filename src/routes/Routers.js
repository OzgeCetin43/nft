import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Contact from "../pages/Contact";
import CreateNft from "../pages/CreateNft"; 
import DetailNft from "../pages/DetailNft";
import EditProfile from "../pages/EditProfile";
import Home from "../pages/Home";
import Market from "../pages/Market";
import Profile from "../pages/Profile";
import Wallet from "../pages/Wallet";

const Routers = () => {
  return (
    <Routes>
        <Route path="/nft/" element={<Navigate to="/nft/home"/>}/>
        <Route path="/nft/home" element={<Home/>}/>
        <Route path="/nft/createNft" element={<CreateNft/>}/>
        <Route path="/nft/market" element={<Market/>}/>
        <Route path="/nft/market/:id" element={<DetailNft/>}/>
        <Route path="/nft/profile" element={<Profile/>}/>
        <Route path="/nft/editProfile" element={<EditProfile/>}/>
        <Route path="/nft/wallet" element={<Wallet/>}/>
        <Route path="/nft/contact" element={<Contact/>}/>
    </Routes>
  )
}

export default Routers;