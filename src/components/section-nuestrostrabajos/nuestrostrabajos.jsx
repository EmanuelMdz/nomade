import React from "react";
import "./nuestrostrabajos.css";
import { motion } from "framer-motion";
export const Nuestrostrabajos = () => {
  return (
    <>
      <div className="nuestrostrabajos_container" id="nuestrostrabajos">
        <img className="hojas_deco2 izq" src="../hojas2_izq.png" alt="" />
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="conteiner"
        >
          <h1>Nuestros Trabajos</h1>
          <div className="carrousel_triple">
            <div className="carrousel_img">
              <motion.button
                whileHover={{
                  scale: 1.2,
                }}
                whileTap={{ scale: 0.9 }}
              >
                <img src="../carrousel6.png" alt="" />
              </motion.button>
            </div>
            <div className="carrousel_img">
              <motion.button
                whileHover={{
                  scale: 1.2,
                }}
                whileTap={{ scale: 0.9 }}
              >
                <img src="../carrousel1.png" alt="" />
              </motion.button>
            </div>
            <div className="carrousel_img">
              <motion.button
                whileHover={{
                  scale: 1.2,
                }}
                whileTap={{ scale: 0.9 }}
              >
                <img src="../carrousel2.png" alt="" />
              </motion.button>
            </div>
          </div>
          <div className="carrousel_triple">
            <div className="carrousel_img">
              <motion.button
                whileHover={{
                  scale: 1.2,
                }}
                whileTap={{ scale: 0.9 }}
              >
                <img src="../carrousel3.png" alt="" />
              </motion.button>
            </div>
            <div className="carrousel_img">
              <motion.button
                whileHover={{
                  scale: 1.2,
                }}
                whileTap={{ scale: 0.9 }}
              >
                <img src="../carrousel4.png" alt="" />
              </motion.button>
            </div>
            <div className="carrousel_img">
              <motion.button
                whileHover={{
                  scale: 1.2,
                }}
                whileTap={{ scale: 0.9 }}
              >
                <img src="../carrousel5.png" alt="" />
              </motion.button>
            </div>
          </div>
          <div className="carrousel_triple">
            <div className="carrousel_img">
              <motion.button
                whileHover={{
                  scale: 1.2,
                }}
                whileTap={{ scale: 0.9 }}
              >
                <img src="../carrousel7.png" alt="" />
              </motion.button>
            </div>
            <div className="carrousel_img">
              <motion.button
                whileHover={{
                  scale: 1.2,
                }}
                whileTap={{ scale: 0.9 }}
              >
                <img src="../carrousel8.png" alt="" />
              </motion.button>
            </div>
            <div className="carrousel_img">
              <motion.button
                whileHover={{
                  scale: 1.2,
                }}
                whileTap={{ scale: 0.9 }}
              >
                <img src="../carrousel9.png" alt="" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        <img className="hojas_deco2 der" src="../hojas2_der.png" alt="" />
      </div>
    </>
  );
};
