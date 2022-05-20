import React from "react";
import "./Home.css";
import Herocard from "../../Components/HeroCard/Herocard";
import data from "./heroCard.json";
import NavBar from "../../Components/Navbar/NavBar";
import specialities from "./spacCard.json";
import Slide from "../../Components/carousel";
import SpacialityCard from "../../Components/SpecialityCard/SpacialityCard";
import HtwCard from "../../Components/HTWCARD/HtwCard";
const Home = () => {
  return (
    <>
      <NavBar />
      <div className="hero-section">
        <div className="hero-info">
          <div className="hero-info-heading">
            <h1 className="hero-info-heading-text">
              Here we are with next <br /> Generation Features
            </h1>
          </div>
          <div className="hero-info-card">
            <Herocard src={data[0].src} text={data[0].text} />
            <Herocard src={data[1].src} text={data[1].text} />
            <Herocard src={data[2].src} text={data[2].text} />
          </div>
        </div>
        <div className="hero-gif">
          <img src="./Resources/herogif.gif" alt="" className="hero-gif-img" />
        </div>
      </div>
      <div className="carousel-menu">
        <Slide />
      </div>

      <div className="specialities-section">
        <h2 className="spec-section-heading">Our Specialities</h2>

        <div className="spec-card-section">
          <SpacialityCard
            src={specialities[0].src}
            heading={specialities[0].heading}
            text={specialities[0].text}
          />
          <SpacialityCard
            src={specialities[1].src}
            heading={specialities[1].heading}
            text={specialities[1].text}
          />
          <SpacialityCard
            src={specialities[2].src}
            heading={specialities[2].heading}
            text={specialities[2].text}
          />
        </div>
      </div>

      <div className="bring-head">
        <h1 className="bring-head-text">
          "Bringing to you future of Attendance."
        </h1>
      </div>

      <div className="htw-section">
        <div className="htw-section-head">
          <h1 className="htw-secting-head--text">How it Works ?</h1>
        </div>
        <div className="htw-section-hrline"></div>
      
        <div className="htw-section-cards">
          <div className="htw-section-point">
            <div className="htw-section-circle"><p className="htw-section-circle-num">1.</p></div>
            <HtwCard />
          </div>
          <div className="htw-section-point">
            <div className="htw-section-circle"><p className="htw-section-circle-num">2.</p></div>
            <HtwCard />
          </div>
          <div className="htw-section-point">
            <div className="htw-section-circle"><p className="htw-section-circle-num">3.</p></div>
            <HtwCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
