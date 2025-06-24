import { useState } from "react";
import "./App.css";
import HeroPage from "./HeroPage.jsx";
import WorkManagement from "./WorkManagemnt.jsx";
import Extension from "./Extension.jsx";
import Customise from "./Customise.jsx";
import Pricing from "./Pricing.jsx";
import DataSponsor from "./DataSponsor.jsx";
import Applications from "./Applications.jsx";
import FreeTrial from "./FreeTrial.jsx";
import Testimonial from "./Testimonial.jsx";
import NavBar from "./Mobileviews/MobileHero.jsx";

function App() {
  return (
    <>
      <HeroPage />
      <WorkManagement />
      <Extension></Extension>
      <Customise></Customise>
      <Pricing></Pricing>
      <DataSponsor></DataSponsor>
      <Applications></Applications>
      <FreeTrial></FreeTrial>
      <Testimonial></Testimonial>
    </>
  );
}

export default App;
