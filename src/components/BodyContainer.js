//This Compoenent Contains All The Parts Such as ImageSlider,Top Foods,Top Kitchens,ContactUs,Footer.
//Why this?
//Beacasue Of routing.

import React from "react";
import SliderCom from "./SliderCom";
import VEG from "./VEG";
import KitchenContainer from "./KitchenContainer";
import { kitchens } from "../utils/mockData";
import Contact from "./Contact";
const BodyContainer = () => {
  const kitchensToshow=7;
  return <div>
    <SliderCom/>
    <VEG/>
    <KitchenContainer 
    kitchens={kitchens}
    kitchensToshow={kitchensToshow}/>
    <Contact/>
  </div>;
};

export default BodyContainer;
