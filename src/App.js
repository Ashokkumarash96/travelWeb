import React from "react";
import Hero from "./components/Hero.js";
import Navbar from "./components/Navbar.js";
import Offers from "./components/Offers.js";
import Plan from "./components/Plan.js";
import Rooms from "./components/Rooms.js";
import FoodSlide from "./components/FoodSlide.js";
import Footer from "./components/Footer.js";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Offers />
      <Plan />
      <Rooms />
      <FoodSlide />
      <Footer />
    </>
  );
};

export default App;
