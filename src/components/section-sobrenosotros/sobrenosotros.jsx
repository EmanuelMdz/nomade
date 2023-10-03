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
            duration: 0.2,
          }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{
            scale: 1.01,
          }}
          whileTap={{ scale: 0.99 }}
          className="sobrenosotros_text"
        >
          <h1>Sobre Nosotros</h1>
          <p>
            Somos un equipo que se caracteriza por el buen servicio y
            profesionalidad! Estamos enfocados en darte los mejores resultados y
            asumimos el compromiso de trabajar en tu imagen! apasionados por lo
            que hacemos y en constante evolución,siempre en busca de mejorar!
          </p>
        </motion.div>
        <motion.div
          delay={1}
          transition={{
            duration: 0.2,
          }}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{
            scale: 1.01,
          }}
          whileTap={{ scale: 0.99 }}
          className="sobrenosotros_img_txt"
        >
          <img src="../somos_momade.png" alt="" />
        </motion.div>
        <a
          className="wpp_btn"
          href="https://wa.me/+59895011788"
          target="_blank"
        >
          <img src="../whatsapp.png" alt="" />
        </a>
      </div>
    </>
  );
};
