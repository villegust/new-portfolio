import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  const handleBack = () => {
    setFadeOut(true);
    setTimeout(() => {
      navigate("/");
    }, 500); // Wait for the fade-out animation to complete
  };
  return (
    <>
      <div className={fadeOut ? "fade-out" : "fade-in"}>
        <button onClick={handleBack}>Go back</button>
      </div>
    </>
  );
};

export default About;
