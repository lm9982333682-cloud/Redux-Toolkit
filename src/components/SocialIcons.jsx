import { motion } from "framer-motion";
import {
    FaGithub,
    FaLinkedinIn,
    FaRegFileAlt,
} from "react-icons/fa";

const socialLinks = [
    {
        name: "LinkedIn",
        icon: <FaLinkedinIn />,
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7486494831188377600/",
        glow: "hover:shadow-[0_0_40px_rgba(14,165,233,.8)]",
        bg: "from-sky-500 to-blue-600",
    },
    {
        name: "GitHub",
        icon: <FaGithub />,
        url: "https://github.com/lm9982333682-cloud/Redux-Toolkit",
        glow: "hover:shadow-[0_0_40px_rgba(255,255,255,.5)]",
        bg: "from-gray-700 to-black",
    },
    {
        name: "Portfolio",
        icon: <FaRegFileAlt />,
        url: "https://docs.google.com/document/d/17KiJ4MKlGXifRsOkIJv7oECUmxyPTIYMVmP3AoDn_gg/edit?tab=t.0#heading=h.3wc9xxppeyj9",
        glow: "hover:shadow-[0_0_40px_rgba(99,102,241,.8)]",
        bg: "from-indigo-500 to-violet-600",
    },
];



const SocialIcons = () => {
    return (

        <>


            <div className="  fixed top-60 right-2  hidden sm:flex     z-40  mt-2   flex-col gap-2 ">

                {socialLinks.map((item, index) => (
                    <motion.a
                        key={index}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"

                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{
                            y: -10,
                            scale: 1.12,
                            rotate: 5,
                        }}
                        whileTap={{ scale: 0.92 }}

                        transition={{
                            duration: 0.35,
                            delay: index * 0.15,
                        }}

                        className={` group relative flex h-13 w-13 items-center justify-center overflow-hidden rounded-full border  border-white/10  bg-white/5 backdrop-blur-2xl transition-all duration-500
          ${item.glow}
          `}
                    >
                        {/* Animated Background */}
                        <span
                            className={`
            absolute
            inset-0
            bg-gradient-to-
            ${item.bg}
            opacity-0
            transition-all
            duration-500
            group-hover:opacity-100
            `}
                        />

                        {/* Shine Effect */}
                        <span
                            className=" absolute -left-full top-0 h-full w-full rotate-12 bg-linear-to-r from-transparent  via-white/30 to-transparent transition-all duration-1000 group-hover:left-full"
                        />

                        {/* Icon */}
                        <span className="relative z-10 text-2xl text-white transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">
                            {item.icon}
                        </span>

                        {/* Tooltip */}
                        <span
                            className=" absolute -bottom-12 rounded-full  bg-black/90   text-xs  text-white opacity-0 transition-all duration-300 group-hover:-bottom-14 group-hover:opacity-100"
                        >
                            {item.name}
                        </span>
                    </motion.a>
                ))}
            </div>

            <div className="  fixed bottom-1 right-1/2 translate-x-1/2     z-40  mt-2 sm:hidden  flex      gap-10 ">

                {socialLinks.map((item, index) => (
                    <motion.a
                        key={index}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"

                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{
                            y: -10,
                            scale: 1.12,
                            rotate: 5,
                        }}
                        whileTap={{ scale: 0.92 }}

                        transition={{
                            duration: 0.35,
                            delay: index * 0.15,
                        }}

                        className={` group relative flex h-13 w-13 items-center justify-center overflow-hidden rounded-full border  border-white/10  bg-white/5 backdrop-blur-2xl transition-all duration-500
          ${item.glow}
          `}
                    >
                        {/* Animated Background */}
                        <span
                            className={`
            absolute
            inset-0
            bg-gradient-to-
            ${item.bg}
            opacity-0
            transition-all
            duration-500
            group-hover:opacity-100
            `}
                        />

                        {/* Shine Effect */}
                        <span
                            className=" absolute -left-full top-0 h-full w-full rotate-12 bg-linear-to-r from-transparent  via-white/30 to-transparent transition-all duration-1000 group-hover:left-full"
                        />

                        {/* Icon */}
                        <span className="relative z-10 text-2xl text-white transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">
                            {item.icon}
                        </span>

                        {/* Tooltip */}
                        <span
                            className=" absolute -bottom-12 rounded-full  bg-black/90   text-xs  text-white opacity-0 transition-all duration-300 group-hover:-bottom-14 group-hover:opacity-100"
                        >
                            {item.name}
                        </span>
                    </motion.a>
                ))}
            </div>

        </>

    );
};

export default SocialIcons