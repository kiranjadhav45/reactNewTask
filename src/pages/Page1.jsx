import React from "react";
import Navbar from "../componets/Page1/navbar/Navbar";
import Heading from "../componets/Page1/heading/Heading";
import Action from "../componets/Page1/actions/Action";
import Services from "../componets/Page1/services/Services";
import Footer from "../componets/Page1/footer/Footer";

const page1 = () => {
  return (
    <div>
      <Navbar />
      <Heading />
      <Action />
      <Services />
      <Footer />
    </div>
  );
};

export default page1;
