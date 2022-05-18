import React from "react";
import "./Home.css";
import Herocard from "../../Components/HeroCard/Herocard";
import data from "./heroCard.json";
import NavBar from "../../Components/Navbar/NavBar";

import Slide from "../../Components/carousel";
const Home = () => {
  return (
    <>
      <NavBar />
      <div className="hero-section">
        <div className="hero-info">
          <div className="hero-info-heading">
            <h1 className="hero-info-heading-text">
              Here we are with next <br/> Generation Features
            </h1>
          </div>
          <div className="hero-info-card">
            <Herocard src={data[0].src} text={data[0].text}/>
            <Herocard src={data[1].src} text={data[1].text}/>
            <Herocard src={data[2].src} text={data[2].text}/>
          </div>
        </div>
        <div className="hero-gif">
          <img src="./Resources/herogif.gif" alt="" className="hero-gif-img"/>
        </div>
      </div>
      <div className="carousel-menu">
        <Slide/>
      </div>
    </>
  );
};

export default Home;
