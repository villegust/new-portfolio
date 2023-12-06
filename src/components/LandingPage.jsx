import React from "react";
import { useNavigate } from "react-router-dom";

import Particles from "../Particles";
import Video from "../images/video/blackhole.webm";

const LandingPage = ({ setFadeOut }) => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    setFadeOut(true);
    setTimeout(() => {
      navigate("/about");
    }, 500); // Wait for the fade-out animation to complete
  };
  return (
    <div id="about-me" className="container__content">
      <div className="overlay">
        <Particles />
      </div>
      <video className="container__content__video" autoPlay loop muted>
        <source src={Video} type="video/webm" />
      </video>

      <div className="container__content__about-me">
        <div className="container__content__about-me__1">
          <div className="container__content__about-me__1__title">
            <h1>
              Providing <span>the best</span> project exprience
            </h1>
          </div>

          <div className="container__content__about-me__1__about">
            <p>
              I'm a Frontend Developer with experience in different technologies
              such as NextJS, NodeJS, ReactJS and more. Check out my{" "}
              <a href="#projects">projects</a> and <a href="#skills">skills</a>.
            </p>
            <div className="learn-more">
              <button onClick={handleLearnMore}>Learn more about me</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
