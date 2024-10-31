import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Excursions from "../../components/Excursions/Excursions";
import Contacts from "../../components/Contacts/Contacts";

const ExcursionsPage = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Excursions />
      </main>
      <Footer />
    </>
  );
};

export default ExcursionsPage;
