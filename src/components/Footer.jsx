import React from "react";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-text">
          <h1>Get in Touch</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            unde minus cupiditate porro deleniti consequatur quia dolore,
            consectetur quaerat dolores sit, et inventore aspernatur at,
            reiciendis assumenda eligendi corrupti nulla.
          </p>

          <div className="footer-text__socials">
            <FaLinkedin size={30} />
            <FaInstagram size={30} />
            <FaTwitter size={30} />
          </div>
        </div>
        <div className="footer-contact">
          <a href="mailto:ville.gust@gmail.com" className="btn-glitch-fill">
            <span className="btn-glitch-fill__text">
              <MdMailOutline size={20} />
              Mail me
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
