import { motion } from "framer-motion";
import {
  FaShoppingCart,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import FeaturesSection from "../components/FeaturesSection";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

import ButtomToTopButton from '../components/ButtomToTopButton'
const Home = () => {

  return (

    <>



      <div className="relative overflow-hidden bg-slate-950 text-white">

        {/* ========================= */}
        {/* Background */}
        {/* ========================= */}

        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-indigo-600 opacity-20 blur-3xl animate-pulse"></div>

        <div className="absolute top-0 right-0 h-112.5 w-112.5 rounded-full bg-pink-600 opacity-20 blur-3xl animate-pulse"></div>

        <div className="absolute bottom-0 left-1/2 h-100 w-100 -translate-x-1/2 rounded-full bg-cyan-500 opacity-20 blur-3xl animate-pulse"></div>



        {/* ========================= */}
        {/* Hero */}
        {/* ========================= */}

        <section className="relative z-20 mt-5 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            className="rounded-full border border-indigo-400/30 bg-white/5 px-6 py-2 backdrop-blur-lg"
          >
            🚀 Modern React Dashboard
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }}
            className="mt-8 max-w-5xl text-5xl font-black leading-tight md:text-7xl"
          >
            Shopping Cart &
            <br />

            <span className="bg-gradient-to-r from-indigo-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Employee Management
            </span>

          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .5 }}
            className="mt-8 max-w-3xl text-lg text-slate-300"
          >
            A modern React application built using Tailwind CSS.
            Manage Shopping Cart, Wishlist, Quantity and Employee CRUD
            operations with a beautiful user interface.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .7 }}
            className="mt-12 flex flex-col gap-5 sm:flex-row"
          >


            <Link
              to="/shoping"
              className="group flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-4 font-semibold transition duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(99,102,241,.7)]"
            >
              <FaShoppingCart />

              Shopping Cart

              <FaArrowRight className="transition group-hover:translate-x-2" />
            </Link>

            <Link
              to="/employees"
              className="group flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-semibold backdrop-blur-xl transition duration-500 hover:scale-105 hover:bg-white/20"
            >
              <FaUsers />

              Employees

              <FaArrowRight className="transition group-hover:translate-x-2" />
            </Link>

          </motion.div>

          {/* Floating Card */}

          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="mt-24 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3"
          >

            <ButtomToTopButton>
              <NavLink to={'/cart'}>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-indigo-500 hover:shadow-[0_0_35px_rgba(99,102,241,.6)]">

                  <div className="mb-5 text-5xl">
                    🛒
                  </div>

                  <h2 className="text-2xl font-bold">
                    Shopping Cart
                  </h2>

                  <p className="mt-4 text-slate-300">
                    Add products, update quantity,
                    wishlist and view complete cart.
                  </p>

                </div>
              </NavLink>
            </ButtomToTopButton>

            <ButtomToTopButton>
              <NavLink to={'/employees'}>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-pink-500 hover:shadow-[0_0_35px_rgba(236,72,153,.6)]">

                  <div className="mb-5 text-5xl">
                    👨‍💼
                  </div>

                  <h2 className="text-2xl font-bold">
                    Employee CRUD
                  </h2>

                  <p className="mt-4 text-slate-300">
                    Create, Update, Delete and
                    Manage Employees easily.
                  </p>

                </div>
              </NavLink>
            </ButtomToTopButton>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-cyan-500 hover:shadow-[0_0_35px_rgba(6,182,212,.6)]">

              <div className="mb-5 text-5xl">
                ⚡
              </div>

              <h2 className="text-2xl font-bold">
                Modern UI
              </h2>

              <p className="mt-4 text-slate-300">
                Beautiful responsive interface
                built using Tailwind CSS.
              </p>

            </div>

          </motion.div>

        </section>


        {/* ============================= */}
        {/* Features Section */}
        {/* ============================= */}

        <FeaturesSection />


      </div>


    </>
  );
};

export default Home;