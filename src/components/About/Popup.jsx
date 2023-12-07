import React from "react";
import { IoMdClose } from "react-icons/io";

import Cert from "../../images/cert/cert.png";

const Popup = ({ onClose }) => {
  return (
    <div className="popup-container">
      <div className="popup">
        {/* Add your popup content here */}
        <div className="popup__title">
          <button onClick={onClose}>
            <IoMdClose color="white" size={24} />
          </button>
          <h1>My certificate</h1>
        </div>

        <div className="popup__content">
          <a
            href="https://www.credly.com/badges/b4bb2aa5-18fe-4597-8c2f-5468da354551/public_url"
            className="popup__content__box"
          >
            <div className="popup__content__box__image">
              <img src={Cert} alt="Certificate" />
            </div>

            <div className="popup__content__box__text">
              <p>
                MTA: Introduction to Programming Using Python - Certified 2022
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Popup;
