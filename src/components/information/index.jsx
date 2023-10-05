import React from "react";
import "./information.css";
import { Navbar } from "../navbar";
import { HoverCard, Button, Text, Group } from "@mantine/core";
import { Carrousel2 } from "../carrousel2";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
export const Information = () => {
  return (
    <>
      <div id="info" className="info_container">
        <Navbar />
        <Carrousel2 />
        {/* <div className="divisor_hojas">
          <img src="../divisor_hojas_transp.png" alt="" />
        </div> */}
        <div className="info_text_container">
          <motion.div
            delay={1}
            transition={{
              duration: 0.2,
            }}
            initial={{ opacity: 0, x: 0, y: -100 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            className="text_izq"
          >
            <h3>¿Quienes Somos?</h3>
            <p className="text_info">
              Somos Jes y Fede,una pareja que hace más de 10 años nos dedicamos
              al estilismo! Y en el 2016 decidimos dar comienzo a nuestro
              sueño,un lugar el que el ambiente relajado y con buena energía se
              mezcle con la profesionalidad,compromiso y dedicación!
            </p>
            <p className="text_info second">
              Siempre dando nuestro máximo esfuerzo. Hoy Nómade hair studio es
              una realidad gracias a nuestro equipo y todxs ustedes
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
                  <li className="li_servicios">
                    <HoverCard width={280} shadow="md">
                      <HoverCard.Target>
                        <p>Barberia</p>
                      </HoverCard.Target>
                      <HoverCard.Dropdown>
                        <Text size="sm" color="black">
                          Estamos capacitados en cortes de tendencia
                          (mohicanos,mullet,todos los estilos de fade y diseños)
                          como es cortes clásicos todo a tijera!
                        </Text>
                      </HoverCard.Dropdown>
                    </HoverCard>
                  </li>
                  <li className="li_servicios">
                    {" "}
                    <HoverCard width={280} shadow="md">
                      <HoverCard.Target>
                        <p>Corte</p>
                      </HoverCard.Target>
                      <HoverCard.Dropdown>
                        <Text size="sm" color="black">
                          Sabemos lo importante que es un corte y lo que
                          significa! Por eso lo tomamos con mucha
                          responsabilidad
                        </Text>
                      </HoverCard.Dropdown>
                    </HoverCard>
                  </li>
                  <li className="li_servicios">
                    {" "}
                    <HoverCard width={280} shadow="md">
                      <HoverCard.Target>
                        <p>Coloración</p>
                      </HoverCard.Target>
                      <HoverCard.Dropdown>
                        <Text size="sm" color="black">
                          Trabajamos con productos de calidad y con respaldo
                          como son: ⁃ Alfaparf ⁃ Wella ⁃ Redken L'Oréal: ⁃
                          Majirel ⁃ Inoa Coloración fantasía Pravana
                        </Text>
                      </HoverCard.Dropdown>
                    </HoverCard>
                  </li>
                  <Link
                    to="servicios"
                    spy={true}
                    smooth={true}
                    offset={2150}
                    duration={350}
                  >
                    <li className="li_servicios vermas">
                      <p>Ver más...</p>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};
