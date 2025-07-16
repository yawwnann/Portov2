import React from "react";
import CurvedLoop from "./CurvedLoop";
import ProfileCard from "./ProfileCard";
import ScrollReveal from "./ScrollReveal";
import nanta2 from "../assets/nanta1.png";

const AboutSection: React.FC = () => {
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
        }}
      >
        <div
          style={{
            flex: "0 0 320px",
            display: "flex",
            justifyContent: "center",
          }}
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
        </div>
        <div style={{ flex: 1, padding: 24 }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#fff" }}>
            About me
          </h2>
          <div
            style={{
              maxHeight: "700px",
              overflow: "hidden",
              textAlign: "justify",
            }}
          >
            <ScrollReveal
              baseOpacity={0}
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
    </section>
  );
};

export default AboutSection;
