import CircularGallery from "./components/CircularGallery";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Sertifsection() {
  const refSertif = useRef(null);
  const isSertifInView = useInView(refSertif, { once: true, margin: "-100px" });

  return (
    <section className="w-full  px-4">
      <div ref={refSertif}>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isSertifInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-lg md:text-5xl font-normal pb-4 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300"
        >
          Certification
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={isSertifInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-neutral-400 mb-6 max-w-2xl mx-auto text-base md:text-lg"
        >
          Collection of certifications that I have obtained.
        </motion.p>
        <div style={{ height: "600px", position: "relative" }}>
          <CircularGallery
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>
      </div>
    </section>
  );
}
