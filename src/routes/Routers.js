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
        <Route path="/nft/" element={<Navigate to="/home"/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/createNft" element={<CreateNft/>}/>
        <Route path="/market" element={<Market/>}/>
        <Route path="/market/:id" element={<DetailNft/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/editProfile" element={<EditProfile/>}/>
        <Route path="/wallet" element={<Wallet/>}/>
        <Route path="/contact" element={<Contact/>}/>
    </Routes>
  )
}

export default Routers;