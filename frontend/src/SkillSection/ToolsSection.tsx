import React, { useEffect, useRef, useState, useCallback } from "react";
import { cn } from "../lib/utils";

const tools = [
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "VSCode",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Postman",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
  {
    name: "Android Studio",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
  },
  {
    name: "Laragon",
    icon: "/icons/laragon.svg", // custom icon lokal
  },
  {
    name: "Photoshop",
    icon: "/icons/photoshop.svg", // custom icon lokal
  },
  {
    name: "Adobe Illustrator",
    icon: "/icons/adobe-illustrator-icon.png", // custom icon lokal hitam putih
  },
  {
    name: "Capcut",
    icon: "/icons/capcut-icon.svg", // custom icon lokal
  },
];

const InfiniteLogoMarquee = ({
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  const getDirection = useCallback(() => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  }, [direction]);

  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  }, [speed]);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });
      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [getDirection, getSpeed]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-8 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {tools.map((tool, idx) => (
          <li key={tool.name + idx} className="flex flex-col items-center">
            <img
              src={tool.icon}
              alt={tool.name}
              className={`w-16 h-16 mb-2 select-none ${
                tool.name === "GitHub"
                  ? "filter invert brightness-200"
                  : ["Photoshop", "Adobe Illustrator"].includes(tool.name)
                  ? "filter invert brightness-150"
                  : "grayscale opacity-80"
              }`}
              draggable={false}
            />
            <span className="text-xs text-neutral-300 font-medium">
              {tool.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Tambahkan animasi scroll di tailwind:
// @layer utilities { .animate-scroll { animation: scroll var(--animation-duration,40s) linear infinite; animation-direction: var(--animation-direction,forwards); } @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } } }

const ToolsSection: React.FC = () => {
  return (
    <section className="w-full max-w-5xl  mx-auto mt-50 md:mt-96 mb-12 px-4">
      <h2 className="text-lg md:text-5xl font-normal pb-4 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300">
        Tools
      </h2>
      <p className="text-center text-neutral-400 mb-6 max-w-2xl mx-auto text-base md:text-lg">
        These are the tools I frequently use to boost my productivity and
        creativity.
      </p>
      <InfiniteLogoMarquee />
    </section>
  );
};

export default ToolsSection;
