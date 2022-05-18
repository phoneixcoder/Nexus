import React from 'react'
import './Herocard.css'
import PropTypes from 'prop-types';

const Herocard = (props) => {
  return (
    <>
        <div className="herocard-parent">
            <img src={props.src} alt="" className="herocard-img" />
            <p className="herocard-text">{props.text}</p>
        </div>
    </>
  )
}
export default Herocard

Herocard.prototype= {
    src: PropTypes.string.isRequired, 
    text: PropTypes.string.isRequired 
};
