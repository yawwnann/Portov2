import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ProfileImg from "../assets/nanta1.png";

const ContactSection: React.FC = () => {
  const refContact = useRef(null);
  const isContactInView = useInView(refContact, {
    once: true,
    margin: "-100px",
  });
  return (
    <div ref={refContact} className="mt-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isContactInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto bg-white/90 dark:bg-neutral-900 rounded-2xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row gap-8"
      >
        {/* Left: Form */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-lg md:text-5xl font-normal pb-4 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300">
            Let's Chat, Contact with Us
          </h2>
          <p className="text-center text-neutral-400 mb-6 max-w-2xl mx-auto text-base md:text-lg">
            Have any questions or feedback? We're here to help. Send us a
            message, We'll get back to you within 24 hours.
          </p>
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First name"
                className="flex-1 rounded-lg px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-500"
                required
              />
              <input
                type="text"
                placeholder="Last name"
                className="flex-1 rounded-lg px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-500"
                required
              />
            </div>
            <input
              type="email"
              placeholder="email@gmail.com"
              className="rounded-lg px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-500"
              required
            />
            <input
              type="tel"
              placeholder="+62 (821) 8046-5969"
              className="rounded-lg px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-500"
            />
            <textarea
              placeholder="Type your message"
              className="rounded-lg px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-500 min-h-[100px]"
              required
            />
            <button
              type="submit"
              className="mt-2 bg-white hover:bg-neutral-50 text-gray-900 font-semibold rounded-lg px-6 py-2 transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
        {/* Right: Profile and Info */}
        <div className="flex-1 flex flex-col items-center gap-6">
          <div className="w-full flex flex-col items-center">
            <img
              src={ProfileImg}
              alt="Profile"
              className="w-70 h-70 object-cover rounded-2xl mb-4 bg-neutral-200 dark:bg-neutral-800"
            />
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="flex items-center gap-4 bg-neutral-100 dark:bg-neutral-800 rounded-xl p-4">
              <span className="bg-neutral-800 text-white rounded-full p-2">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M2 4.5A2.5 2.5 0 0 1 4.5 2h15A2.5 2.5 0 0 1 22 4.5v15a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 19.5v-15ZM4.5 4A.5.5 0 0 0 4 4.5v.379l8 5.333 8-5.333V4.5a.5.5 0 0 0-.5-.5h-15Zm15.5 2.868-7.62 5.075a1 1 0 0 1-1.16 0L4 6.868V19.5a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V6.868Z"
                  />
                </svg>
              </span>
              <div>
                <div className="text-neutral-500 dark:text-neutral-300 font-normal text-sm">
                  Email
                </div>
                <div className="text-neutral-100 dark:text-white font-normal text-base">
                  yawwnan01@gmail.com
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-neutral-100 dark:bg-neutral-800 rounded-xl p-4">
              <span className="bg-neutral-800 text-white rounded-full p-2">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M2 4.5A2.5 2.5 0 0 1 4.5 2h15A2.5 2.5 0 0 1 22 4.5v15a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 19.5v-15ZM4.5 4A.5.5 0 0 0 4 4.5v.379l8 5.333 8-5.333V4.5a.5.5 0 0 0-.5-.5h-15Zm15.5 2.868-7.62 5.075a1 1 0 0 1-1.16 0L4 6.868V19.5a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V6.868Z"
                  />
                </svg>
              </span>
              <div>
                <div className="text-neutral-500 dark:text-neutral-300 font-normal text-sm">
                  Phone
                </div>
                <div className="text-neutral-100 dark:text-white font-normal text-base">
                  (+62) 821-8046-5969
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-neutral-100 dark:bg-neutral-800 rounded-xl p-4">
              <span className="bg-neutral-800 text-white rounded-full p-2">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12 2C7.03 2 3 6.03 3 11c0 5.25 7.25 10.68 8.01 11.23a1 1 0 0 0 1.18 0C13.75 21.68 21 16.25 21 11c0-4.97-4.03-9-9-9Zm0 2c3.86 0 7 3.14 7 7 0 3.88-5.06 8.19-7 9.61C10.06 17.19 5 12.88 5 9c0-3.86 3.14-7 7-7Zm0 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
                  />
                </svg>
              </span>
              <div>
                <div className="text-neutral-500 dark:text-neutral-300 font-normal text-sm">
                  Address
                </div>
                <div className="text-neutral-100 dark:text-white font-normal text-base">
                  Jl.Salakan D121, Sewon, Bantul, Yogyakarta
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactSection;
