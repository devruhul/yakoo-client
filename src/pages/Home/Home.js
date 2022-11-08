import React from "react";
import Banner from "./Banner/Banner";
import Bicycles from "./Bicycles/Bicycles";
import Contact from "./Contact/Contact";
import NewsLetter from "./Newsletter/NewsLetter";
import Reviews from "./Reviews/Reviews";
import Statictics from "./Statistics/Statictics";

const Home = () => {
  return (
    // Show all the home components here
    <div>
      <Banner />
      <Bicycles />
      <Reviews />
      <Statictics />
      <NewsLetter />
      <Contact />
    </div>
  );
};

export default Home;
