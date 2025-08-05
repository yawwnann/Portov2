// import Aurora from "./Background/Aurora";
import BlurText from "./HeroText/HeroText";
import CircularText from "./HeroText/CircularText";
import HeroIconY2K2 from "./HeroText/HeroIconY2K2";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DarkVeil from "./Background/DarkVeil";

export default function Herosection() {
  const [animateIn, setAnimateIn] = useState(false);
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  useEffect(() => {
    setAnimateIn(true);
  }, []);

  return (
    <div
      className="herosection-container bg-black"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "600px", // Ensure minimum height on very small screens
        overflow: "hidden",
      }}
    >
      <DarkVeil />

      {/* Circular Text - More responsive positioning */}
      <div
        className={`absolute top-2 left-2 xs:top-3 xs:left-3 sm:top-4 sm:left-4 md:top-6 md:left-6 lg:top-8 lg:left-8 z-10 ${
          animateIn ? "animate-hero-fadein" : ""
        }`}
      >
        <div className="scale-50 xs:scale-60 sm:scale-75 md:scale-90 lg:scale-100 origin-top-left">
          <CircularText
            text="YAWWNAN ✦ YAWWNAN ✦ YAWWNAN ✦ "
            onHover="speedUp"
            spinDuration={20}
            className="custom-class"
          />
        </div>
      </div>

      {/* Hero Icon - More responsive positioning */}
      <div className="absolute right-2 bottom-2 xs:right-3 xs:bottom-3 sm:right-4 sm:bottom-4 md:right-6 md:bottom-6 lg:right-8 lg:bottom-8 z-10">
        <div
          className={`scale-60 xs:scale-70 sm:scale-80 md:scale-90 lg:scale-100 ${
            animateIn ? "animate-heroicon-fadein" : ""
          }`}
        >
          <HeroIconY2K2 />
        </div>
      </div>

      {/* Main Content Container */}
      <div
        className="absolute inset-0 z-2 pointer-events-none flex flex-col items-center justify-center px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16"
        style={{
          paddingTop: "10vh",
          paddingBottom: "15vh",
        }}
      >
        {/* Hero Text */}
        <div className="text-center mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <BlurText
            text="YUWANANTA VALENCIA AFSHANDY"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className={`
              text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 
              font-bold leading-tight xs:leading-tight sm:leading-tight md:leading-tight lg:leading-tight
              max-w-full break-words
              ${animateIn ? "animate-hero-fadein" : ""}
            `}
          />
        </div>

        {/* Animated Buttons Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="
            flex flex-col justify-center xs:flex-col sm:flex-row 
            gap-3 xs:gap-4 sm:gap-4 md:gap-6 lg:gap-8 
            w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl
            pointer-events-auto
          "
          style={{ pointerEvents: "auto" }}
        >
          {/* Get Started Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow:
                "0 6px 20px rgba(255,255,255,0.4), 0 0 15px rgba(0, 201, 255, 0.3)",
              borderColor: "rgba(0, 201, 255, 0.8)",
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              color: "rgba(0, 0, 0, 0.9)",
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.4 }}
            className="
              w-full sm:w-auto
              px-4 py-2.5 xs:px-5 xs:py-3 sm:px-6 sm:py-3 md:px-7 md:py-3.5 lg:px-8 lg:py-4
              bg-black text-white border-2 md:border-3 border-white 
              rounded-lg sm:rounded-xl
              text-sm xs:text-base sm:text-base md:text-lg lg:text-xl
              font-semibold cursor-pointer transition-all duration-300 
              relative overflow-hidden
              hover:shadow-lg
              min-h-[44px] sm:min-h-[48px] md:min-h-[52px]
            "
            style={{ fontFamily: "sans-serif" }}
            onClick={() => console.log("Get Started clicked")}
          >
            Graphic Designer
          </motion.button>

          {/* Learn More Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow:
                "0 6px 20px rgba(255,255,255,0.2), 0 0 15px rgba(146, 254, 157, 0.3)",
              borderColor: "rgba(146, 254, 157, 0.8)",
              backgroundColor: "rgba(0, 0, 0, 0.95)",
              color: "rgba(255, 255, 255, 0.9)",
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.6 }}
            className="
              w-full sm:w-auto
              px-4 py-2.5 xs:px-5 xs:py-3 sm:px-6 sm:py-3 md:px-7 md:py-3.5 lg:px-8 lg:py-4
              bg-white text-black border-2 border-white 
              rounded-lg sm:rounded-xl
              text-sm xs:text-base sm:text-base md:text-lg lg:text-xl
              font-semibold cursor-pointer transition-all duration-300 
              relative overflow-hidden
              hover:shadow-lg
              min-h-[44px] sm:min-h-[48px] md:min-h-[52px]
            "
            style={{ fontFamily: "sans-serif" }}
            onClick={() => console.log("Learn More clicked")}
          >
            Fullstack Developer
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
