import React, { useState, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import "./App.css";
import logo from "./assets/logo.png";
import Herosection from "./Herosection/Herosection";
import AboutSection from "./AboutSection/AboutSection";
import SkillSection from "./SkillSection/SkillSection";
import ToolsSection from "./SkillSection/ToolsSection";
import ProjectSection from "./ProjectSection/ProjectSection";
import ContactSection from "./ContactSection/ContactSection";
import SertifSection from "./SertifSection/Sertifsection";
import NavbarContainer from "./components/NavbarContainer";
import { FooterWithLogo } from "./components/Footer";

const Preloader = React.forwardRef<HTMLDivElement>((props, ref) => (
  <div ref={ref} className="preloader-gacor">
    <div className="background-warp" />
    <img src={logo} alt="Logo" className="logo-gacor" />
    <div className="flash-ring" />
    <div className="particles-container" />
    <div className="label-gacor">ENTERING REALITY...</div>
  </div>
));

const PortfolioContent = () => (
  <div className="bg-black text-neutral-100 min-h-screen">
    <div className="relative w-full flex items-center justify-center">
      <NavbarContainer className="top-2" />
    </div>
    <Herosection />
    <div id="about">
      <AboutSection />
    </div>
    <SkillSection />
    <ToolsSection />
    <div id="projects">
      <ProjectSection />
    </div>
    <div id="sertif" className="hidden md:block">
      <SertifSection />
    </div>
    <div id="contact">
      <ContactSection />
    </div>
    <FooterWithLogo />
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const preloaderRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (isLoading && preloaderRef.current) {
      const logo = preloaderRef.current.querySelector(".logo-gacor");
      const bg = preloaderRef.current.querySelector(".background-warp");
      const ring = preloaderRef.current.querySelector(".flash-ring");
      const label = preloaderRef.current.querySelector(".label-gacor");
      const particlesContainer = preloaderRef.current.querySelector(
        ".particles-container"
      );

      const tl = gsap.timeline({
        defaults: { ease: "power3.inOut" },
        onComplete: () => setIsLoading(false),
      });

      tl.set(preloaderRef.current, { opacity: 1 })
        .fromTo(
          bg,
          { scale: 1.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.2 }
        )
        .fromTo(
          logo,
          { scale: 0, rotation: 720, opacity: 0, filter: "blur(20px)" },
          {
            scale: 1,
            rotation: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1.5,
            ease: "elastic.out(1, 0.5)",
          },
          "-=0.8"
        )
        .fromTo(
          ring,
          { scale: 0, opacity: 1 },
          { scale: 4, opacity: 0, duration: 0.6 },
          "-=1.2"
        )
        .to(logo, {
          keyframes: [
            { scale: 1.1, duration: 0.1 },
            { scale: 0.95, duration: 0.1 },
            { scale: 1.05, duration: 0.1 },
            { scale: 1, duration: 0.1 },
          ],
        })
        .fromTo(
          label,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.2"
        )
        .add(() => {
          // Particle burst effect
          if (particlesContainer) {
            for (let i = 0; i < 30; i++) {
              const particle = document.createElement("div");
              particle.className = "particle";
              particlesContainer.appendChild(particle);
              gsap.fromTo(
                particle,
                {
                  x: 0,
                  y: 0,
                  scale: 1,
                  opacity: 1,
                  backgroundColor: `hsl(${Math.random() * 360}, 80%, 60%)`,
                },
                {
                  x: (Math.random() - 0.5) * 400,
                  y: (Math.random() - 0.5) * 400,
                  scale: 0,
                  opacity: 0,
                  duration: 1.5,
                  ease: "power4.out",
                  onComplete: () => particle.remove(),
                }
              );
            }
          }
        }, "+=0")
        .to(preloaderRef.current, {
          scale: 1.1,
          opacity: 0,
          duration: 1.2,
          ease: "expo.inOut",
          delay: 1,
          onComplete: () => {
            if (preloaderRef.current)
              preloaderRef.current.style.display = "none";
          },
        });
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && <Preloader ref={preloaderRef} />}
      {!isLoading && <PortfolioContent />}
    </>
  );
}

export default App;
