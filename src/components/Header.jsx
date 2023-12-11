import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

import IsMobile from "../components/isMobile/isMobile";
import MobileNavigation from "./MobileNavigation";

const Header = () => {
  const isMobile = IsMobile();
  return (
    <>
      <header className="header">
        <div className="header__content">
          <div className="header__content__logo">
            <Link to="/">Vilhelm Gustavsson</Link>
          </div>

          <div className="header__content__nav">
            <div className="header__content__nav__links">
              <a href="#about-me">About me</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
            </div>
          </div>

          <div className="header__content__socials">
            <a href="https://github.com/villegust">
              <FaGithub color="white" size={32} />
            </a>
            <a href="https://www.linkedin.com/in/vilhelm-gustavsson-a90b77236/">
              <FaLinkedin color="white" size={32} />
            </a>
          </div>
        </div>
      </header>
      {isMobile ? <MobileNavigation /> : ""}
    </>
  );
};

export default Header;
