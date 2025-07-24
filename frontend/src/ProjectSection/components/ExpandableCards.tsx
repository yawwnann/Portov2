"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "../../hook/use-outside-click";
import { cards } from "./cardsData";

// Definisikan tipe Card agar bisa digunakan untuk typing
interface Card {
  description: string;
  title: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  techStack: string[];
  content: string;
}

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={400}
                  height={400}
                  src={active.src}
                  alt={active.title}
                  className="w-full max-w-5xl mx-auto aspect-[16/9] rounded-xl object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                    {Array.isArray(active.techStack) &&
                      active.techStack.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {active.techStack.map((tech: string, idx: number) => (
                            <span
                              key={idx}
                              className="border border-emerald-500 text-emerald-400 rounded-full px-3 py-1 text-xs font-semibold bg-transparent"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-emerald-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 justify-center">
        <AnimatePresence>
          {cards.map((card: Card, idx: number) => (
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              key={card.title}
              onClick={() => setActive(card)}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group p-6 flex flex-col bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/50 rounded-2xl cursor-pointer w-[300px] transition-all duration-500 ease-out hover:bg-white dark:hover:bg-neutral-800 hover:border-emerald-300/50 dark:hover:border-emerald-500/50 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] dark:hover:shadow-[0_20px_50px_rgba(59,_130,_246,_0.15)] hover:-translate-y-3 hover:scale-[1.02]"
            >
              <div className="flex gap-4 flex-col w-full items-center">
                <motion.div
                  layoutId={`image-${card.title}-${id}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 + 0.12 }}
                  className="relative overflow-hidden rounded-xl"
                >
                  <img
                    width={400}
                    height={200}
                    src={card.src}
                    alt={card.title}
                    className="w-full max-w-2xl aspect-[16/9] rounded-xl object-cover object-top mx-auto mb-2 transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                </motion.div>
                <div className="flex justify-center items-center flex-col w-full">
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.08 + 0.22 }}
                    className="font-bold text-neutral-800 dark:text-neutral-200 text-center text-xl transition-colors duration-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.description}-${id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.08 + 0.32 }}
                    className="text-neutral-600 dark:text-neutral-400 text-center text-base mt-2 transition-colors duration-300 group-hover:text-neutral-700 dark:group-hover:text-neutral-300"
                  >
                    {card.description}
                  </motion.p>
                </div>
              </div>

              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-r from-emerald-400/5 via-blue-400/5 to-purple-400/5" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
