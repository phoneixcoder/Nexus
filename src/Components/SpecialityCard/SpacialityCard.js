import React from "react";
import "./style.css";
import PropTypes from 'prop-types'

const SpacialityCard = (props) => {
  return (
    <>
      <div className="spac-parent">
        <img src={props.src} alt="" className="spac-img" />
        <h3 className="spac-head">{props.heading}</h3>
        <p className="spac-text">{props.text}</p>
      </div>
    </>
  );
};

export default SpacialityCard;

SpacialityCard.prototype= {
    src: PropTypes.string.isRequired, 
    heading: PropTypes.string.isRequired, 
    text: PropTypes.string.isRequired 
};