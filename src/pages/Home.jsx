import React from "react";
import Space from "../Particles";
import Header from "../components/Header";
import Video from "../images/video/blackhole.webm";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div id="about-me" className="container__content">
            <div className="overlay">
              <Space />
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
                    I'm a Frontend / Full Stack Web Developer with experience in
                    different technologies such as NextJS, NodeJS, ReactJS and
                    more. Check out my <a href="#projects">projects</a> and
                    skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
