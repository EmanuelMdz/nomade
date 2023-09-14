import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

export const Footer = () => {
  return (
    <div className="footer-container" id="contactanos">
      <div className="footer_text">
        <h1>SOMOS</h1>
        <h1>NÓMADE</h1>
      </div>
      <div className="footer_left">
        <img src="./logo_nomade_white.png" alt="" />
      </div>
      <div className="footer_right">
        <div className="gmail">
          <p>nomadehairstudioa@gmail.com</p>
          <p>+59899999999</p>
        </div>
        <div className="direccion">
          <p>Av. Luis Alberto de Herrera 2955</p>
        </div>
        <div className="redes">
          <a
            target="blank"
            href="https://www.facebook.com/Nomade2955/?paipv=0&eav=Afao9nS6rD1HWwpA-iAJH2yscOotOGNKxtvGTqDRuYEoXk6TFEskcRjlqrFYcJ4MR7M&_rdr"
          >
            {" "}
            <img src="../facebook_logo.png" alt="" />
          </a>
          <a target="blank" href="https://www.instagram.com/nomadehairstudio/">
            <img src="../ig_logo.png" alt="" />
          </a>
          <a target="blank" href="https://wa.me/+598092901261">
            <img src="../wpp_logo.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};
