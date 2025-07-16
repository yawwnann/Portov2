import Aurora from "./Background/Aurora";
import BlurText from "./HeroText/HeroText";
import CircularText from "./HeroText/CircularText";
import HeroIconY2K2 from "./HeroIconY2K2";
import { useEffect, useState } from "react";

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
          text="WELCOME TO MY PORTOFOLIO"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className={`text-2xl font-bold ${
            animateIn ? "animate-hero-fadein" : ""
          }`}
        />

        {/* Buttons Container */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "40px",
            pointerEvents: "auto",
          }}
        >
          {/* Get Started Button */}
          <button
            style={{
              padding: "12px 24px",
              backgroundColor: "white",
              color: "black",
              border: "1px solid #333",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
              fontFamily: "sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 4px 12px rgba(255,255,255,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
            onClick={() => console.log("Get Started clicked")}
          >
            Get Started
          </button>

          {/* Learn More Button */}
          <button
            style={{
              padding: "12px 24px",
              backgroundColor: "black",
              color: "#ccc",
              border: "1px solid white",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
              fontFamily: "sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 4px 12px rgba(255,255,255,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
            onClick={() => console.log("Learn More clicked")}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
