import React from "react";
import "./servicios.css";
import { Carousel } from "@mantine/carousel";
import { createStyles, getStylesRef } from "@mantine/core";
import { motion } from "framer-motion";
import { ScrollArea } from "@mantine/core";
import { AutoInit } from "materialize-css";

export const Servicios = () => {
  return (
    <>
      <div className="servicios_container" id="servicios">
        <motion.div className="scroll_container">
          <div className="scroll">
            <h3>Nuestros Servicios</h3>
            <ScrollArea className="scroll_div" h={700}>
              <h5>Barberia</h5>
              <p>
                ⁃ Estamos capacitados en cortes de tendencia
                (mohicanos,mullet,todos los estilos de fade y diseños) como es
                cortes clásicos todo a tijera! ⁃ Barbas ⁃ Perfilado de cejas ⁃
                Mechas y platinados
              </p>
              <h5>Corte </h5>
              <p>
                Sabemos lo importante que es un corte y lo que significa! Por
                eso lo tomamos con mucha responsabilidad
              </p>
              <h5>Coloración</h5>
              <p>
                Rabajamos con productos de calidad y con respaldo como son: ⁃
                Alfaparf ⁃ Wella ⁃ Redken L'Oréal: ⁃ Majirel ⁃ Inoa Coloración
                fantasía Pravana
              </p>
              <h5>Diseño de mechas</h5>
              <p>
                Especializados en todas las técnicas: ⁃ Balayage ⁃ Mechas
                creativas ⁃ Babyligths ⁃ Esfumados ⁃ Claritos tradicionales con
                gorra y papel Siempre con el cuidado de Metal Detox
              </p>
              <h5>Lavado</h5>
              <p>
                Tenemos a tu disposición una gran variedad de productos para
                cubrír la necesidad de tu cabello ⁃ Siempre acompañado de un
                masaje relax
              </p>
              <h5>Progresivos</h5>
              <p>
                Trabajamos hace 10 años con productos de calidad,cuidando el
                cabello y no dañando la fibra capilar
              </p>
              <h5>Tratamientos capilares</h5>
              <p>
                ⁃ Botóx capilar ⁃ Baños de queratina ⁃ Tratamiento de
                aminoácidos
              </p>
              <h5>Manicuría y pedicuría</h5>
              <p>
                ⁃ esmaltado semipermanente y tradicional ⁃ Kapping en gel ⁃ Uñas
                soft gel
              </p>
              <h5>Maquillaje social y para fiestas</h5>
              <h5>Peinados</h5>

              <h5>Depilación facial</h5>

              <h5>Lifting de pestañas</h5>
            </ScrollArea>
          </div>
        </motion.div>
      </div>
    </>
  );
};
