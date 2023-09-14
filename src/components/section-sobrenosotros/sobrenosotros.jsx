import React from "react";
import "./sobrenosotros.css";
import { Carousel } from "@mantine/carousel";

export const Sobrenosotros = () => {
  return (
    <>
      <div className="sobrenosotros_container" id="sobrenosotros">
        <img className="hojas_deco izq" src="../hojas1_izq.png" alt="" />
        <img className="hojas_deco der" src="../hojas1_derecha.png" alt="" />
        <div className="sobrenosotros_text">
          <h1>Sobre Nosotros</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="sobrenosotros_img_txt">
          <img src="../somos_momade.png" alt="" />
        </div>
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
