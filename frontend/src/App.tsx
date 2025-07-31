import "./App.css";
import Herosection from "./Herosection/Herosection";
import AboutSection from "./AboutSection/AboutSection";
import SkillSection from "./SkillSection/SkillSection";
import ToolsSection from "./SkillSection/ToolsSection";
import ProjectSection from "./ProjectSection/ProjectSection";
import ContactSection from "./ContactSection/ContactSection";
import SertifSection from "./SertifSection/Sertifsection";

import {
  HoveredLink,
  Menu,
  MenuItem,
  NavbarProjects,
} from "./components/Navbar";
import { cn } from "./lib/utils";
import { useState } from "react";
import { FooterWithLogo } from "./components/Footer";

function App() {
  return (
    <>
      {" "}
      <div className="bg-black text-neutral-100 min-h-screen">
        <div className="relative w-full flex items-center justify-center">
          <Navbar className="top-2" />
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
        <div id="sertif">
          <SertifSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
        <FooterWithLogo />
      </div>
    </>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ",
        className
      )}
    >
      <Menu setActive={setActive}>
        <div className="flex items-center justify-around w-full">
          {/* Logo Kiri */}
          <div className="text-white font-bold text-2xl flex items-center">
            {"</>"}
          </div>

          <div className="flex items-center text-xl space-x-8">
            <MenuItem setActive={setActive} active={active} item="About Me">
              <div className="flex flex-col space-y-4 text-lg md:text-xl font-semibold bg-black/90 text-white rounded-xl shadow-lg p-4 border-none">
                <HoveredLink
                  href="#web-dev"
                  onClick={() => {
                    const el = document.getElementById("profile-card");
                    if (el)
                      el.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                  }}
                >
                  Web Development
                </HoveredLink>
                <HoveredLink
                  href="#interface-design"
                  onClick={() => {
                    const el = document.getElementById("profile-card");
                    if (el)
                      el.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                  }}
                >
                  UI/UX Design
                </HoveredLink>
                <HoveredLink
                  href="#seo"
                  onClick={() => {
                    const el = document.getElementById("profile-card");
                    if (el)
                      el.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                  }}
                >
                  Graphic Design
                </HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Portfolio">
              <div className="grid grid-cols-2 gap-6 p-4 bg-black/90 text-white rounded-xl shadow-lg border-none">
                <NavbarProjects />
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Contact">
              <div className="flex flex-col space-y-4 text-lg md:text-xl font-semibold bg-black/90 text-white rounded-xl shadow-lg p-4 border-none">
                <HoveredLink
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("contact");
                    if (el)
                      el.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                  }}
                  className="font-bold text-lg hover:bg-transparent cursor-pointer"
                >
                  Contact Me
                </HoveredLink>
              </div>
            </MenuItem>
          </div>

          {/* Logo Kanan */}
          <div className="text-white font-bold text-xl flex items-center">
            {"</>"}
          </div>
        </div>
      </Menu>
    </div>
  );
}

export default App;
