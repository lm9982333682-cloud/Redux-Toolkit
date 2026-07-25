import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import BottomFooter from '../components/BottomFooter'
import SocialIcons from '../components/SocialIcons'
import { FaArrowUp } from 'react-icons/fa'
const MainLayout = () => {


    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);






    return (
        <div>
            <Header />
            <Outlet />

            <div>

                <Footer />
                <BottomFooter />
                <SocialIcons />
            </div>



            {
                showButton && (

                    <button

                        onClick={() =>
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            })
                        }

                        className="fixed  sm:flex hidden justify-center text-white text-2xl cursor-pointer items-center bottom-8 right-8 z-50 h-14 w-14 rounded-full bg-indigo-600 shadow-2xl transition hover:scale-110"

                    >

                        <FaArrowUp />

                    </button>

                )
            }


        </div>
    )
}

export default MainLayout
