import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__row">
        <div className="footer__col">
          <h4>Get to Know Us</h4>
          <p>Careers</p>
          <p>Blog</p>
          <p>About Amazon</p>
          <p>Amazon Devices</p>
        </div>
        <div className="footer__col">
          <h4>Make Money with Us</h4>
          <p>Sell on Amazon</p>
          <p>Sell on Amazon Business</p>
          <p>Become an affiliate</p>
        </div>
        <div className="footer__col">
          <h4>Amazon Payment Products</h4>
          <p>Amazon business cards</p>
          <p>Play with amazon</p>
          <p>Amazon currency converter</p>
        </div>
        <div className="footer__col">
          <h4>Let Us Help You</h4>
          <p>Amazon and COVID-19</p>
          <p>Your Account</p>
          <p>Your Orders</p>
        </div>
      </div>
      <div className="footer_container">
        <img
          className="footer__logo"
          alt=""
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
        <p>Build with love by Ahmed Imdad @2020</p>
      </div>
    </div>
  );
}

export default Footer;
