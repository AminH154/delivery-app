import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="logo" src={assets.logo1} alt="" />
          <p>
            Lorem Ipsum is simply summy text of the printing and typesetting
            industry.Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s ,when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </p>
          <div className="footer-social-icons">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={assets.facebook_icon} alt="" />
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
              <img src={assets.twitter_icon} alt="" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={assets.linkedin_icon} alt="" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home </li>
            <li>About us</li>
            <li>Delivery </li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+216-29-002-853</li>
            <li>+216-97-93-45-45</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="fotter-copyright ">
        Copyright 2025 © Tomato.com -All right Reserved.{" "}
      </p>
    </div>
  );
}

export default Footer;
