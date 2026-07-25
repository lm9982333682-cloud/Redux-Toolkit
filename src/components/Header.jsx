import { FaCartArrowDown, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import LikeList from "./LikeList";
import { showItemLike } from "../redux/features/likeCart/likeCartSlice";

const Header = () => {
    const cart = useSelector(state => state.cart.cart);
    const like = useSelector(state => state.like.like);
    const showLike = useSelector(state => state.like.showLike);

    const dispatch = useDispatch();


    return (
        < >
            <nav className=" shadow shadow-[#a39c9c8a] text-white  sticky bg-[#0F1324]   w-full z-30 top-0 inset-s-0 ">
                
                <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">


                    <NavLink to={'/'}>
                        <div className="flex  items-center space-x-3 rtl:space-x-reverse">
                            <img
                                src="https://flowbite.com/docs/images/logo.svg"
                                className="h-7"
                                alt="Flowbite Logo"
                            />
                            <span className="self-center  text-xl text-heading font-semibold whitespace-nowrap">
                                LCM
                            </span>
                        </div>
                    </NavLink>


                    <div className=" flex gap-10 text-2xl items-center   " >
                        {/* <div className="text-[20px]   ">
                            <NavLink to={'/shoping'}    className="transition hover:text-indigo-400">Shoping</NavLink>
                            <NavLink to={'/employees'}    className="transition hover:text-indigo-400">Employees</NavLink>
                        </div> */}


                        <div className="hidden text-[16px] gap-8 md:flex">

                            <NavLink to={'/'} className="transition hover:text-indigo-400">Home</NavLink>
                            <NavLink to={'/shoping'} className="transition hover:text-indigo-400">Shoping</NavLink>
                            <NavLink to={'/employees'} className="transition hover:text-indigo-400">Employees</NavLink>

                        </div>

                        <div className=" flex gap-5 text-2xl   " >


                            {cart.length < 1 ? <FaCartArrowDown onClick={() => toast.warning('Please Add To Card')} /> :
                                <NavLink to={'/cart'} >
                                    <div className=" relative  " >
                                        <FaCartArrowDown />
                                        <span className=" text-lg text-center flex justify-center items-center bg-red-600 rounded-full  h-5 w-5 absolute -top-3 -right-3 text-white   "  >
                                            {cart.length}
                                        </span>
                                    </div>
                                </NavLink>
                            }

                            {like.length < 1 ? <FaHeart onClick={() => toast.warning('Please Like To Card')} /> :
                                <div onClick={() => dispatch(showItemLike(true))} className=" cursor-pointer relative  " >
                                    <FaHeart />
                                    <span className=" text-lg text-center flex justify-center items-center bg-red-600 rounded-full  h-5 w-5 absolute -top-3 -right-3 text-white   " >
                                        {like.length}
                                    </span>
                                </div>
                            }
                        </div>


                    </div>



                </div>
            </nav>

            {showLike && <LikeList />}



        </>
    )
};


export default Header
