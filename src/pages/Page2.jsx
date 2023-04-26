import React from "react";
import Navbar from "../componets/Page1/navbar/Navbar";
import Heading from "../componets/Page1/heading/Heading";
import Action from "../componets/Page1/actions/Action";
import Services from "../componets/Page1/services/Services";
import Footer from "../componets/Page1/footer/Footer";

const Page2 = () => {
  return (
    <div>
      <Navbar type="type" />
      <Heading />
      <Action />
      <Services />
      <Footer />
    </div>
  );
};

export default Page2;
