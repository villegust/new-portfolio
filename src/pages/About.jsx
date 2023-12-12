import React, { useState } from "react";

import AboutMe from "../components/About/AboutMe";
import Particles from "../Particles";
import Education from "../components/About/Education";
import Work from "../components/About/Work";

const About = () => {
  const [fadeOut, setFadeOut] = useState(false);

  return (
    <>
      <main className={`aboutme-page ${fadeOut ? "fade-out" : "fade-in"}`}>
        <Particles />
        <div className="about-container">
          <AboutMe setFadeOut={setFadeOut} />
          <Education />
          <Work />
        </div>
      </main>
    </>
  );
};

export default About;
