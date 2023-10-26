import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 0, y: 150 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        className="footer-container"
        id="contactanos"
      >
        <div className="footer_text">
          <h1>SOMOS</h1>
          <h1>NÓMADE</h1>
        </div>
        <div className="footer_left">
          <div className="redes">
            <motion.button
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{ scale: 0.9 }}
            >
              <a
                target="blank"
                href="https://www.facebook.com/Nomade2955/?paipv=0&eav=Afao9nS6rD1HWwpA-iAJH2yscOotOGNKxtvGTqDRuYEoXk6TFEskcRjlqrFYcJ4MR7M&_rdr"
              >
                {" "}
                <img src="../facebook_logo.png" alt="" />
              </a>
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{ scale: 0.9 }}
            >
              <a
                target="blank"
                href="https://www.instagram.com/nomadehairstudio/"
              >
                <img src="../ig_logo.png" alt="" />
              </a>
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{ scale: 0.9 }}
            >
              <a target="blank" href="https://wa.me/+59894381728">
                <img src="../wpp_logo.png" alt="" />
              </a>
            </motion.button>
          </div>
        </div>
        <div className="footer_right">
          <div className="gmail">
            <p>nomadehairstudioa@gmail.com</p>
            <p>+598 95011788</p>
          </div>
          <div className="direccion">
            <p>Av. Luis Alberto de Herrera 2955</p>
          </div>
        </div>
      </motion.div>
      <div className="info_dev">
        <p className="dev_txt">
          Web desarrollada por{" "}
          <a href="https://emanuelmendoza.lat" target="blank">
            Emanuel Mendoza
          </a>
        </p>
      </div>
    </>
  );
};
