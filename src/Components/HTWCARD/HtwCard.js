import React from "react";
import "./HtwCard.css";
import PropTypes from 'prop-types'

const HtwCard = (props) => {
  return (
    <>
      <div className="htw-parent">
        <img src={props.src} alt="" className="htw-img" />
        <h3 className="htw-head">{props.heading}</h3>
        <p className="htw-text">{props.text}</p>
      </div>
    </>
  );
};

export default HtwCard;

HtwCard.prototype= {
    src: PropTypes.string.isRequired, 
    heading: PropTypes.string.isRequired, 
    text: PropTypes.string.isRequired 
};