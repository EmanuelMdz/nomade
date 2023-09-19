import React from "react";
import "./information.css";
import { Navbar } from "../navbar";
import { HoverCard, Button, Text, Group } from "@mantine/core";
import { Carrousel2 } from "../carrousel2";
import { motion } from "framer-motion";
export const Information = () => {
  return (
    <>
      <div className="info_container">
        <Navbar />
        <Carrousel2 />
        <div className="divisor_hojas">
          <img src="../divisor_hojas_transp.png" alt="" />
        </div>
        <div className="info_text_container">
          <motion.div
            delay={1}
            transition={{
              duration: 0.2,
            }}
            initial={{ opacity: 0, x: 0, y: -100 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            whileHover={{
              scale: 1.01,
            }}
            whileTap={{ scale: 0.99 }}
            className="text_izq"
          >
            <h3>¿Quienes Somos?</h3>
            <p className="text_info">
              En Nómade, somos más que una simple peluquería. Somos una
              comunidad apasionada y comprometida con tu imagen. Nuestra misión
              es realzar tu belleza y resaltar tu estilo único.
            </p>
            <p className="text_info second">
              Trabajamos juntos para lograr la imagen que deseas y mereces.
              Nuestra pasión por la belleza se refleja en cada detalle de
              nuestro trabajo.
            </p>
          </motion.div>
          <div className="relleno"></div>
          <div className="relleno"></div>
          <motion.div
            delay={1}
            transition={{
              duration: 0.2,
            }}
            initial={{ opacity: 0, x: 0, y: -100 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            whileHover={{
              scale: 1.01,
            }}
            whileTap={{ scale: 0.99 }}
            className="text_der"
            id="servicios"
          >
            <h3>Nuestros Servicios</h3>
            <div className="display_flex">
              <p className="text_info first">
                Ofrecemos una amplia gama de servicios de peluquería, estamos
                constantemente actualizados con las últimas tendencias para
                asegurarnos de que siempre estés a la vanguardia de la moda.
              </p>
              <div className="lista">
                <ul>
                  <li>
                    <HoverCard width={280} shadow="md">
                      <HoverCard.Target>
                        <p>example</p>
                      </HoverCard.Target>
                      <HoverCard.Dropdown>
                        <Text size="sm" color="black">
                          Información del servcio 1
                        </Text>
                      </HoverCard.Dropdown>
                    </HoverCard>
                  </li>
                  <li>
                    {" "}
                    <HoverCard width={280} shadow="md">
                      <HoverCard.Target>
                        <p>example</p>
                      </HoverCard.Target>
                      <HoverCard.Dropdown>
                        <Text size="sm" color="black">
                          Información del servcio 2
                        </Text>
                      </HoverCard.Dropdown>
                    </HoverCard>
                  </li>
                  <li>
                    {" "}
                    <HoverCard width={280} shadow="md">
                      <HoverCard.Target>
                        <p>example</p>
                      </HoverCard.Target>
                      <HoverCard.Dropdown>
                        <Text size="sm" color="black">
                          Información del servcio 3 puede ser mas largo mas info
                          Información del servcio 3 puede ser mas largo mas info
                          Información del servcio 3 puede ser mas largo mas info
                        </Text>
                      </HoverCard.Dropdown>
                    </HoverCard>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};
