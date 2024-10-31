import React from "react";
import "./Contacts.css";
import ContactForm from "../ContactForm/ContactForm";

const Contacts = () => {
  return (
    <section className="contacts" id="contacts__id">
      <h3 className="contacts__title">Contact us</h3>
      <ContactForm />
    </section>
  );
};

export default Contacts;
