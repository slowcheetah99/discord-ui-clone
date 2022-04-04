import React from "react";
import Hero from "./Header/Hero";
import Nav from "./Header/Nav";
import "../styles/HeaderStyles.css";

const Header = () => {
  return (
    <div className="header-wrapper">
      <Nav />
      <Hero />
    </div>
  );
};

export default Header;
