import React from "react";
import { HomeNavImages } from "../Assets/Images/1_Home/Index";

const Home = () => {
  return (
    <div> 
      Home
      {HomeNavImages.map((navImage, index) => (
        <div key={index}>
          <img src={navImage.src} alt={navImage.alt} />
        </div>
      ))}
    </div>
  );
};

export default Home;
