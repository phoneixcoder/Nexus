import React from 'react'
import "./footer.css"
import Icons from '../icons'
const Footer = () => {
    return (
        <>
            <div className="main-container-footer">
                <div className="about-us common-set">
                    <h2 className="footer-heading">About us</h2>
                    <a href="/#/#" className="about-us--text footer-anchor">Lorem ipsum dolor sit amet consectetur<br/> adipisicing elit. Corporis debitis aspernatur ad rerum cum dolor.</a>
                </div>
                <div className="services common-set">
                    <h2 className="footer-heading">Services</h2>
                    <a href="/#" className="services-text footer-anchor">Learn to invest.</a>
                    <a href="/#" className="services-text footer-anchor">Cources</a>
                    <a href="/#" className="services-text footer-anchor">Upcoming Events</a>
                    <a href="/#" className="services-text footer-anchor">Help</a>
                </div>
                <div className="connect-with-us common-set">
                    <h2 className="footer-heading">Connect with us</h2>
                    <a href="/#" className="connect-with-us-text footer-anchor"><Icons className="fab fa-instagram" />Instagram</a>
                    <a href="/#" className="connect-with-us-text footer-anchor"><Icons className="fab fa-facebook" />Facebook</a>
                    <a href="/#" className="connect-with-us-text footer-anchor"><Icons className="fab fa-linkedin" />LinkedIn</a>
                    <a href="/#" className="connect-with-us-text footer-anchor"><Icons className="fab fa-twitter" />Twitter</a>
                </div>
                <div className="contact-us common-set">
                    <h2 className="footer-heading">Contact us</h2>
                </div>
            </div>
        </>
    )
}

export default Footer;
