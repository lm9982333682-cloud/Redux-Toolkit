import React from 'react'
import { NavLink } from 'react-router-dom'
import ButtomToTopButton from './ButtomToTopButton'
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
        url: "https://linkedin.com/in/YOUR_USERNAME",
        glow: "hover:shadow-[0_0_40px_rgba(14,165,233,.8)]",
        bg: "from-sky-500 to-blue-600",
    },
    {
        name: "GitHub",
        icon: <FaGithub />,
        url: "https://github.com/YOUR_USERNAME",
        glow: "hover:shadow-[0_0_40px_rgba(255,255,255,.5)]",
        bg: "from-gray-700 to-black",
    },
    {
        name: "Portfolio",
        icon: <FaRegFileAlt />,
        url: "#",
        glow: "hover:shadow-[0_0_40px_rgba(99,102,241,.8)]",
        bg: "from-indigo-500 to-violet-600",
    },
];


const BottomFooter = () => {
    return (
        <div>
            <footer className="relative text-white z-20 border-t border-white/10 bg-slate-950">

                <div className="max-w-7xl mx-auto px-6 py-16">

                    <div className="grid gap-10 md:grid-cols-3">

                        <div>

                            <h2 className="text-3xl font-black">

                                React<span className="text-indigo-400">Project</span>

                            </h2>

                            <p className="mt-5 text-slate-400">

                                Modern Shopping Cart and Employee
                                Management Dashboard built using
                                React + Tailwind CSS.

                            </p>

                        </div>

                        <div>

                            <h3 className="font-bold text-xl">

                                Quick Links

                            </h3>

                            <div className="mt-5 space-y-3">

                                <ButtomToTopButton>
                                    <NavLink to='/' className="block hover:text-indigo-400 transition" to="/">
                                        Home
                                    </NavLink>
                                </ButtomToTopButton>


                                <ButtomToTopButton>
                                    <NavLink to="/shoping" className="block hover:text-indigo-400 transition" >
                                        Shopping Cart
                                    </NavLink>
                                </ButtomToTopButton>

                                <ButtomToTopButton>
                                    <NavLink to={"/employees"} className="block hover:text-indigo-400 transition" to="/employees">
                                        Employees
                                    </NavLink>
                                </ButtomToTopButton>


                            </div>

                        </div>

                        <div>

                            <h3 className="font-bold text-xl">

                                Social Icons

                            </h3>

                            
                            <SocialIcons />

                        </div>

                    </div>

                    <div className="mt-12 border-t border-white/10 pt-8 text-center text-slate-500">

                        © 2026 All Rights Reserved • Developed by ❤️ Lal Chand Meghwal

                    </div>

                </div>

            </footer>
        </div>
    )
};


const SocialIcons = () => {
    return (<div className="flex mt-2 md:flex-col   gap-2">

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

                className={` group relative flex h-15 w-15 items-center justify-center overflow-hidden rounded-full border  border-white/10  bg-white/5 backdrop-blur-2xl transition-all duration-500
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
    </div>);
}

export default BottomFooter
