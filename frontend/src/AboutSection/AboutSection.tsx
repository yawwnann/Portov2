import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";
import CurvedLoop from "./components/CurvedLoop";
import ProfileCard from "./components/ProfileCard";
import ScrollReveal from "./components/ScrollReveal";
import { InfiniteMovingCardsDemo } from "./components/Experience";

import nanta2 from "../assets/nanta1.png";

const AboutSection: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!cardRef.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center bg-black text-white w-full p-0 pt-0">
      {/* Curved Loop */}
      <div className="w-full mb-2 hidden md:block  md:-mt-40">
        <CurvedLoop marqueeText="Fullstack Developer ✦ Graphic Designer ✦ " />
      </div>

      {/* Profile + Description */}
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 w-full max-w-6xl px-4 md:px-6 mb-8 items-start">
        {/* Profile Card */}
        <motion.div
          ref={cardRef}
          id="profile-card"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="w-full max-w-xs mx-auto md:mx-0"
        >
          <ProfileCard
            name="Yuwananta"
            title="Fullstack Developer"
            handle="yawwnan"
            status="Online"
            contactText="Contact Me"
            avatarUrl={nanta2}
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => console.log("Contact clicked")}
          />
        </motion.div>

        {/* Textual Description */}
        <div className="flex flex-col justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-left text-transparent md:ml-20 bg-clip-text bg-gradient-to-r from-cyan-400 to-green-300 font-bold text-[clamp(28px,5vw,40px)] mb-4"
          >
            Hi! I'm Nanta
          </motion.h2>

          <div className="max-h-[500px] md:ml-20 overflow-hidden text-justify">
            <ScrollReveal
              baseOpacity={0.5}
              enableBlur={true}
              baseRotation={5}
              blurStrength={10}
            >
              Creative and solution-oriented individual with dual expertise as a
              Fullstack Developer and Graphic Designer. Proficient in building
              robust and responsive web applications, as well as crafting
              captivating and user-friendly visuals. Adept at translating
              business needs into innovative digital solutions. Passionate about
              continuous learning and staying up-to-date with the latest
              technologies and trends in the industry.
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Experience Section Title */}
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 mb-2">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-1">
          Experience
        </h2>
        <p className="text-gray-300 text-base md:text-lg">
          My professional journey
        </p>
      </div>

      {/* Experience Cards Animation */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 overflow-hidden">
        <InfiniteMovingCardsDemo />
      </div>

      {/* GitHub Calendar Container */}
      <div
        style={{
          width: "100%",
          maxWidth: 1100,
          padding: "0 24px",
          marginBottom: "1rem",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div
            className="flex justify-center rounded-2xl  bg-[linear-gradient(180deg,#27272a,#18181b)] p-8"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              borderRadius: "16px",
              padding: "30px",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: 1000,
                overflowX: "auto",
                WebkitOverflowScrolling: "touch",
                msOverflowStyle: "none" /* IE 10+ */,
                scrollbarWidth: "none" /* Firefox */,

                display: "flex",
                justifyContent: "center",
              }}
            >
              <GitHubCalendar
                username="yawwnann"
                theme={{
                  light: [
                    "#161b22",
                    "#0e4429",
                    "#006d32",
                    "#26a641",
                    "#39d353",
                  ],
                  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default AboutSection;
