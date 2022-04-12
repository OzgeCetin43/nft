import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Routers from "../../routes/Routers";

const Layout = (props) => {
  return (
    <div>
        <Header/>
        <Routers/>
        <Footer/>
    </div>
  )
}

export default Layout;