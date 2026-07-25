import { motion } from "framer-motion";
import {
    FaShoppingCart,
    FaUsers,
    FaArrowRight,
} from "react-icons/fa";


import { Link } from "react-router-dom";



const FeaturesSection = () => {
  return (
    <>
       
          <section
              id="features"
              className="relative z-20 py-24 px-6"
          >
              <div className="max-w-7xl mx-auto">

                  <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: .8 }}
                      className="text-center"
                  >

                      <span className="text-indigo-400 font-semibold uppercase tracking-widest">
                          Features
                      </span>

                      <h2 className="mt-4 text-5xl font-black">
                          Everything You Need
                      </h2>

                      <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
                          This project combines a complete Shopping Cart System
                          with Employee Management into one modern dashboard.
                      </p>

                  </motion.div>

                  <div className="grid gap-8 mt-20 md:grid-cols-2 xl:grid-cols-4">
                      <motion.div
                          whileHover={{
                              scale: 1.05,
                              rotate: 1
                          }}
                          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition duration-500 hover:border-indigo-500 hover:shadow-[0_0_45px_rgba(99,102,241,.7)]"
                      >

                          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

                          <div className="relative">

                              <div className="text-6xl">
                                  🛒
                              </div>

                              <h3 className="mt-6 text-2xl font-bold">
                                  Shopping Cart
                              </h3>

                              <p className="mt-4 text-slate-300">
                                  Add products into your cart and
                                  manage quantity in real-time.
                              </p>

                              <ul className="mt-6 space-y-2 text-sm text-slate-400">

                                  <li>✔ Add To Cart</li>

                                  <li>✔ Increase Qty</li>

                                  <li>✔ Decrease Qty</li>

                                  <li>✔ Remove Item</li>

                              </ul>

                          </div>

                      </motion.div>
                      <motion.div
                          whileHover={{
                              scale: 1.05,
                              rotate: -1
                          }}
                          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition duration-500 hover:border-pink-500 hover:shadow-[0_0_45px_rgba(236,72,153,.7)]"
                      >

                          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

                          <div className="relative">

                              <div className="text-6xl">
                                  ❤️
                              </div>

                              <h3 className="mt-6 text-2xl font-bold">
                                  Wishlist
                              </h3>

                              <p className="mt-4 text-slate-300">
                                  Like your favourite products
                                  and save them instantly.
                              </p>

                              <ul className="mt-6 space-y-2 text-sm text-slate-400">

                                  <li>✔ Like Product</li>

                                  <li>✔ Remove Wishlist</li>

                                  <li>✔ Fast Access</li>

                                  <li>✔ Clean UI</li>

                              </ul>

                          </div>

                      </motion.div><motion.div
                          whileHover={{
                              scale: 1.05,
                              rotate: 1
                          }}
                          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition duration-500 hover:border-yellow-500 hover:shadow-[0_0_45px_rgba(250,204,21,.6)]"
                      >

                          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

                          <div className="relative">

                              <div className="text-6xl">
                                  ⚡
                              </div>

                              <h3 className="mt-6 text-2xl font-bold">
                                  Modern UI
                              </h3>

                              <p className="mt-4 text-slate-300">
                                  Responsive,
                                  Animated and
                                  Beautiful Interface.
                              </p>

                              <ul className="mt-6 space-y-2 text-sm text-slate-400">

                                  <li>✔ Tailwind CSS</li>

                                  <li>✔ Responsive</li>

                                  <li>✔ Animations</li>

                                  <li>✔ Premium Design</li>

                              </ul>

                          </div>

                      </motion.div>

                  </div>

              </div>

          </section>

          <section className="relative z-20 py-20 px-6">

              <div className="max-w-7xl mx-auto">

                  <div className="grid gap-8 md:grid-cols-4">

                      {
                          [
                              ["20+", "Components"],
                              ["2", "Modules"],
                              ["100%", "Responsive"],
                              ["React", "Powered"]
                          ].map((item, index) => (
                              <motion.div

                                  key={index}

                                  initial={{ opacity: 0, y: 40 }}

                                  whileInView={{ opacity: 1, y: 0 }}

                                  viewport={{ once: true }}

                                  transition={{ delay: index * .2 }}

                                  className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-10 text-center hover:scale-105 transition duration-500 hover:shadow-[0_0_35px_rgba(99,102,241,.6)]"

                              >

                                  <h2 className="text-5xl font-black bg-gradient-to-r from-indigo-400 via-pink-400 to-cyan-400 text-transparent bg-clip-text">

                                      {item[0]}

                                  </h2>

                                  <p className="mt-4 text-slate-300">

                                      {item[1]}

                                  </p>

                              </motion.div>

                          ))
                      }

                  </div>

              </div>

          </section>




          {/* ============================= */}
          {/* CTA Section */}
          {/* ============================= */}

          <section className="relative z-20 py-28 px-6">

              <div className="max-w-7xl mx-auto">

                  <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: .8 }}
                      className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-12 md:p-20"
                  >

                      {/* Glow */}
                      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/20 blur-3xl"></div>
                      <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl"></div>

                      <div className="relative text-center">

                          <h2 className="text-4xl md:text-6xl font-black">
                              Ready To Explore?
                          </h2>

                          <p className="mt-6 text-lg text-white/80 max-w-3xl mx-auto">
                              Experience a modern Shopping Cart and Employee Management
                              dashboard with smooth animations and premium design.
                          </p>

                          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">

                              <Link
                                  to="/cart"
                                  className="rounded-2xl bg-white text-slate-900 px-8 py-4 font-bold transition duration-500 hover:scale-105"
                              >
                                  Go To Shopping →
                              </Link>

                              <Link
                                  to="/employees"
                                  className="rounded-2xl border border-white bg-white/10 backdrop-blur-xl px-8 py-4 font-bold transition duration-500 hover:bg-white/20 hover:scale-105"
                              >
                                  Manage Employees →
                              </Link>

                          </div>

                      </div>

                  </motion.div>

              </div>

          </section>

          <div className="pointer-events-none absolute inset-0 overflow-hidden">

              <div className="absolute left-10 top-32 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl animate-pulse"></div>

              <div className="absolute right-20 bottom-40 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl animate-pulse"></div>

              <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl animate-pulse"></div>

          </div>







    </>
  )
}

export default FeaturesSection
