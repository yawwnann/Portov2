import { ExpandableCardDemo } from "./components/ExpandableCards";
import { StickyScrollRevealDemo } from "./components/sticky-scroll-reveal";
import { ContainerScroll } from "./components/container-scroll-animation";
import { motion, useInView } from "framer-motion";

import GraphicDesigner from "../assets/Project/desain/Desain.png";
import { useRef } from "react";

const ProjectSection: React.FC = () => {
  const refProjects = useRef(null);
  const refUIUX = useRef(null);
  const refGraphic = useRef(null);

  const isProjectsInView = useInView(refProjects, {
    once: true,
    margin: "-100px",
  });
  const isUIUXInView = useInView(refUIUX, { once: true, margin: "-100px" });
  const isGraphicInView = useInView(refGraphic, {
    once: true,
    margin: "-100px",
  });

  return (
    <section className="w-full max-w-6xl mx-auto my-32 px-4">
      {/* Projects Section */}
      <div ref={refProjects}>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isProjectsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-lg md:text-5xl font-normal pb-4 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300"
        >
          Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={isProjectsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-neutral-400 mb-6 max-w-2xl mx-auto text-base md:text-lg"
        >
          Some of the projects I have worked on.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isProjectsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <ExpandableCardDemo />
        </motion.div>
      </div>

      {/* UI/UX Section */}
      <div ref={refUIUX} className="mt-24">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isUIUXInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-lg md:text-5xl font-normal pb-4 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300"
        >
          UI / UX
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={isUIUXInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-neutral-400 mb-6 max-w-2xl mx-auto text-base md:text-lg"
        >
          A collection of UI/UX design works I have created.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isUIUXInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <StickyScrollRevealDemo />
        </motion.div>
      </div>

      {/* Graphic Designer Section */}
      <div ref={refGraphic} className="mt-24">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isGraphicInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-lg md:text-5xl font-normal pb-4 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300"
        >
          Graphic Designer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={isGraphicInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-neutral-400 mb-6 max-w-2xl mx-auto text-base md:text-lg"
        >
          A collection of graphic design works such as posters, banners, and
          other visual content.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isGraphicInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <ContainerScroll
            titleComponent={
              <span className="text-3xl font-bold text-white"></span>
            }
          >
            <img
              src={GraphicDesigner}
              alt="Graphic Designer Showcase"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full object-left-top"
              draggable={false}
            />
          </ContainerScroll>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;
