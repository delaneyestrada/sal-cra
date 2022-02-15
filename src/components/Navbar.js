import React, { useState } from 'react';
import salLogo from '../img/sal_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll';
import './navbar.css';

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
                <Link
                  className="p-2 mx-1 cursor-pointer nav-link"
                  aria-current="page"
                  smooth={true}
                  to="home"
                >
                  Home
                </Link>

                <Link
                  className="p-2 mx-1 cursor-pointer nav-link"
                  smooth={true}
                  to="about"
                >
                  About
                </Link>
                <Link
                  className="p-2 mx-1 cursor-pointer nav-link"
                  smooth={true}
                  to="shows"
                >
                  Shows
                </Link>
                <Link
                  className="p-2 mx-1 cursor-pointer nav-link"
                  smooth={true}
                  to="media"
                >
                  Media
                </Link>
                <Link
                  className="p-2 mx-1 cursor-pointer nav-link"
                  smooth={true}
                  to="contact"
                >
                  Contact
                </Link>
              </div>
              <div className="text-xl flex items-center md:p-8">
                <a
                  href="https://www.instagram.com/stonewallhippie/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faInstagram} className="mx-2" />
                </a>
                <a
                  href="https://www.facebook.com/StonewallHippie/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faFacebook} className="mx-2" />
                </a>
                <a href="https://twitter.com/StoneWallHippie" target="_blank">
                  <FontAwesomeIcon icon={faTwitter} className="mx-2" />
                </a>
                <a
                  href="https://www.youtube.com/c/TheRealSalMusic"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faYoutube} className="mx-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div
        id="overlayNav"
        className={`overlay z-50 ${active ? 'w-full' : 'w-0'}`}
      >
        <a onClick={toggleHamburger} className="cursor-pointer">
          &times;
        </a>

        <div className="overlay-content">
          <div>
            <Link
              className="p-2 mx-1 cursor-pointer nav-link"
              aria-current="page"
              smooth={true}
              onClick={toggleHamburger}
              to="home"
            >
              Home
            </Link>

            <Link
              className="p-2 mx-1 cursor-pointer nav-link"
              smooth={true}
              onClick={toggleHamburger}
              to="about"
            >
              About
            </Link>
            <Link
              className="p-2 mx-1 cursor-pointer nav-link"
              smooth={true}
              onClick={toggleHamburger}
              to="shows"
            >
              Shows
            </Link>
            <Link
              className="p-2 mx-1 cursor-pointer nav-link"
              smooth={true}
              onClick={toggleHamburger}
              to="media"
            >
              Media
            </Link>
            <Link
              className="p-2 mx-1 cursor-pointer nav-link"
              smooth={true}
              onClick={toggleHamburger}
              to="contact"
            >
              Contact
            </Link>

            <div className="text-xl flex items-center justify-center w-full p-8">
              <a
                href="https://www.instagram.com/stonewallhippie/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} className="mx-2" />
              </a>
              <a
                href="https://www.facebook.com/StonewallHippie/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebook} className="mx-2" />
              </a>
              <a href="https://twitter.com/StoneWallHippie" target="_blank">
                <FontAwesomeIcon icon={faTwitter} className="mx-2" />
              </a>
              <a
                href="https://www.youtube.com/c/TheRealSalMusic"
                target="_blank"
              >
                <FontAwesomeIcon icon={faYoutube} className="mx-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
