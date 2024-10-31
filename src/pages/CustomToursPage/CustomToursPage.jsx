import React from "react";
import Header from "../../components/Header/Header";
import Contacts from "../../components/Contacts/Contacts";
import Footer from "../../components/Footer/Footer";

const CustomToursPage = () => {
  return (
    <>
      <Header />
      <main className="main">
        <h3 className="custom__title">Custom Tours</h3>
        <p className="custom__description">
          Discover Japan on your terms with our Custom Tours. Whether you're a
          first-time visitor looking for a personalized adventure or a seasoned
          traveler who's already explored the classic sights, we’re here to
          craft a unique experience tailored to your interests. From hidden gems
          to cultural deep dives, let us design a journey that reflects your
          individual preferences and passions. Reach out to us, and together
          we’ll create the perfect itinerary just for you
        </p>
      </main>
      <Footer />
    </>
  );
};

export default CustomToursPage;
