import React from "react";
import "./sectionreseñas.css";
import { Carousel } from "@mantine/carousel";
import { createStyles, getStylesRef } from "@mantine/core";
import { motion } from "framer-motion";

export const Sectionreseñas = () => {
  const useStyles = createStyles(() => ({
    controls: {
      ref: getStylesRef("controls"),
      transition: "opacity 150ms ease",
      opacity: 0,
    },

    root: {
      "&:hover": {
        [`& .${getStylesRef("controls")}`]: {
          opacity: 1,
        },
      },
    },
  }));
  const { classes } = useStyles();
  return (
    <>
      <div className="reseñas_container" id="reseñas">
        <div className="reseñas_left">
          <motion.div
            initial={{ opacity: 0, x: 0, y: 150 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            whileHover={{
              scale: 1.01,
            }}
            whileTap={{ scale: 0.99 }}
            className="reseñas"
          >
            <h3>Nuestros Clientes</h3>
            <div className="cards">
              <Carousel
                maw={350}
                mx="auto"
                height={235}
                classNames={classes}
                loop
              >
                <Carousel.Slide>
                  <img src="../card1.png" alt="" />
                </Carousel.Slide>
                <Carousel.Slide>
                  <img src="../card2.png" alt="" />
                </Carousel.Slide>
                <Carousel.Slide>
                  <img src="../card3.png" alt="" />
                </Carousel.Slide>
                <Carousel.Slide>
                  <img src="../card4.png" alt="" />
                </Carousel.Slide>
                <Carousel.Slide>
                  <img src="../card5.png" alt="" />
                </Carousel.Slide>
                <Carousel.Slide>
                  <img src="../card6.png" alt="" />
                </Carousel.Slide>
              </Carousel>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 0, y: 150 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          whileHover={{
            scale: 1.01,
          }}
          whileTap={{ scale: 0.99 }}
          className="divider"
        >
          <img src="../divider_nomade.png" alt="" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 0, y: 150 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          whileHover={{
            scale: 1.01,
          }}
          whileTap={{ scale: 0.99 }}
          className="reseñas_map"
        >
          <h3>¿Cómo llegar?</h3>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d386.19248456297896!2d-56.158582159123135!3d-34.87497843998227!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f808aa04dfd25%3A0x901ddaf05f23e46b!2sN%C3%B3made%20Hair%20Studio!5e0!3m2!1ses-419!2suy!4v1692887715687!5m2!1ses-419!2suy"
              className="map"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </>
  );
};
