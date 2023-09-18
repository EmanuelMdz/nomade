import React from "react";
import "./nuestrostrabajos.css";

export const Nuestrostrabajos = () => {
  return (
    <>
      <div className="nuestrostrabajos_container" id="nuestrostrabajos">
        <img className="hojas_deco2 izq" src="../hojas2_izq.png" alt="" />
        <div className="conteiner">
          <h1>Nuestros Trabajos</h1>
          <div className="carrousel_triple">
            <div className="carrousel_img">
              <img src="../carrousel6.png" alt="" />
            </div>
            <div className="carrousel_img">
              <img src="../carrousel1.png" alt="" />
            </div>
            <div className="carrousel_img">
              <img src="../carrousel2.png" alt="" />
            </div>
          </div>
          <div className="carrousel_triple">
            <div className="carrousel_img">
              <img src="../carrousel3.png" alt="" />
            </div>
            <div className="carrousel_img">
              <img src="../carrousel4.png" alt="" />
            </div>
            <div className="carrousel_img">
              <img src="../carrousel5.png" alt="" />
            </div>
          </div>
          <div className="carrousel_triple">
            <div className="carrousel_img">
              <img src="../carrousel7.png" alt="" />
            </div>
            <div className="carrousel_img">
              <img src="../carrousel8.png" alt="" />
            </div>
            <div className="carrousel_img">
              <img src="../carrousel9.png" alt="" />
            </div>
          </div>
        </div>
        <img className="hojas_deco2 der" src="../hojas2_der.png" alt="" />
      </div>
    </>
  );
};
