import React from "react";

const spinStyle: React.CSSProperties = {
  animation: "spin 5s linear infinite",
  display: "block",
  transformOrigin: "50% 50%",
};

if (
  typeof window !== "undefined" &&
  !document.getElementById("spin-keyframes")
) {
  const style = document.createElement("style");
  style.id = "spin-keyframes";
  style.innerHTML = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`;
  document.head.appendChild(style);
}

// Tambahkan props className
interface HeroIconY2K2Props {
  className?: string;
}

const HeroIconY2K2: React.FC<HeroIconY2K2Props> = ({ className }) => (
  <svg
    style={spinStyle}
    className={`w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 ${className}`}
    viewBox="0 0 640 640"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="translate(64,64)">
      <path
        d="M498.5,195.2v-1.5c0-99.4-80.8-180.2-180.2-180.2h-1.5L256,215.1L195.6,14.9l-0.4-1.4h-1.5c-99.4,0-180.2,80.8-180.2,180.2   v1.5L215.1,256L14.9,316.4l-1.4,0.4v1.5c0,99.4,80.8,180.2,180.2,180.2h1.5L256,296.9l60.4,200.2l0.4,1.4h1.5   c99.4,0,180.2-80.8,180.2-180.2v-1.5L296.9,256l200.2-60.4L498.5,195.2z"
        fill="white"
      />
    </g>
  </svg>
);

export default HeroIconY2K2;
