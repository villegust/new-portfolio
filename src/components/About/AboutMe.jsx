import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { LiaCertificateSolid } from "react-icons/lia";
import { FaArrowLeft } from "react-icons/fa";

import Popup from "./Popup";
import Profile from "../../images/profile/profile2.jpg";

const AboutMe = ({ setFadeOut }) => {
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
            Engineer from Sweden. During my past years in school I primarly
            worked on project using programming languages such as python, html,
            css and javascript. I also finished studying a fourth year of high
            school at NTI where I got to work on projects in groups using Scrum.
          </p>
        </div>
      </div>
      <div className="certificate">
        <p>My certificate:</p>
        <LiaCertificateSolid
          size={36}
          className="cert"
          onClick={handleOpenPopup}
        />

        {isPopupOpen && <Popup onClose={handleClosePopup} />}
      </div>
    </>
  );
};

export default AboutMe;
