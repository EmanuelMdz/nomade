import React from "react";
import { Carousel } from "@mantine/carousel";
import { AutoInit } from "materialize-css";

import "./carrousel2.css";
export const Carrousel2 = () => {
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
          <img src="../prueba1.png" className="d-block w-100" alt="..." />
        </Carousel.Slide>
        <Carousel.Slide>
          {" "}
          <img src="../prueba1.png" className="d-block w-100" alt="..." />
        </Carousel.Slide>
        <Carousel.Slide>
          {" "}
          <img src="../prueba1.png" className="d-block w-100" alt="..." />
        </Carousel.Slide>
        {/* ...other slides */}
      </Carousel>
    </div>
  );
};
