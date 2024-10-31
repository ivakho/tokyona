import React from "react";
import Header from "../../components/Header/Header";
import Excursion from "../../components/Excursion/Excursion";
import Contacts from "../../components/Contacts/Contacts";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import { EXCURSIONS_INFO } from "../../components/Excursions/Excursions";

const ExcursionPage = () => {
  const { id } = useParams();

  const excursion = EXCURSIONS_INFO.find((item) => item.id === id);

  if (!excursion) {
    return <p>Excursion not found</p>;
  }

  return (
    <>
      <Header />
      <main className="main">
        <Excursion
          fullImgs={excursion.fullImgs}
          title={excursion.title}
          fullDescription={excursion.fullDescription}
        />
      </main>
      <Footer />
    </>
  );
};

export default ExcursionPage;
