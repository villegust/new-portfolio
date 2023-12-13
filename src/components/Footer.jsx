import React from "react";

const Footer = () => {
  const today = new Date();
  return (
    <footer>
      <div className="footer-container">
        <p>© Vilhelm Gustavsson {today.getFullYear()}. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
