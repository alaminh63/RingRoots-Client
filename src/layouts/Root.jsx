import Navbar from "@/components/shared/Navbar/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";
import backgroundImage from "../../public/backgroundCustomImage.jpg";
import Footer from "@/components/shared/Footer";
const Root = () => {
  return (
    <div
      className=" bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
