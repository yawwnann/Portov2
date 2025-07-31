"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { cards } from "../ProjectSection/components/cardsData";

// Definisikan tipe Card sesuai struktur di cardsData.ts
interface Card {
  description: string;
  title: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  techStack: string[];
  content: string;
}

const transition = {
  type: "spring" as const,
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: React.ReactNode;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item as string)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="rounded-2xl overflow-hidden border-none "
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-full border border-transparent dark:border-white bg-transparent shadow-input backdrop-blur-md flex justify-center space-x-4 px-8 py-6 "
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
  onClick,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}) => {
  return (
    <a href={href} className="flex space-x-4 items-start" onClick={onClick}>
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-white">{title}</h4>
        <p className="text-neutral-300 text-sm max-w-[12rem]">{description}</p>
      </div>
    </a>
  );
};

export const HoveredLink = ({
  children,
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      {...rest}
      className="text-neutral-200 hover:text-white hover:bg-neutral-800 transition-colors rounded-lg px-2 py-1"
    >
      {children}
    </a>
  );
};

export const NavbarProjects = () => {
  const navbarProjects = cards.slice(0, 4) as Card[];
  return (
    <>
      {navbarProjects.map((card, idx) => (
        <ProductItem
          key={idx}
          title={card.title}
          description={card.description}
          href={card.ctaLink}
          src={card.src}
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById("projects");
            if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
        />
      ))}
    </>
  );
};

// Tambahkan komponen utama Navbar
export default function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <Menu setActive={setActive}>
      <MenuItem setActive={setActive} active={active} item="Home">
        {/* Kosong atau bisa tambahkan konten lain */}
      </MenuItem>
      <MenuItem setActive={setActive} active={active} item="About">
        {/* Kosong atau bisa tambahkan konten lain */}
      </MenuItem>
      <MenuItem setActive={setActive} active={active} item="Projects">
        <NavbarProjects />
      </MenuItem>
      <MenuItem setActive={setActive} active={active} item="Contact">
        {/* Kosong atau bisa tambahkan konten lain */}
      </MenuItem>
    </Menu>
  );
}
