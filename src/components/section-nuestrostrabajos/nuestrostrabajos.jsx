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
              <img src="../nomade_example.png" alt="" />
            </div>
            <div className="carrousel_img">
              <img src="../nomade_example.png" alt="" />
            </div>
            <div className="carrousel_img">
              <img src="../public/nomade_example.png" alt="" />
            </div>
          </div>
          <div className="carrousel_triple">
            <div className="carrousel_img">
              <img src="../nomade_example.png" alt="" />
            </div>
            <div className="carrousel_img">
              <img src="../nomade_example.png" alt="" />
            </div>
            <div className="carrousel_img">
              <img src="../nomade_example.png" alt="" />
            </div>
          </div>
          <div className="carrousel_triple">
            <div className="carrousel_img">
              <img src="../nomade_example.png" alt="" />
            </div>
            <div className="carrousel_img">
              <img src="../nomade_example.png" alt="" />
            </div>
            <div className="carrousel_img">
              <img src="../public/nomade_example.png" alt="" />
            </div>
          </div>
        </div>
        <img className="hojas_deco2 der" src="../hojas2_der.png" alt="" />
      </div>
    </>
  );
};
