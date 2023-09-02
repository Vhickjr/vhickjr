import React from "react";
import LOGO from "./Assets/logo.png";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
//import { BsPlayFill } from "react-icons/bs";
//import { BiBarChart } from "react-icons/bi";
// import { BsCalendar2DateFill } from "react-icons/bs";
// import { IoMdMail } from "react-icons/io";
// import { CgProfile } from "react-icons/cg";
import "./banner.css";
import styled from "styled-components";

const BannerStyle = styled.div`
  * {
    transition-duration: 0.2s;
  }
  --mainColor: black;
  --mainColorLight: #5767aa;
  --secondaryColor: #f48c06;
  --textColor: #eee;
  width: 100% !important;
  font-family: "Poppins", sans-serif;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 80px;
    background-color: var(--mainColor);
    color: var(--textColor);
    font-family: "Poppins";
    font-size: 1rem;
    font-weight: 400;
    height: 100px;
  }

  nav {
    width: 80%;
    padding-left: 800px;
  }

  nav a {
    padding-left: 3rem;
    color: black;
    color: var(--textColor);
    text-decoration: none;
  }

  nav div {
    gap: 20px;
    padding: 2rem;
  }

  nav a:hover {
    color: var(--secondaryColor);
  }

  header .nav-btn {
    padding: 5px;
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
    color: var(--textColor);
    visibility: hidden;
    opacity: 0;
    font-size: 1rem;
  }

  header div,
  nav {
    display: flex;
    align-items: center;
  }

  header .responsive_nav {
    transform: none;
  }

  @media only screen and (max-width: 1600px) {
    header {
      padding-left: 0rem;
      padding-right: 2rem;
    }

    header .nav-btn {
      visibility: visible;
      opacity: 1;
    }

    header nav {
      top: 0;
      left: 0;
      padding-left: 0px;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      background-color: var(--mainColor);
      background-color: var(--mainColor);
      transform: translateY(-100vh);
    }

    header .responsive_nav {
      transform: none;
      position: absolute;
      height: 100vh;
      padding-top: 60px;
    }

    nav .nav-close-btn {
      position: absolute;
      top: 2rem;
      right: 2rem;
    }
    nav div {
      gap: 20px;
      padding: 2rem;
      display: flex;
      flex-direction: column;
    }

    nav a {
      font-size: 1.3rem;
      padding-left: 0rem;
    }
  }
`;
const Banner = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  /*const showNav = () => {
   setShow(!show);
  };*/

  return (
    <BannerStyle id="home">
      <header
        className={"navv"}
        style={{
          position: "fixed",
          top: "0",
          width: "100%",
          paddingTop: "15px",
          paddingBottom: "15px",
          zIndex: "6",
        }}
      >
        <a href="/">
          <img
            height={80}
            src={LOGO}
            alt="logo"
            id="logo"
            style={{ borderRadius: "50%" }}
          />
        </a>

        <nav ref={navRef}>
          <a href="/" onClick={showNavbar}>
            HOME
          </a>
          {/* <a href="/#">Careers</a> */}
          <a href="/Aboutme" onClick={showNavbar}>
            ABOUT ME
          </a>
          <a href="/Skills" onClick={showNavbar}>
            SKILLS
          </a>

          <a href="/Services" onClick={showNavbar}>
            SERVICES
          </a>
          <a href="/Myportfolio" onClick={showNavbar}>
            MY PORTFOLIO
          </a>
          <a href="/Contactme" onClick={showNavbar}>
            CONTACT ME
          </a>

          {/* <a href="/#">Careers</a> */}

          {/* <div
            style={{
              background: "#F48C06",
              border: "2px solid #F48C06",
              borderRadius: "18px",
              fontWeight: "400",
              padding: "4px 4px",
            }}
            onClick={showNavbar}
          >
            <label for="check">
              <input type="checkbox" id="check" />
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>*/}
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes style={{ fontSize: "25px" }} />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars style={{ fontSize: "25px" }} />
        </button>
      </header>
    </BannerStyle>
  );
};

export default Banner;
