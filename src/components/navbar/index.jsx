import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleMenu = () => {
    if (isMenuVisible === false) {
      setMenuVisible(true);
    } else {
      setMenuVisible(false);
    }
  };
  const closeMenu = () => {
    setMenuVisible(false);
  };
  // ----Scroll---
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, []);

  return (
    <div id="navbar" className="navbar_container">
      <Link
        onClick={closeMenu}
        to="navbar"
        spy={true}
        smooth={true}
        offset={-3500}
        duration={250}
      >
        {" "}
        <div className="nav_logo_hide ">
          <img src="../logo_nomade_white.png" alt="" />
        </div>
      </Link>

      <div className={isMenuVisible ? "links_navbar visible" : "links_navbar"}>
        <button onClick={handleMenu} className="media_menu_close">
          <img src="../xmoon.png" alt="" />
        </button>
        <img
          className={isMenuVisible || scrollY ? "img_hojas hide" : "img_hojas"}
          src="/hojas_verdes_transp_izq.png"
          alt=""
        />
        <Link
          onClick={closeMenu}
          to="nuestrostrabajos"
          spy={true}
          smooth={true}
          offset={0}
          duration={350}
        >
          <div className="nav_text">NUESTROS TRABAJOS</div>
        </Link>
        <Link
          onClick={closeMenu}
          to="contactanos"
          spy={true}
          smooth={true}
          offset={-250}
          duration={350}
        >
          <div className="nav_text">CONTACTANOS</div>
        </Link>
        <Link
          onClick={closeMenu}
          to="info"
          spy={true}
          smooth={true}
          offset={-2000}
          duration={450}
        >
          <div className={isMenuVisible ? "nav_logo hide" : "nav_logo"}>
            <img src="../logo_nomade_white.png" alt="" />
          </div>
        </Link>
        <Link
          onClick={closeMenu}
          to="sobrenosotros"
          spy={true}
          smooth={true}
          offset={0}
          duration={350}
        >
          <div className="nav_text">SOBRE NOSOTROS</div>
        </Link>
        <Link
          onClick={closeMenu}
          to="servicios"
          spy={true}
          smooth={true}
          offset={-70}
          duration={350}
        >
          <div className="nav_text servicios">SERVICIOS</div>
        </Link>
        <Link
          onClick={closeMenu}
          to="reseñas"
          spy={true}
          smooth={true}
          offset={-70}
          duration={350}
        >
          <div className="nav_text">RESEÑAS</div>
        </Link>
        <img
          className={isMenuVisible || scrollY ? "img_hojas hide" : "img_hojas"}
          src="/hojas_verdes_transp_der.png"
          alt=""
        />
      </div>
      <div className={isMenuVisible ? "media_menu visible" : "media_menu"}>
        <button className="button_menu" onClick={handleMenu}>
          <img src={`../menu.png`} alt="" />
        </button>
      </div>
    </div>
  );
};
