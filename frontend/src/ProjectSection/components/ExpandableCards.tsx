"use client";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "../../hook/use-outside-click";
import { cards } from "./cardsData";

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
            className="fixed inset-0 bg-black/30 backdrop-blur-sm h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100] p-4">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-4 right-4 lg:hidden items-center justify-center bg-white/90 backdrop-blur-sm rounded-full h-10 w-10 z-10 shadow-lg"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>

            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[90%] sm:max-w-[600px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800"
            >
              <motion.div
                layoutId={`image-${active.title}-${id}`}
                className="relative"
              >
                <img
                  width={600}
                  height={400}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-64 sm:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70" />
              </motion.div>

              <div className="p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-6">
                  <div className="flex-1">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-2xl text-neutral-800 dark:text-white mb-2"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-300 mb-4"
                    >
                      {active.description}
                    </motion.p>

                    {Array.isArray(active.techStack) &&
                      active.techStack.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {active.techStack.map((tech: string, idx: number) => (
                            <span
                              key={idx}
                              className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 rounded-full px-3 py-1 text-xs font-medium"
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
                    className="px-6 py-3 text-sm font-semibold rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>

                <div className="mt-6">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-700 dark:text-neutral-300 text-base h-48 md:h-fit overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-neutral-300 dark:scrollbar-thumb-neutral-700 scrollbar-track-transparent"
                  >
                    {active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <AnimatePresence>
          {cards.map((card: Card, idx: number) => (
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              key={card.title}
              onClick={() => setActive(card)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-700 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-500 h-full flex flex-col"
            >
              <div className="relative overflow-hidden">
                <motion.div
                  layoutId={`image-${card.title}-${id}`}
                  className="h-48 overflow-hidden"
                >
                  <img
                    width={400}
                    height={300}
                    src={card.src}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="text-white font-bold text-xl drop-shadow-md"
                  >
                    {card.title}
                  </motion.h3>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <div className="mb-4">
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-bold text-lg text-neutral-800 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.description}-${id}`}
                    className="text-neutral-600 dark:text-neutral-300 text-sm line-clamp-2"
                  >
                    {card.description}
                  </motion.p>
                </div>

                {Array.isArray(card.techStack) && card.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                    {card.techStack
                      .slice(0, 3)
                      .map((tech: string, idx: number) => (
                        <span
                          key={idx}
                          className="bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-full px-2 py-1 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    {card.techStack.length > 3 && (
                      <span className="bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-full px-2 py-1 text-xs font-medium">
                        +{card.techStack.length - 3}
                      </span>
                    )}
                  </div>
                )}

                <div className="mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-700">
                  <motion.span
                    layoutId={`cta-${card.title}-${id}`}
                    className="text-sm font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1"
                  >
                    {card.ctaText}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.span>
                </div>
              </div>
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 text-neutral-800"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
