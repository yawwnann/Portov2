import { motion } from "framer-motion";
import type { Transition } from "framer-motion";
import { useEffect, useRef, useState, useMemo } from "react";

type BlurTextProps = {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  threshold?: number;
  rootMargin?: string;
  animationFrom?: Record<string, string | number>;
  animationTo?: Array<Record<string, string | number>>;
  easing?: (t: number) => number;
  onAnimationComplete?: () => void;
  stepDuration?: number;
  showSubtitle?: boolean;
  subtitleText?: string;
};

const buildKeyframes = (
  from: Record<string, string | number>,
  steps: Array<Record<string, string | number>>
): Record<string, Array<string | number>> => {
  const keys = new Set<string>([
    ...Object.keys(from),
    ...steps.flatMap((s) => Object.keys(s)),
  ]);

  const keyframes: Record<string, Array<string | number>> = {};
  keys.forEach((k) => {
    keyframes[k] = [from[k], ...steps.map((s) => s[k])];
  });
  return keyframes;
};

const BlurText: React.FC<BlurTextProps> = ({
  text = "",
  delay = 200,
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px",
  animationFrom,
  animationTo,
  easing = (t) => t,
  onAnimationComplete,
  stepDuration = 0.35,
  showSubtitle = true,
  subtitleText = "Building creative and functional digital solutions.",
}) => {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const [inView, setInView] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  const ref = useRef<HTMLParagraphElement>(null);

  // Handle window resize for responsive font sizing
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current as Element);
        }
      },
      { threshold: 0, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const defaultFrom = useMemo(
    () =>
      direction === "top"
        ? { filter: "blur(10px)", opacity: 0, y: -50 }
        : { filter: "blur(10px)", opacity: 0, y: 50 },
    [direction]
  );

  const defaultTo = useMemo(
    () => [
      {
        filter: "blur(5px)",
        opacity: 0.5,
        y: direction === "top" ? 5 : -5,
      },
      { filter: "blur(0px)", opacity: 1, y: 0 },
    ],
    [direction]
  );

  // Responsive font size calculation
  const getResponsiveFontSize = () => {
    if (windowWidth < 480) return 24; // xs screens
    if (windowWidth < 640) return 32; // sm screens
    if (windowWidth < 768) return 40; // md screens
    if (windowWidth < 1024) return 48; // lg screens
    if (windowWidth < 1280) return 56; // xl screens
    return 64; // 2xl+ screens
  };

  // Responsive line height
  const getResponsiveLineHeight = () => {
    if (windowWidth < 480) return 1.2;
    if (windowWidth < 640) return 1.3;
    return 1.4;
  };

  // Responsive letter spacing
  const getResponsiveLetterSpacing = () => {
    if (windowWidth < 480) return "-0.02em";
    if (windowWidth < 640) return "-0.025em";
    return "-0.03em";
  };

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;

  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) =>
    stepCount === 1 ? 0 : i / (stepCount - 1)
  );

  return (
    <div
      className="blur-text-container"
      style={{ width: "100%", maxWidth: "100%" }}
    >
      <p
        ref={ref}
        className={`blur-text ${className}`}
        style={{
          color: "white",
          textAlign: "center",
          zIndex: 2,
          width: "100%",
          maxWidth: "100%",
          pointerEvents: "none",
          fontSize: getResponsiveFontSize(),
          lineHeight: getResponsiveLineHeight(),
          letterSpacing: getResponsiveLetterSpacing(),
          margin: "0 auto",
          fontWeight: "bold",
          wordBreak: "break-word",
          hyphens: "auto",
          padding: "0 16px",
          boxSizing: "border-box",
        }}
      >
        {elements.map((segment, index) => {
          const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);

          const spanTransition: Transition = {
            duration: totalDuration,
            times,
            delay: (index * delay) / 1000,
          };
          (spanTransition as Record<string, unknown>).ease = easing;

          return (
            <motion.span
              key={index}
              initial={fromSnapshot}
              animate={inView ? animateKeyframes : fromSnapshot}
              transition={spanTransition}
              onAnimationComplete={
                index === elements.length - 1 ? onAnimationComplete : undefined
              }
              style={{
                display: "inline-block",
                willChange: "transform, filter, opacity",
                wordBreak: "keep-all",
                whiteSpace: segment === " " ? "pre" : "normal",
              }}
            >
              {segment === " " ? "\u00A0" : segment}
              {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
            </motion.span>
          );
        })}
      </p>

      {showSubtitle && (
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          style={{
            color: "rgba(255, 255, 255, 0.8)",
            textAlign: "center",
            marginTop: windowWidth < 480 ? 12 : windowWidth < 768 ? 16 : 20,
            fontSize: windowWidth < 480 ? 14 : windowWidth < 768 ? 16 : 18,
            lineHeight: 1.5,
            maxWidth: "90%",
            margin: `${
              windowWidth < 480 ? 12 : windowWidth < 768 ? 16 : 20
            }px auto 0`,
            padding: "0 16px",
            fontWeight: "400",
          }}
        >
          {subtitleText}
        </motion.p>
      )}
    </div>
  );
};

export default BlurText;
