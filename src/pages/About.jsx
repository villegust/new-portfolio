import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { LiaCertificateSolid } from "react-icons/lia";
import { FaArrowLeft } from "react-icons/fa";

import Particles from "../Particles";
import Profile from "../images/profile/profile.jpg";
import Popup from "../components/Popup";

const About = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const navigate = useNavigate();

  // animates page on page chage
  const handleBack = () => {
    setFadeOut(true);
    setTimeout(() => {
      navigate("/");
    }, 500); // Wait for the fade-out animation to complete
  };

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  // if popup is open sets overflow
  useEffect(() => {
    if (isPopupOpen === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isPopupOpen]);
  return (
    <>
      <Particles />
      <main className={`aboutme-page ${fadeOut ? "fade-out" : "fade-in"}`}>
        <div className="about-container">
          <div className="about-container__title">
            <div className="back-arrow" onClick={handleBack}>
              <FaArrowLeft size={30} />
            </div>
            <h1>About me</h1>
          </div>

          <div className="about-container__text">
            <div className="about-container__text__profile-img">
              <img src={Profile} alt="Profile" />
            </div>
            <div className="about-container__text__about">
              <p>
                My name is Vilhelm Gustavsson and I am a High School Software
                Engineer from Sweden. During my passed years in school I
                primarly worked on project using programming languages such as
                python, html, css and javascript. I have also finished studying
                a fourth year of high school at NTI where I got to work on
                projects in groups using Scrum.
              </p>
            </div>
          </div>

          <LiaCertificateSolid
            size={36}
            className="cert"
            onClick={handleOpenPopup}
          />

          {isPopupOpen && <Popup onClose={handleClosePopup} />}
          <div className="about-container__education">
            <div className="about-container__education__title">
              <h1>Education</h1>
            </div>

            <div className="about-container__education__program">
              <div className="about-container__education__program__box">
                <h1>NTI Gymnasiet Uppsala</h1>
                <p>
                  High School Software Engineer •{" "}
                  <span>Aug 2022 - Jun 2023</span>
                </p>
                <a href="https://www.ntigymnasiet.se/program/mjukvarudesign/uppsala/">
                  Link to program
                </a>
              </div>

              <div className="about-container__education__program__box">
                <h1>NTI Gymnasiet Uppsala</h1>
                <p>
                  High School Infromation Technology Program •{" "}
                  <span>Aug 2019 - Jun 2022</span>
                </p>
                <a href="https://ntigymnasiet.se/uppsala/program/teknikprogrammet/informations-och-medieteknik/">
                  Link to program
                </a>
              </div>
            </div>
          </div>

          <div className="about-container__work">
            <div className="about-container__work__title">
              <h1>Work</h1>
            </div>

            <div className="about-container__work__container">
              <div className="about-container__work__container__box">
                <h1>STUNS</h1>
                <p>
                  Developer • <span>Feb 2023 - Apr 2023</span>
                </p>
                <h4>Internship for my education</h4>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
