import Aurora from "./Background/Aurora";
import BlurText from "./HeroText/HeroText";
import CircularText from "./HeroText/CircularText";
import HeroIconY2K2 from "./HeroText/HeroIconY2K2";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Herosection() {
  const [animateIn, setAnimateIn] = useState(false);
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  useEffect(() => {
    setAnimateIn(true);
  }, []);
  // Hapus semua logic terkait imageData dan MetallicPaint
  return (
    <div
      className="herosection-container bg-black"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Aurora />
      <div
        className={animateIn ? "animate-hero-fadein" : ""}
        style={{ position: "absolute", top: 20, left: 20, zIndex: 10 }}
      >
        <CircularText
          text="YAWWNAN ✦ YAWWNAN ✦ YAWWNAN ✦ "
          onHover="speedUp"
          spinDuration={20}
          className="custom-class"
        />
      </div>
      <div
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          zIndex: 10,
          padding: 16,
        }}
      >
        <div className={animateIn ? "animate-heroicon-fadein" : ""}>
          <HeroIconY2K2 />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          textAlign: "center",
          zIndex: 2,
          pointerEvents: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BlurText
          text="YUWANANTA VALENCIA AFSHANDY"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className={`text-2xl font-bold ${
            animateIn ? "animate-hero-fadein" : ""
          }`}
        />

        {/* Animated Buttons Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "40px",
            pointerEvents: "auto",
          }}
        >
          {/* Get Started Button */}
          <motion.button
            whileHover={{
              scale: 1.08,
              y: -4,
              boxShadow:
                "0 8px 25px rgba(255,255,255,0.4), 0 0 20px rgba(0, 201, 255, 0.3)",
              borderColor: "rgba(0, 201, 255, 0.8)",
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              color: "rgba(0, 0, 0, 0.9)",
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.4 }}
            style={{
              padding: "12px 24px",
              backgroundColor: "black",
              color: "white",
              border: "3px solid white",
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
              fontFamily: "sans-serif",
              position: "relative",
              overflow: "hidden",
            }}
            onClick={() => console.log("Get Started clicked")}
          >
            Get Started
          </motion.button>

          {/* Learn More Button */}
          <motion.button
            whileHover={{
              scale: 1.08,
              y: -4,
              boxShadow:
                "0 8px 25px rgba(255,255,255,0.2), 0 0 20px rgba(146, 254, 157, 0.3)",
              borderColor: "rgba(146, 254, 157, 0.8)",
              backgroundColor: "rgba(0, 0, 0, 0.95)",
              color: "rgba(255, 255, 255, 0.9)",
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.6 }}
            style={{
              padding: "12px 24px",
              backgroundColor: "white",
              color: "black",
              border: "2px solid white",
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
              fontFamily: "sans-serif",
              position: "relative",
              overflow: "hidden",
            }}
            onClick={() => console.log("Learn More clicked")}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
