import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

// Utility function for class names
const cn = (...classes: (string | boolean | undefined | null)[]) =>
  classes.filter(Boolean).join(" ");

// Dummy/Placeholder components
const Menu = ({ children }: { children: React.ReactNode }) => (
  <nav>{children}</nav>
);
const HoveredLink = (
  props: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: React.ReactNode;
  }
) => <a {...props}>{props.children}</a>;
const NavbarProjects = () => <div>Projects</div>;

// Mobile Menu Item Component
export const MobileMenuItem = ({
  title,
  children,
  isOpen,
  onToggle,
}: {
  title: string;
  children?: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <div className="w-full">
      <button
        onClick={onToggle}
        className="w-full text-left py-4 px-6 text-white text-lg font-bold hover:bg-white/10 transition-all duration-300 flex items-center justify-between group"
      >
        <span className="group-hover:translate-x-1 transition-transform duration-300">
          {title}
        </span>
        {children && (
          <motion.svg
            className="w-5 h-5 text-white"
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </motion.svg>
        )}
      </button>
      <AnimatePresence>
        {isOpen && children && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-8 py-3 bg-white/5 backdrop-blur-sm">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Enhanced Hamburger Icon Component with Y2K style
export const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => (
  <div className="w-8 h-8 flex flex-col justify-center items-center cursor-pointer group relative">
    <motion.span
      className="w-6 h-1 bg-white block origin-center rounded-full"
      animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    />
    <motion.span
      className="w-6 h-1 bg-white block mt-1.5 rounded-full"
      animate={isOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    />
    <motion.span
      className="w-6 h-1 bg-white block mt-1.5 origin-center rounded-full"
      animate={isOpen ? { rotate: -45, y: -12 } : { rotate: 0, y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    />
    {/* Y2K style hover effect */}
    <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-all duration-300 scale-150"></div>
  </div>
);

// Mobile NavbarProjects Component
export const MobileNavbarProjects = () => {
  return (
    <div className="space-y-3">
      <NavbarProjects />
    </div>
  );
};

// Y2K style decoration components with white color
const Y2KDecoration = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-2 left-4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
    <div className="absolute top-6 right-8 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-1000"></div>
    <div className="absolute bottom-3 left-12 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-2000"></div>
    <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-700"></div>
    <div className="absolute bottom-4 right-12 w-1 h-1 bg-white rounded-full animate-pulse delay-1500"></div>
  </div>
);

const Y2KGeometricShape = () => (
  <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border-2 border-white/20 animate-spin-slow"></div>
);

const Y2KCornerDecoration = () => (
  <>
    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white rounded-tl-xl"></div>
    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white rounded-tr-xl"></div>
    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white rounded-bl-xl"></div>
    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white rounded-br-xl"></div>
  </>
);

function NavbarContainer({ className }: { className?: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target;
      if (
        isMobileMenuOpen &&
        !(target as Element).closest(".mobile-menu-container")
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleMobileItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* Desktop Navbar */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-6 inset-x-0 max-w-4xl mx-auto z-50 hidden md:block px-4 transition-all duration-500",
          className
        )}
      >
        <div
          className={cn(
            "relative  backdrop-blur-2xl border  rounded-full py-4 shadow-lg transition-all duration-500 overflow-hidden",
            scrolled ? " border-white backdrop-blur-md shadow-xl" : ""
          )}
        >
          {/* Y2K Decorations */}
          <Y2KDecoration />
          <Y2KGeometricShape />
          <Y2KCornerDecoration />

          <Menu>
            <div className="relative flex items-center justify-between w-full px-8">
              {/* Enhanced Logo with Y2K style */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-white font-black text-3xl flex items-center rounded-2xl  transition-all duration-300 cursor-pointer group relative overflow-hidden"
              >
                <img src={logo} alt="" className="w-12 h-auto" />
                <div className="absolute inset-0 bg-white/0 transition-all duration-500 rounded-2xl"></div>
              </motion.div>

              {/* Enhanced Navigation Links with Y2K style */}
              <div className="flex items-center text-lg space-x-1">
                {[
                  { name: "About Me", id: "about" },
                  { name: "Projects", id: "projects" },
                  { name: "Contact", id: "contact" },
                ].map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                    whileHover={{ y: -2 }}
                  >
                    <HoveredLink
                      href={`#${item.id}`}
                      onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                        e.preventDefault();
                        scrollToSection(item.id);
                      }}
                      className="relative text-white/90 font-bold hover:text-white transition-all duration-300 px-5 py-3 rounded-2xl group overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300 rounded-2xl"></div>
                      <div className="absolute bottom-0 left-1/2 w-0 h-1 bg-white group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full"></div>
                      <span className="relative">{item.name}</span>
                    </HoveredLink>
                  </motion.div>
                ))}
              </div>
            </div>
          </Menu>
        </div>
      </motion.div>

      {/* Enhanced Mobile Navbar with Y2K style */}
      <div className="fixed top-0 left-0 right-0 z-50 md:hidden mobile-menu-container">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="backdrop-blur-sm border-b border-white/20"
        >
          <div className="flex items-center justify-between px-6 py-2">
            {/* Enhanced Mobile Logo with Y2K style */}
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="text-white font-black text-2xl"
            >
              <img src={logo} alt="" className="w-12 h-auto" />
            </motion.div>

            {/* Enhanced Hamburger Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none p-2 relative"
              aria-label="Toggle menu"
            >
              <HamburgerIcon isOpen={isMobileMenuOpen} />
            </motion.button>
          </div>
        </motion.div>

        {/* Enhanced Mobile Menu Overlay with Y2K style */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 bottom-0 right-0 w-4/5 backdrop-blur-md z-40 flex flex-col pt-24 "
            >
              {/* Close Button (X) */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full  flex items-center justify-center border border-white hover:bg-white/20 transition-all duration-300"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>

              <div className="flex-1 px-4 space-y-3">
                {[
                  { name: "About Me", id: "about" },
                  { name: "Projects", id: "projects" },
                  { name: "Contact", id: "contact" },
                ].map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                    onClick={() => {
                      scrollToSection(item.id);
                      handleMobileItemClick();
                    }}
                    className="w-full text-left py-3 px-4 text-white text-xl  hover:bg-white/10 transition-all duration-300 rounded-2xl group relative overflow-hidden border border-white/80"
                  >
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-500 rounded-2xl"></div>
                    <span className="relative group-hover:translate-x-2 transition-transform duration-300">
                      {item.name}
                    </span>
                    <div className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Enhanced Mobile Footer with Y2K style */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="pb-8 pt-4 px-6"
              >
                <div className="flex justify-center items-center space-x-6">
                  {/* Social Media Icons */}
                  <div className="flex space-x-4">
                    {/* TikTok Icon */}
                    <a
                      href="https://tiktok.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 hover:bg-white/30 transition-all duration-300"
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                      </svg>
                    </a>

                    {/* LinkedIn Icon */}
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 hover:bg-white/30 transition-all duration-300"
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>

                    {/* GitHub Icon */}
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 hover:bg-white/30 transition-all duration-300"
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default NavbarContainer;
