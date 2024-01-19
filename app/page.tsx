'use client'
import { Metadata } from "next";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import { Zoom } from "react-awesome-reveal";
import Lottie from "react-lottie";
import animationData from "../assets/animations/codingAnimation.json"
import Container from 'react-bootstrap/Container';
import Image from "next/image";
import backgroundHero from "../assets/images/Gradient.svg";
import downArrow from "../assets/animations/downArrow.json";
import "./globals.css";
import FindXHome from "../assets/images/FindXHomeScreen.png";
import laptop from "../assets/images/laptopFindX.json";
import { Kaushan_Script } from "next/font/google";
import smallCodingAnimation from '../assets/animations/codingSmallAnimation.json';

const kaushenScript = Kaushan_Script({ subsets: ["latin"],
  display: "swap",
weight: "400"
 });


export default function Home() {
  const [fadeIn, setFadeIn] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (

    <div style={{
      padding: "5px",
      overflow: "hidden",
    }}>
      <div className="navbar">
  <div className="flex-1" onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        top: 0,
        zIndex: 1,
        alignItems: "center",
      }}>
    <a className="btn btn-ghost text-xl font-bold" style={{
      fontSize: "2rem",
      fontWeight: "bold",
      backgroundColor: "transparent",

  
    }}>
      RANGEL KOLI

  

    <div
      
    >
      {isHovered && (
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: laptop,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
          height={40}
          width={40}
          style={{
            transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
            opacity: isHovered ? 1 : 0,
            transform: `translateX(${isHovered ? 0 : -100}%)`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      )}
    </div>
    
    </a>
  </div>
  <div className="flex-none" style={{
    fontSize: "3rem",
  }}>
    <ul className="menu menu-horizontal px-1">
      <li><a href="#projects">Projects</a></li>
      <li>
        <a>
          About
        </a>
      </li>
    </ul>
  </div>
</div>

<div className="container">
  <Container fluid style={{
    height: "95vh",
    width: "100vw",
    position: "relative",
  }}>
  
    <Grid container spacing={2}>
   
      <Grid item xs={12} sm={9}>
      <Image 
        src={backgroundHero}
        alt="Uber" 
        width={850} 
        height={600}
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          zIndex: "0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          objectFit: "cover",

        }}
      />
        <div style={{
          textAlign: "start",
          marginLeft: "15%",
          marginRight: "10%",
          maxWidth: "80%",
          width: "100%",
          marginTop: "10%",
        }}
        className="heroTitle"
        >
          <Zoom triggerOnce={true} duration={1000} delay={100}>
            <p className={kaushenScript.className}>Hi!</p>
          </Zoom>
        </div>
        <div 
          style={{
            textAlign: "start",
            marginLeft: "15%",
            marginRight: "0%",
            maxWidth: "90%",
            width: "100%",
          }}
          className="heroSubtitle"
        >
          <Zoom triggerOnce={true} duration={1000} delay={100}>
            <p className={kaushenScript.className}>I'm Rangel Koli</p>
          </Zoom>
        </div>
        <div 
          className="heroParagraph" 
          style={{
            textAlign: "justify",
            marginLeft: "15%",
            marginRight: "10%",
            maxWidth: "80%",
            width: "100%",
          }}
        >
          <Zoom triggerOnce={true} duration={1000} delay={100}>
            <p >
              Innovative technologist with a passion for 
              driving positive change through technology 
              and a commitment to pushing the boundaries 
              of what's possible
            </p>
          </Zoom>
        </div>
      </Grid>
    </Grid>
    <Lottie  
    options={{
      loop: true,
      autoplay: true,
      animationData: downArrow,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    }}
    height={200}
    width={200}
    style={{
      position: "absolute",
      bottom: "0",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: "0",
    }}
    />



 
  </Container>


  </div>

  <section className="projects" id="projects">
    <div style={{ textAlign: "center" }}>
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          marginBottom: "0",
          zIndex: "4",
        }}
      >
        Projects
      </h1>
    </div>

    <div style={{ textAlign: "center", justifyContent: "center", display: "flex", width: "100vw"}}>
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          marginBottom: "0",
          zIndex: "4",
        }}
      >
        Here are some of my projects
      </h2>
    </div>

    <div
    style={{
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    }} 
    >
      <div style={{
        position: "relative",
        borderRadius: "0px",
      }}>
                <div className="card lg:card-side bg-base-100 shadow-xl" style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "90vw",
                  //cursor: 'zoom-in'
                    cursor: `url('https://example.com/magnifying_glass.svg'), auto`,
                    borderRadius: "2px",
                    backgroundColor: "#3f75ff",
                  }}>
                  <figure style={{
                    width: "100%",
                    padding: "10px",
                  }}>
                    <Image src={FindXHome} alt="Album" style={{ width: "100%" }}/>
                  </figure>
                  <div className="card-body" style={{
                    width: "100%",
                  }}>
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Listen</button>
                    </div>
                  </div>
                </div>

      </div>


      



</div>



   
  </section>






<section className="aboutme" id="aboutme">
  </section>


  <section className="footer" id="footer">
  <footer className="footer footer-center p-10 text-base-content rounded">
  <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a href="https://github.com">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.865 8.17 6.84 9.49.5.09.68-.22.68-.49v-1.71c-2.78.6-3.37-1.34-3.37-1.34-.46-1.17-1.12-1.48-1.12-1.48-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.24-.25-4.59-1.12-4.59-4.97 0-1.1.39-2 1.03-2.71-.1-.25-.45-1.28.1-2.67 0 0 .85-.27 2.77 1.03A9.5 9.5 0 0112 6.03c.85 0 1.7.11 2.5.34 1.92-1.3 2.77-1.03 2.77-1.03.55 1.39.2 2.42.1 2.67.64.71 1.03 1.61 1.03 2.71 0 3.86-2.36 4.72-4.6 4.97.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.49C19.135 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"/>
        </svg>
      </a>
      <a href="https://www.linkedin.com">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>

      </a>
    </div>
  </nav> 
  <aside>
    <p>Copyright © 2024 - Rangel Koli</p>
  </aside>
</footer>


  </section>


    </div>
  );
}
