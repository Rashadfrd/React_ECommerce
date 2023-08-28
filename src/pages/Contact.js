import React from "react";
import PageHero from "../components/PageHero";
import ContactForm from "../components/ContactForm";
import FAQ from "../components/FAQ";

const Contact = () => {
  return (
    <>
      <PageHero title='Contact' />
      <ContactForm />
      <FAQ />
    </>
  );
};

export default Contact;
