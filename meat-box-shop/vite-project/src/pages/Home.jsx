// src/pages/Home.jsx
import React from "react";
import ZipCodeChecker from "../components/ZipCodeChecker";
import Banner from "../components/Banner";
import FeaturesSection from "../components/FeaturesSection";
import Reviews from "../components/Reviews";
import CustomerBox from "../components/CustomerBox";

function Home() {
  return (
    <>
      <ZipCodeChecker />
      <div style={{ marginTop: "20px" }}>
        <Banner />
      </div>
      <div style={{ marginTop: "40px" }}>
        <FeaturesSection />
      </div>
      <div style={{ marginTop: "40px" }}>
        <Reviews />
      </div>
      <div style={{ marginTop: "40px" }}>
        <CustomerBox />
      </div>
    </>
  );
}

export default Home;
