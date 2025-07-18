import React from "react";
import CurvedLoop from "./CurvedLoop";
import ProfileCard from "./ProfileCard";
import ScrollReveal from "./ScrollReveal";
import nanta2 from "../assets/nanta1.png";
import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";
import { useRef, useState, useEffect } from "react";
import { InfiniteMovingCardsDemo } from "./Experience";

const AboutSection: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!cardRef.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#000",
        color: "#fff",
        width: "100%",
        padding: 0,
        paddingTop: 0,
      }}
    >
      <div
        style={{ width: "100%", marginBottom: "0.5rem", marginTop: "-20rem" }}
      >
        <CurvedLoop marqueeText="Fullstack Developer ✦ Graphic Designer ✦ " />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "100%",
          maxWidth: 1200,
          gap: 32,
          marginBottom: "2rem",
        }}
      >
        <div
          style={{
            flex: "0 0 320px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ width: "100%" }}
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
        </div>
        <div style={{ flex: 1, padding: 24 }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              color: "transparent",
              background: "linear-gradient(90deg, #00C9FF, #92FE9D)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              fontWeight: "bold",
              fontSize: 40,
              textAlign: "left",
              marginBottom: "1rem",
              textShadow: "0 2px 8px rgba(0,0,0,0.2)",
              letterSpacing: 2,
              // borderBottom: "2px solid #00C9FF",
              display: "inline-block",
            }}
          >
            Hi! I'm Nanta
          </motion.h2>
          <div
            style={{
              maxHeight: "700px",
              overflow: "hidden",
              textAlign: "justify",
            }}
          >
            <ScrollReveal
              baseOpacity={0.5}
              enableBlur={true}
              baseRotation={5}
              blurStrength={10}
              textClassName="text-xs"
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
      <div className="w-full max-w-6xl mx-auto px-4 mb-2">
        <h2 className="text-4xl font-bold text-white mb-1">Experience</h2>
        <p className="text-gray-300 text-lg">My professional journey</p>
      </div>
      {/* Experience Section */}
      {/* Pastikan komponen Experience diimport dan dipanggil di sini */}
      {/* <Experience /> */}
      <InfiniteMovingCardsDemo />
      {/* GitHub Calendar Container */}
      <div
        style={{
          width: "100%",
          maxWidth: 1200,
          padding: "0 24px",
          marginBottom: "1rem",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div
            className="flex justify-center rounded-2xl  bg-[linear-gradient(180deg,#27272a,#18181b)] p-8"
            style={{
              display: "flex",
              justifyContent: "center",
              borderRadius: "16px",
              padding: "30px",
            }}
          >
            <div
              style={{
                transform: "scale(1.2)",
                transformOrigin: "center",
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
