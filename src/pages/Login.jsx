import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaArrowRight, } from "react-icons/fa";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/features/auth/authSlice";
import { toast, ToastContainer } from "react-toastify";


const Login = () => {

  const [showPassword, setShowPassword] = useState(false);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0, });

  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });

  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  // login system

  const dispatch = useDispatch();

  const { register, reset, handleSubmit, formState: { errors } } = useForm();

  const registerData = useSelector(state => state.auth.registerData);

  const [loginError, setLoginError] = useState(false);


  const navigate = useNavigate();
  const formHandle = (data) => {

    const userDataMatch = registerData.find(value => value.email === data.email && value.password === data.password);

    if (userDataMatch) {
      toast.success('Login Successfully')
      dispatch(loginUser(userDataMatch));
      setTimeout(() => {
         navigate('/employees');
      }, 2000);
     

      reset();

    } else {
      toast.error('Invalid email or password')
      setLoginError(true)
    };





  }




  return (

    <div

      onMouseMove={handleMouseMove}

      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#020617] px-5"

    >

      {/* ================================= */}
      {/* Apple Mouse Spotlight */}
      {/* ================================= */}

      <div

        className="pointer-events-none fixed inset-0 z-0 transition duration-150"

        style={{

          background: `

          radial-gradient(

          450px circle at ${mousePosition.x}px ${mousePosition.y}px,

          rgba(99,102,241,.18),

          transparent 40%

          )

          `,

        }}

      />

      {/* ================================= */}
      {/* Aurora Background */}
      {/* ================================= */}

      <div className="absolute -left-40 -top-40 h-105 w-105 rounded-full bg-indigo-600/30 blur-[150px] animate-pulse"></div>

      <div className="absolute right-0 top-0 h-105 w-105 rounded-full bg-pink-500/30 blur-[150px] animate-pulse"></div>

      <div className="absolute bottom-0 left-1/2 h-105 w-105 -translate-x-1/2 rounded-full bg-cyan-500/30 blur-[150px] animate-pulse"></div>

      {/* ================================= */}
      {/* Animated Grid */}
      {/* ================================= */}

      <div

        className="absolute inset-0 opacity-[0.08]"

        style={{

          backgroundImage: `
          linear-gradient(rgba(255,255,255,.18) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.18) 1px, transparent 1px)
          `,

          backgroundSize: "45px 45px",

        }}

      />

      {/* ================================= */}
      {/* Floating Particles */}
      {/* ================================= */}

      <motion.div

        animate={{
          y: [0, -25, 0],
        }}

        transition={{
          repeat: Infinity,
          duration: 5,
        }}

        className="absolute left-20 top-32 h-8 w-8 rounded-full bg-indigo-500"

      />

      <motion.div

        animate={{
          y: [0, 25, 0],
        }}

        transition={{
          repeat: Infinity,
          duration: 4,
        }}

        className="absolute right-20 bottom-28 h-7 w-7 rounded-full bg-pink-500"

      />

      <motion.div

        animate={{
          x: [0, 30, 0],
        }}

        transition={{
          repeat: Infinity,
          duration: 6,
        }}

        className="absolute left-1/3 bottom-24 h-5 w-5 rounded-full bg-cyan-400"

      />

      {/* ================================= */}
      {/* Login Card */}
      {/* ================================= */}



      <motion.div

        initial={{
          opacity: 0,
          y: 50,
          scale: .95,
        }}

        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}

        transition={{
          duration: .7,
        }}

        className="relative z-20 w-full max-w-lg overflow-hidden rounded-xl border border-white/10 bg-white/5 px-10 py-5 text-white backdrop-blur-3xl shadow-[0_0_80px_rgba(99,102,241,.18)]"

      >

        {/* Glow */}

        <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-indigo-500/20 blur-[100px]"></div>

        <div className="absolute -left-20 -bottom-20 h-52 w-52 rounded-full bg-pink-500/20 blur-[100px]"></div>

        {/* Logo */}

        <motion.div

          animate={{
            rotate: [0, 5, -5, 0],
          }}

          transition={{
            repeat: Infinity,
            duration: 5,
          }}

          className="relative z-10 mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-cyan-500 text-5xl shadow-[0_0_50px_rgba(99,102,241,.8)]"

        >

          🚀

        </motion.div>

        {/* Heading */}

        <div className="relative z-10 mt-4 text-center">

          <h1 className="text-2xl font-black">

            Welcome Back

          </h1>

          <p className="mt-1 text-slate-300">

            Login to continue your journey.

          </p>

        </div>




        {/* login Error */}
        {loginError && (
          <div
            className=" flex items-center justify-center gap-3 mt-2 rounded-lg border border-red-500/40 bg-red-500/10 px-5 py-4 text-red-400 backdrop-blur-xl shadow-[0_0_25px_rgba(239,68,68,.25)] animate-pulse "
          >
            <span className="text-xl">❌</span>

            <span className="font-semibold">
              Invalid email or password
            </span>
          </div>
        )}

        <form onSubmit={handleSubmit(formHandle)} className="relative z-10 mt-3 space-y-6">




          {/* ========================= */}
          {/* Email */}
          {/* ========================= */}

          <div className="group">

            <label className="mb-2 block font-medium text-slate-300">
              Email Address
            </label>

            <div
              className=" flex h-14 items-center rounded-lg border border-white/10 bg-white/5 px-5 backdrop-blur-xl transition-all duration-300 group-hover:border-cyan-500 focus-within:border-cyan-500 focus-within:ring-4 focus-within:ring-cyan-500/20"
            >

              <FaEnvelope className="text-slate-400" />
              <input

                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                  },
                })}
                type="email"
                placeholder="Enter your email"
                className=" ml-4 h-full w-full bg-transparent outline-none placeholder:text-slate-500 "
              />


            </div>
            {errors?.email?.message && <span className=" text-red-500 " > {errors.email.message}  </span>}

          </div>

          {/* ========================= */}
          {/* Password */}
          {/* ========================= */}

          <div className="group">

            <label className="mb-2 block font-medium text-slate-300">
              Password
            </label>

            <div
              className=" flex h-14 items-center rounded-lg border border-white/10 bg-white/5 px-5 backdrop-blur-xl transition-all duration-300 group-hover:border-pink-500 focus-within:border-pink-500 focus-within:ring-4 focus-within:ring-pink-500/20 "
            >

              <FaLock className="text-slate-400" />

              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: 'email is required'
                  },
                })}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className=" ml-4 h-full w-full bg-transparent outline-none placeholder:text-slate-500 "
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-slate-400 transition hover:text-pink-400"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>

            </div>
            {errors?.password?.message && <span className=" text-red-500 " > {errors.password.message}  </span>}

          </div>

          {/* ========================= */}
          {/* Remember + Forgot */}
          {/* ========================= */}

          <div className="flex items-center justify-between">

            <label className="flex cursor-pointer items-center gap-3">

              <input
                type="checkbox"
                className=" h-5 w-5 accent-indigo-600 "
              />

              <span className="text-sm text-slate-300">
                Remember Me
              </span>

            </label>

            <Link

              className=" text-sm font-medium text-indigo-400 transition duration-300 hover:text-pink-400 "
            >
              Forgot Password?
            </Link>

          </div>

          {/* ========================= */}
          {/* Login Button */}
          {/* ========================= */}

          <motion.button

            whileHover={{
              scale: 1.03,
            }}

            whileTap={{
              scale: .97,
            }}

            className=" group cursor-pointer relative flex h-14 w-full items-center justify-center overflow-hidden rounded-lg bg-linear-to-r from-indigo-600 via-violet-600 to-cyan-500 font-bold tracking-wide shadow-[0_0_35px_rgba(99,102,241,.6)] transition-all duration-500 hover:shadow-[0_0_55px_rgba(99,102,241,.9)] "

          >

            {/* Shine */}

            <span
              className=" absolute -left-full top-0 h-full w-full rotate-12 bg-linear-to-r from-transparent via-white/40 to-transparent transition-all duration-1000 group-hover:left-full "
            />

            <span className="relative flex items-center gap-3">
              Login Now
              <FaArrowRight className="transition duration-300 group-hover:translate-x-2" />
            </span>

          </motion.button>

          {/* ========================= */}
          {/* Register */}
          {/* ========================= */}

          <p className="pt-2 text-center text-slate-400">

            Don't have an account?

            <Link
              to="/register"
              className=" ml-2 font-semibold text-indigo-400 transition duration-300 hover:text-pink-400 "
            >
              Register Now
            </Link>

          </p>

        </form>
      </motion.div>







<ToastContainer/>

    </div>

  );

};

export default Login;