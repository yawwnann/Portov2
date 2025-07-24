export function FooterWithLogo() {
  return (
    <footer className="w-full bg-neutral-900 p-8 mt-16">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <span className="text-white font-bold text-2xl">Nanta</span>
            <p className="text-neutral-400 text-sm mt-1">
              Full Stack Developer & UI/UX Designer
            </p>
          </div>

          {/* Navigation Links */}
          <nav>
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
              <li>
                <a
                  href="#about"
                  className="font-normal text-white transition-colors hover:text-neutral-300 focus:text-neutral-300 text-base"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="font-normal text-white transition-colors hover:text-neutral-300 focus:text-neutral-300 text-base"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#ui-ux"
                  className="font-normal text-white transition-colors hover:text-neutral-300 focus:text-neutral-300 text-base"
                >
                  UI/UX
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="font-normal text-white transition-colors hover:text-neutral-300 focus:text-neutral-300 text-base"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <hr className="border-neutral-700 mb-8" />

        {/* Tech Stack Section */}
        <div className="mb-8">
          <h3 className="text-white font-semibold text-sm mb-4 text-center md:text-left">
            Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {[
              "Next.js",
              "Prisma",
              "MongoDB",
              "React",
              "TypeScript",
              "Tailwind CSS",
            ].map((tech) => (
              <span
                key={tech}
                className="border border-neutral-600 text-neutral-200 rounded-full px-3 py-1 text-xs font-semibold bg-neutral-800 hover:bg-neutral-700 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-4 border-t border-neutral-700">
          <p className="text-neutral-400 font-normal text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Nanta. All rights reserved.
          </p>

          {/* Social Links (Optional) */}
          <div className="flex gap-4">
            <a
              href="#"
              className="text-neutral-400 hover:text-white transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-neutral-400 hover:text-white transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-neutral-400 hover:text-white transition-colors text-sm"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
