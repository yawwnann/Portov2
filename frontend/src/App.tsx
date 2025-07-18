import "./App.css";
import Herosection from "./Herosection/Herosection";
import AboutSection from "./AboutSection/AboutSection";
import SkillSection from "./SkillSection/SkillSection";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./components/Navbar";
import { cn } from "./lib/utils";
import { useState } from "react";

function App() {
  return (
    <>
      <div className="relative w-full flex items-center justify-center">
        <Navbar className="top-2" />
      </div>
      <Herosection />
      <AboutSection />
      <SkillSection />
      {/* Komponen lain */}
    </>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <div className="flex items-center justify-around w-full">
          {/* Logo Kiri */}
          <div className="text-white font-bold text-xl flex items-center">
            {"</>"}
          </div>

          <div className="flex items-center space-x-8">
            <MenuItem setActive={setActive} active={active} item="About Me">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                <HoveredLink href="/interface-design">
                  Interface Design
                </HoveredLink>
                <HoveredLink href="/seo">
                  Search Engine Optimization
                </HoveredLink>
                <HoveredLink href="/branding">Branding</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Portfolio">
              <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                <ProductItem
                  title="Algochurn"
                  href="https://algochurn.com"
                  src="https://assets.aceternity.com/demos/algochurn.webp"
                  description="Prepare for tech interviews like never before."
                />
                <ProductItem
                  title="Tailwind Master Kit"
                  href="https://tailwindmasterkit.com"
                  src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                  description="Production ready Tailwind css components for your next project"
                />
                <ProductItem
                  title="Moonbeam"
                  href="https://gomoonbeam.com"
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                  description="Never write from scratch again. Go from idea to blog in minutes."
                />
                <ProductItem
                  title="Rogue"
                  href="https://userogue.com"
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                  description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                />
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Contact">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/hobby">Hobby</HoveredLink>
                <HoveredLink href="/individual">Individual</HoveredLink>
                <HoveredLink href="/team">Team</HoveredLink>
                <HoveredLink href="/enterprise">Enterprise</HoveredLink>
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
