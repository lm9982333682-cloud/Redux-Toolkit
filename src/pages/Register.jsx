import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    FaUser,
    FaEnvelope,
    FaLock,
    FaEye,
    FaEyeSlash,
    FaArrowRight,
} from "react-icons/fa";

import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../redux/features/auth/authSlice";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0, });
    const dispatch = useDispatch();

    const navigate = useNavigate();





    const handleMouseMove = (e) => {
        setMousePosition({
            x: e.clientX,
            y: e.clientY,
        });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);



    // register
    const { register, watch, reset, handleSubmit, formState: { errors } } = useForm();

    const password = watch("password");


    console.log(useSelector(state => state.auth));


  
    const formHandle = (data) => {
       
        dispatch(registerUser(data));
        dispatch(loginUser(data));


        reset();

        toast.success('User Register Successfully')
        setTimeout(() => {
            navigate('/employees');
        }, 2000);

    };


   




    return (

        <div
            onMouseMove={handleMouseMove}
            className="relative  sm:fixed    flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#020617] px-5 text-white"
        >

            {/* ================================= */}
            {/* Apple Mouse Spotlight */}
            {/* ================================= */}

            <div
                className="pointer-events-none fixed inset-0 z-0 transition duration-150"

                style={{ background: ` radial-gradient(450px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99,102,241,.18), transparent 40%)`, }}
            />

            {/* ================================= */}
            {/* Aurora Background */}
            {/* ================================= */}

            <div className="absolute -left-40 -top-40 h-105 w-105 rounded-full bg-indigo-600/30 blur-[140px] animate-pulse"></div>

            <div className="absolute right-0 top-0 h-105 w-105 rounded-full bg-pink-500/30 blur-[140px] animate-pulse"></div>

            <div className="absolute bottom-0 left-1/2 h-105 w-105 -translate-x-1/2 rounded-full bg-cyan-500/30 blur-[140px] animate-pulse"></div>

            {/* ================================= */}
            {/* Animated Grid */}
            {/* ================================= */}

            <div className="absolute inset-0 opacity-[0.08]"
                style={{
                    backgroundImage: ` linear-gradient(rgba(255,255,255,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.18) 1px, transparent 1px)`,
                    backgroundSize: "45px 45px",
                }} />

            {/* ================================= */}
            {/* Floating Circles */}
            {/* ================================= */}

            <motion.div

                animate={{
                    y: [0, -25, 0],
                }}

                transition={{
                    repeat: Infinity,
                    duration: 6,
                }}

                className="absolute left-20 top-32 h-8 w-8 rounded-full bg-indigo-500"

            />

            <motion.div

                animate={{
                    y: [0, 30, 0],
                }}

                transition={{
                    repeat: Infinity,
                    duration: 5,
                }}

                className="absolute bottom-28 right-24 h-6 w-6 rounded-full bg-pink-500"

            />

            <motion.div

                animate={{
                    x: [0, 25, 0],
                }}

                transition={{
                    repeat: Infinity,
                    duration: 7,
                }}

                className="absolute bottom-32 left-40 h-5 w-5 rounded-full bg-cyan-400"

            />

            {/* ================================= */}
            {/* Register Card */}
            {/* ================================= */}

            <motion.div

                initial={{
                    opacity: 0,
                    y: 50,
                    scale: .96,
                }}

                animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                }}

                transition={{ duration: .7, }}

                className="relative z-20 w-full max-w-lg overflow-hidden rounded-xl border border-white/10 bg-white/5 px-10 py-5 backdrop-blur-3xl shadow-[0_0_80px_rgba(99,102,241,.18)]"

            >

                {/* Glow */}
                <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-indigo-500/20 blur-[90px]"></div>
                <div className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-pink-500/20 blur-[90px]"></div>

                {/* Header */}

                <motion.div

                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}

                    className="relative z-10 text-center"

                >

                    <h1 className="text-2xl font-black">

                        Create Account

                    </h1>

                    <p className="mt-1 text-slate-300">
                        Join us and start your journey 🚀
                    </p>

                </motion.div>

                {/* ================================ */}
                {/* FORM START - Part 2 */}
                {/* ================================ */}

                <form onSubmit={handleSubmit(formHandle)} className="relative z-10 mt-10 space-y-4">

                    {/* ========================= */}
                    {/* Name */}
                    {/* ========================= */}

                    <div className="group">

                        <label className="mb-2 block font-medium text-slate-300">
                            Full Name
                        </label>

                        <div
                            className=" flex h-14 items-center rounded-lg border border-white/10 bg-white/5 px-5 backdrop-blur-xl transition-all duration-300 group-hover:border-indigo-500 focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-500/20"
                        >

                            <FaUser className="text-slate-400" />

                            <input
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is required",
                                    },

                                })}
                                type="text"
                                placeholder="Enter your full name"
                                className=" ml-4 h-full   w-full bg-transparent outline-none placeholder:text-slate-500"
                            />

                        </div>

                        {errors?.name?.message && <span className=" text-red-500 " > {errors.name.message}  </span>}

                    </div>

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
                                className=" ml-4 h-full w-full bg-transparent outline-none placeholder:text-slate-500"
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
                            className=" flex h-14 items-center rounded-lg border border-white/10 bg-white/5 px-5 backdrop-blur-xl transition-all duration-300 group-hover:border-pink-500 focus-within:border-pink-500 focus-within:ring-4 focus-within:ring-pink-500/20"
                        >

                            <FaLock className="text-slate-400" />

                            <input
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'password is required'
                                    },
                                })}
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter password"
                                className=" ml-4 h-full w-full bg-transparent outline-none placeholder:text-slate-500 "
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="text-slate-400 transition hover:text-indigo-400"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>

                        </div>
                        {errors?.password?.message && <span className=" text-red-500 " > {errors.password.message}  </span>}

                    </div>

                    {/* ========================= */}
                    {/* Confirm Password */}
                    {/* ========================= */}

                    <div className="group">

                        <label className="mb-2 block font-medium text-slate-300">
                            Confirm Password
                        </label>

                        <div
                            className=" flex h-14 items-center rounded-lg border border-white/10 bg-white/5 px-5 backdrop-blur-xl transition-all duration-300 group-hover:border-green-500 focus-within:border-green-500 focus-within:ring-4 focus-within:ring-green-500/20 "
                        >

                            <FaLock className="text-slate-400" />

                            <input
                                {...register("confirmPassword", {
                                    required: {
                                        value: true,
                                        message: 'Confirm Password is required'
                                    },
                                    validate: (value) =>
                                        value === password || "Passwords do not match",
                                
                                })}
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm password"
                                className=" ml-4 h-full w-full bg-transparent outline-none placeholder:text-slate-500 "
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowConfirmPassword(!showConfirmPassword)
                                }
                                className="text-slate-400 transition hover:text-green-400"
                            >
                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>

                        </div>
                        {errors?.confirmPassword?.message && <span className=" text-red-500 " > {errors.confirmPassword.message}  </span>}

                    </div>

                    {/* ========================= */}
                    {/* Register Button */}
                    {/* ========================= */}

                    <motion.button

                        whileHover={{
                            scale: 1.03,
                        }}

                        whileTap={{
                            scale: .97,
                        }}

                        className=" group relative flex h-14 w-full items-center justify-center overflow-hidden rounded-lg cursor-pointer bg-linear-to-r from-indigo-600 via-violet-600 to-cyan-500 font-bold tracking-wide shadow-[0_0_35px_rgba(99,102,241,.6)] transition-all duration-500 hover:shadow-[0_0_55px_rgba(99,102,241,.9)] "
                    >

                        {/* Shine */}

                        <span
                            className=" absolute -left-full top-0 h-full w-full rotate-12 bg-linear-to-r from-transparent via-white/40 to-transparent transition-all duration-1000 group-hover:left-full "
                        />

                        <span className="relative flex items-center gap-3">

                            Create Account

                            <FaArrowRight className="transition duration-300 group-hover:translate-x-2" />

                        </span>

                    </motion.button>

                    {/* Login */}

                    <p className="pt-2 text-center text-slate-400">

                        Already have an account?

                        <Link
                            to="/login"
                            className="ml-2 font-semibold text-indigo-400 transition hover:text-pink-400"
                        >
                            Login
                        </Link>

                    </p>

                </form>
            </motion.div>

            <ToastContainer/>

        </div>

    );

};

export default Register;