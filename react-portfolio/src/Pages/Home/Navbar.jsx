/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <RouterLink to="/" onClick={closeMenu}>
          <img src="../assets/logoipsum.svg" alt="Logoipsum" />
        </RouterLink>
      </div>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <RouterLink
              onClick={closeMenu}
              activeClass="navbar--active-content"
              smooth={true}
              offset={-70}
              duration={500}
              to="/"
              className="navbar--content"
            >
              Home
            </RouterLink>
          </li>
          <li>
            <ScrollLink
              onClick={closeMenu}
              activeClass="navbar--active-content"
              smooth={true}
              offset={-70}
              duration={500}
              to="MyPortfolio"
              className="navbar--content"
            >
              Portfolio
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              onClick={closeMenu}
              activeClass="navbar--active-content"
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutMe"
              className="navbar--content"
            >
              About Me
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              onClick={closeMenu}
              activeClass="navbar--active-content"
              smooth={true}
              offset={-70}
              duration={500}
              to="testimonials"
              className="navbar--content"
            >
              Testimonials
            </ScrollLink>
          </li>
          <li>
            <RouterLink
              onClick={closeMenu}
              activeClass="navbar--active-content"
              smooth={true}
              offset={-70}
              duration={500}
              to="/technews"
              className="navbar--content"
            >
              News
            </RouterLink>
          </li>
        </ul>
      </div>
      <ScrollLink
        onClick={closeMenu}
        activeClass="navbar--active-content"
        smooth={true}
        offset={-70}
        duration={500}
        to="Contact"
        className="btn btn-outline-primary"
      >
        Contact Me
      </ScrollLink>
    </nav>
  );
}

export default Navbar;
