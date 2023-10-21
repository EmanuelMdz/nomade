import React from "react";
import { useState } from "react";
import { Carousel } from "@mantine/carousel";
import { AutoInit } from "materialize-css";
import { useMediaQuery } from "@mantine/hooks";
import "./carrousel2.css";
export const Carrousel2 = () => {
  const [image1, setImage1] = useState("prueba1.png");
  const [image2, setImage2] = useState("prueba2.png");
  const [image3, setImage3] = useState("prueba3.png");
  const [image4, setImage4] = useState("prueba4.png");
  const [image5, setImage5] = useState("prueba5.png");
  const [image6, setImage6] = useState("prueba6.png");
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <div className="carrouselcontainer">
      <Carousel
        maw={AutoInit}
        className="carrousel_stats"
        loop
        styles={{
          indicator: {
            width: 12,
            height: 4,
            transition: "width 250ms ease",

            "&[data-active]": {
              width: 40,
            },
          },
        }}
      >
        <Carousel.Slide>
          {image1 === "prueba1.png" && isMobile ? (
            <img src="../prueba1cel.png" className="d-block w-100" alt="..." />
          ) : (
            <img src="../prueba1.png" className="d-block w-100" alt="..." />
          )}
        </Carousel.Slide>
        <Carousel.Slide>
          {image2 === "prueba2.png" && isMobile ? (
            <img src="../prueba2cel.png" className="d-block w-100" alt="..." />
          ) : (
            <img src="../prueba2.png" className="d-block w-100" alt="..." />
          )}
        </Carousel.Slide>
        <Carousel.Slide>
          {image3 === "prueba3.png" && isMobile ? (
            <img src="../prueba3cel.png" className="d-block w-100" alt="..." />
          ) : (
            <img src="../prueba3.png" className="d-block w-100" alt="..." />
          )}
        </Carousel.Slide>
        <Carousel.Slide>
          {image4 === "prueba4.png" && isMobile ? (
            <img src="../prueba4cel.png" className="d-block w-100" alt="..." />
          ) : (
            <img src="../prueba4.png" className="d-block w-100" alt="..." />
          )}
        </Carousel.Slide>
        <Carousel.Slide>
          {image5 === "prueba5.png" && isMobile ? (
            <img src="../prueba5cel.png" className="d-block w-100" alt="..." />
          ) : (
            <img src="../prueba5.png" className="d-block w-100" alt="..." />
          )}
        </Carousel.Slide>
        <Carousel.Slide>
          {image6 === "prueba6.png" && isMobile ? (
            <img src="../prueba6cel.png" className="d-block w-100" alt="..." />
          ) : (
            <img src="../prueba6.png" className="d-block w-100" alt="..." />
          )}
        </Carousel.Slide>
      </Carousel>
    </div>
  );
};
