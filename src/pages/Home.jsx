import React, { useState } from "react";

import Header from "../components/Header";
import LandingPage from "../components/LandingPage";
import SkillSection from "../components/SkillSection";
import ProjectSection from "../components/ProjectSection";
import Footer from "../components/Footer";

import { SKILL_DATA } from "../data/data";
import { PROJECT_DATA } from "../data/data";

const Home = () => {
  const [fadeOut, setFadeOut] = useState(false);

  return (
    <>
      <main className={fadeOut ? "fade-out" : "fade-in"}>
        <div className="container">
          <Header />
          <LandingPage setFadeOut={setFadeOut} />
          <SkillSection data={SKILL_DATA} />
          <ProjectSection data={PROJECT_DATA} />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;
