import React, { useState } from 'react';
import salLogo from '../img/sal_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const [active, setActive] = useState(false);

  const toggleHamburger = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="font-tuppence uppercase max-w-full sticky" id="navbar">
        <div>
          <div
            className="collapse navbar-collapse h-10 md:h-14 mb-2 flex"
            id="navbarNavAltMarkup"
          >
            <img src={salLogo} className="h-full relative inline" />

            <div className="flex sm:hidden items-center ml-auto mr-4">
              <button
                className="outline-none mobile-menu-button"
                onClick={toggleHamburger}
              >
                <svg
                  class="w-6 h-6 text-gray-500"
                  x-show="!showMenu"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
            <div className="hidden sm:flex justify-between w-full">
              <div className="navbar-nav flex items-center w-full text-xs md:text-sm">
                <a
                  href="#"
                  className="p-2 mx-1 cursor-pointer"
                  aria-current="page"
                  data-scroll="#home"
                >
                  Home
                </a>

                <a
                  href="#"
                  className="p-2 mx-1 cursor-pointer"
                  data-scroll="#about"
                >
                  About
                </a>
                <a
                  href="#"
                  className="p-2 mx-1 cursor-pointer"
                  data-scroll="#shows"
                >
                  Shows
                </a>
                <a
                  href="#"
                  className="p-2 mx-1 cursor-pointer"
                  data-scroll="#media"
                >
                  Media
                </a>
                <a
                  href="#"
                  className="p-2 mx-1 cursor-pointer"
                  data-scroll="#contact"
                >
                  Contact
                </a>
              </div>
              <div className="text-xl flex items-center md:p-8">
                <a href="#" href="#">
                  <FontAwesomeIcon icon={faInstagram} className="mx-2" />
                </a>
                <a href="#" href="#">
                  <FontAwesomeIcon icon={faFacebook} className="mx-2" />
                </a>
                <a href="#" href="#">
                  <FontAwesomeIcon icon={faTwitter} className="mx-2" />
                </a>
                <a href="#" href="#">
                  <FontAwesomeIcon icon={faYoutube} className="mx-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div id="overlayNav" className={active ? '' : 'hidden'}>
        <a href="#" onClick={toggleHamburger}>
          &times;
        </a>

        <div className="overlay-content">
          <div>
            <a
              href="#"
              className="nav-link cursor-pointer"
              aria-current="page"
              onClick={toggleHamburger}
              data-scroll="#home"
            >
              Home
            </a>
            <a
              href="#"
              className="nav-link cursor-pointer"
              onClick={toggleHamburger}
              data-scroll="#about"
            >
              About
            </a>
            <a
              href="#"
              className="nav-link cursor-pointer"
              onClick={toggleHamburger}
              data-scroll="#shows"
            >
              Shows
            </a>
            <a
              href="#"
              className="nav-link cursor-pointer"
              onClick={toggleHamburger}
              data-scroll="#media"
            >
              Media
            </a>
            <a
              href="#"
              className="nav-link cursor-pointer"
              onClick={toggleHamburger}
              data-scroll="#contact"
            >
              Contact
            </a>
          </div>
          <div className="text-xl flex items-center md:p-8">
            <a href="#" href="#">
              <FontAwesomeIcon icon={faInstagram} className="mx-2" />
            </a>
            <a href="#" href="#">
              <FontAwesomeIcon icon={faFacebook} className="mx-2" />
            </a>
            <a href="#" href="#">
              <FontAwesomeIcon icon={faTwitter} className="mx-2" />
            </a>
            <a href="#" href="#">
              <FontAwesomeIcon icon={faYoutube} className="mx-2" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
