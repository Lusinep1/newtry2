// src/pages/LoyaltyBoxStart.jsx
import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import HeroSection from "../components/HeroSection";
import HeaderSection from "../components/HeaderSection";
import LoyaltyBoxCard from "../components/LoyaltyBoxCard";
import ExplanationCard from "../components/ExplanationCard";
import FAQs from "../components/FAQs";

function LoyaltyBoxStart() {
  const boxOptions = [
    {
      size: "Small",
      price: "1,395",
      people: "1-2",
      weight: "3-5",
      description: "For the smaller household or you who eat meat less often.",
    },
    {
      size: "Between",
      price: "1,695",
      people: "3-4",
      weight: "6-8",
      description:
        "The bestseller! A box with just enough meat for everyday and parties.",
    },
    {
      size: "Great",
      price: "1,995",
      people: "4-8",
      weight: "8-10",
      description: "Our most affordable box! Lots of meat for the big family.",
    },
  ];

  return (
    <div>
      <Breadcrumb />
      <HeroSection
        imageUrl={"/images/loyaltymeat.jpg"}
        title="The regular customer box"
        subtitle="Such incredibly good meat, a real gem in the Swedish grocery store!"
        quote="Such incredibly good meat, a real gem in the Swedish grocery store!"
        author="Jesper B. Regular customer since 2022"
      />
      <HeaderSection currentStep={1} />
      <div style={styles.container}>
        <h1 style={styles.heading}>Choose Your Loyalty Box</h1>
        <div style={styles.cardsContainer}>
          {boxOptions.map((box, index) => (
            <LoyaltyBoxCard
              key={index}
              size={box.size}
              price={box.price}
              people={box.people}
              weight={box.weight}
              description={box.description}
            />
          ))}
        </div>
        <ExplanationCard />
        <FAQs />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  heading: {
    fontSize: "36px",
    marginBottom: "20px",
    textAlign: "center",
  },
  cardsContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "40px",
  },
};

export default LoyaltyBoxStart;
