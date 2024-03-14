// sliderCom.js.js
import React from "react";
import Slider from "./Slider";
//import "../css/Header.css"
//import img1 from 'C:\Users\Dlc\Documents\letseat-app-master\src\Images\pic1.jpg';
function SliderCom() {
  const Images = [
    { url: "https://images-eu.ssl-images-amazon.com/images/G/31/saba/branddays/5300---Kitchen---Citi-bank-strip._CB580044345_.png" },
    { url: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Baby/cnnjpp1/Baby/Homepage_DesktopHeroTemplate_3000x1200_1._CB580021402_.jpg" },
    { url: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/GW-Hero-PC_BBAug23_Soft-toys_with-Apay_Lifestyle_2x._CB597740150_.jpg "},
    
  ];
  const SliderContainer = {
    width: "1350px",
    height: "500px",
    // margin: "0 auto",
  };
  return (
    <div>
      <div>
        <div className="SliderContainer" style={SliderContainer}>
          <Slider img={Images} />
        </div>
      </div>
    </div>
  ); // Return the component to be shown here</div>);
}

export default SliderCom;