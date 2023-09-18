import React from "react";
import "./sobrenosotros.css";
import { motion } from "framer-motion";

export const Sobrenosotros = () => {
  return (
    <>
      <div className="sobrenosotros_container" id="sobrenosotros">
        <img className="hojas_deco izq" src="../hojas1_izq.png" alt="" />
        <img className="hojas_deco der" src="../hojas1_derecha.png" alt="" />
        <motion.div
          delay={1}
          transition={{
            duration: 0.5,
          }}
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="sobrenosotros_text"
        >
          <h1>Sobre Nosotros</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </motion.div>
        <motion.div
          delay={1}
          transition={{
            duration: 0.5,
          }}
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="sobrenosotros_img_txt"
        >
          <img src="../somos_momade.png" alt="" />
        </motion.div>
        <a
          className="wpp_btn"
          href="https://wa.me/+598092901261"
          target="_blank"
        >
          <img src="../whatsapp.png" alt="" />
        </a>
      </div>
    </>
  );
};
