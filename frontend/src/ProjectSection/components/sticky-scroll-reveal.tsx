"use client";
import React, { useEffect, useRef } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const linearGradients = React.useMemo(
    () => [
      "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
      "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
      "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
    ],
    []
  );

  useEffect(() => {
    // Hapus backgroundColors dan useState yang tidak terpakai
  }, [activeCard, linearGradients]);

  return (
    <motion.div
      animate={
        {
          // Hapus backgroundColors dan useState yang tidak terpakai
        }
      }
      className="relative flex h-[30rem] justify-center space-x-20 overflow-y-auto rounded-md p-10 sticky-scroll-custom"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => {
            let state = "below";
            if (activeCard === index) state = "active";
            else if (index < activeCard) state = "above";
            return (
              <motion.div
                key={item.title + index}
                className="my-20"
                initial={{ opacity: 0.3, y: 40 }}
                animate={
                  state === "active"
                    ? { opacity: 1, y: 0 }
                    : state === "above"
                    ? { opacity: 0.3, y: -40 }
                    : { opacity: 0.3, y: 40 }
                }
                transition={{ type: "spring", stiffness: 80, damping: 20 }}
              >
                <h2 className="text-2xl font-bold text-slate-100">
                  {item.title}
                </h2>
                <p className="text-kg mt-10 max-w-sm text-slate-300">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{
          background: linearGradients[activeCard % linearGradients.length],
        }}
        className={cn(
          "sticky top-10 hidden h-80 w-[30rem] overflow-hidden rounded-md bg-white lg:block",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};

const content = [
  {
    title: "Redesign BRImo Mobile App",
    description:
      "A redesign of the BRImo mobile application to enhance the user experience in conducting digital banking transactions. This design emphasizes easy navigation, a modern visual style, and quick access to key features such as transfers, payments, and balance monitoring.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-black">
        <img
          src="/Project/uiux/Presentation-Brimo.png"
          alt="Redesign BRImo Mobile App"
          className="max-h-60 w-auto object-contain rounded-lg shadow"
        />
      </div>
    ),
  },
  {
    title: "UI/UX Hotel Booking App",
    description:
      "Designing the UI/UX of a hotel booking app that makes it easy for users to search, select, and book hotel rooms online. The focus is on a clean interface, comprehensive search filters, and an efficient booking process.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-black">
        <img
          src="/Project/uiux/Presentation-Hotel.png"
          alt="UI/UX Hotel Booking App"
          className="max-h-60 w-auto object-contain rounded-lg shadow"
        />
      </div>
    ),
  },

  {
    title: "Web-Based Translator App",
    description:
      "A web-based language translator app design featuring voice input, automatic language detection, and instant translation results. The focus is on ease of use and an intuitive interface.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-black">
        <img
          src="/Project/uiux/Presentation-Translate.png"
          alt="Web-Based Translator App"
          className="max-h-60 w-auto object-contain rounded-lg shadow"
        />
      </div>
    ),
  },
  {
    title: "ViaPulsa Top-Up & Payment App",
    description:
      "A digital top-up and payment application design featuring a simple transaction flow, a clear purchase history view, and easy access to various payment services.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-black">
        <img
          src="/Project/uiux/Presentation-ViaPulsa.png"
          alt="ViaPulsa Top-Up & Payment App"
          className="max-h-60 w-auto object-contain rounded-lg shadow"
        />
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}
