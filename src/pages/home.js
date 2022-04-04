import React, { Fragment } from "react";
import Header from "../components/Header";
import Features from "../components/Features";
import Tagline from "../components/Tagline";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Features />
      <Tagline />
      <Footer />
    </Fragment>
  );
};

export default Home;
