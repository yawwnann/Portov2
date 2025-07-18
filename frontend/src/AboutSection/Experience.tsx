"use client";

import { InfiniteMovingCards } from "./components/Infinite-Moving-Cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-auto rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={experiences} direction="right" speed="slow" />
    </div>
  );
}

const experiences = [
  {
    quote:
      "Led the development of a full-stack e-commerce platform using React, Node.js, and MongoDB. Implemented real-time inventory management, payment gateway integration, and responsive design. Successfully launched the platform serving 10,000+ daily users.",
    name: "Senior Full-Stack Developer",
    title: "TechCorp Solutions - 2023",
  },
  {
    quote:
      "Developed and maintained multiple React applications for a fintech startup. Collaborated with cross-functional teams to implement new features, optimize performance, and ensure code quality. Reduced loading times by 40% through optimization.",
    name: "Frontend Developer",
    title: "FinTech Innovations - 2022",
  },
  {
    quote:
      "Built a comprehensive dashboard for data analytics using TypeScript and Next.js. Integrated with various APIs and implemented real-time data visualization. The dashboard improved decision-making efficiency by 60%.",
    name: "Software Engineer",
    title: "DataFlow Systems - 2021",
  },
  {
    quote:
      "Created responsive web applications and mobile-first designs using modern CSS frameworks. Collaborated with UX/UI designers to implement pixel-perfect designs. Delivered 15+ projects on time and within budget.",
    name: "Web Developer",
    title: "Digital Creations - 2020",
  },
  {
    quote:
      "Developed RESTful APIs and microservices using Node.js and Express. Implemented authentication, authorization, and database optimization. Maintained 99.9% uptime for critical business applications.",
    name: "Backend Developer",
    title: "CloudTech Solutions - 2019",
  },
];
