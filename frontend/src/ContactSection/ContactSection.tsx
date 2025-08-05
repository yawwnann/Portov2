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
    <div ref={refContact} className="mt-24 px-4 sm:px-6  lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isContactInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto bg-[linear-gradient(180deg,#1a1a1a,#000000)] rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-12"
      >
        {/* Left: Form */}
        <div className="flex-1 flex flex-col justify-center order-2 lg:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal pb-4 text-center lg:text-left bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300">
            Let's Chat, Contact with Us
          </h2>
          <p className="text-center lg:text-left text-gray-400 mb-6 max-w-2xl mx-auto lg:mx-0 text-sm sm:text-base md:text-lg">
            Have any questions or feedback? We're here to help. Send us a
            message, We'll get back to you within 24 hours.
          </p>
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="First name"
                className="flex-1 rounded-lg px-4 py-3 bg-gray-800 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-200"
                required
              />
              <input
                type="text"
                placeholder="Last name"
                className="flex-1 rounded-lg px-4 py-3 bg-gray-800 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-200"
                required
              />
            </div>
            <input
              type="email"
              placeholder="email@gmail.com"
              className="rounded-lg px-4 py-3 bg-gray-800 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-200"
              required
            />
            <input
              type="tel"
              placeholder="+62 (821) 8046-5969"
              className="rounded-lg px-4 py-3 bg-gray-800 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-200"
            />
            <textarea
              placeholder="Type your message"
              className="rounded-lg px-4 py-3 bg-gray-800 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white min-h-[120px] resize-none transition-all duration-200"
              required
            />
            <button
              type="submit"
              className="mt-2 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black text-white font-semibold rounded-lg px-6 py-3 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Profile and Info */}
        <div className="flex-1 flex flex-col items-center gap-6 order-1 lg:order-2">
          <div className="w-full flex flex-col items-center">
            <div className="relative group">
              <img
                src={ProfileImg}
                alt="Profile"
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover rounded-2xl mb-4 bg-gray-800 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          <div className="w-full flex flex-col gap-3 sm:gap-4">
            <div className="flex items-center gap-4 bg-gray-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 hover:bg-gray-800/70 transition-all duration-200">
              <span className="bg-gray-600 text-white rounded-full p-2 flex-shrink-0">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M2 4.5A2.5 2.5 0 0 1 4.5 2h15A2.5 2.5 0 0 1 22 4.5v15a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 19.5v-15ZM4.5 4A.5.5 0 0 0 4 4.5v.379l8 5.333 8-5.333V4.5a.5.5 0 0 0-.5-.5h-15Zm15.5 2.868-7.62 5.075a1 1 0 0 1-1.16 0L4 6.868V19.5a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V6.868Z"
                  />
                </svg>
              </span>
              <div className="min-w-0 flex-1">
                <div className="text-gray-400 font-normal text-xs sm:text-sm">
                  Email
                </div>
                <div className="text-white font-normal text-sm sm:text-base break-all">
                  yawwnan01@gmail.com
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-gray-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 hover:bg-gray-800/70 transition-all duration-200">
              <span className="bg-gray-600 text-white rounded-full p-2 flex-shrink-0">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                  />
                </svg>
              </span>
              <div className="min-w-0 flex-1">
                <div className="text-gray-400 font-normal text-xs sm:text-sm">
                  Phone
                </div>
                <div className="text-white font-normal text-sm sm:text-base">
                  (+62) 821-8046-5969
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-gray-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 hover:bg-gray-800/70 transition-all duration-200">
              <span className="bg-gray-600 text-white rounded-full p-2 flex-shrink-0">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12 2C7.03 2 3 6.03 3 11c0 5.25 7.25 10.68 8.01 11.23a1 1 0 0 0 1.18 0C13.75 21.68 21 16.25 21 11c0-4.97-4.03-9-9-9Zm0 2c3.86 0 7 3.14 7 7 0 3.88-5.06 8.19-7 9.61C10.06 17.19 5 12.88 5 9c0-3.86 3.14-7 7-7Zm0 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
                  />
                </svg>
              </span>
              <div className="min-w-0 flex-1">
                <div className="text-gray-400 font-normal text-xs sm:text-sm">
                  Address
                </div>
                <div className="text-white font-normal text-sm sm:text-base">
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
