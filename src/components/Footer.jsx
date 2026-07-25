import { useState } from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { NavLink } from "react-router-dom";

const footerLinks = [
    {
        title: "Tea Varieties",
        links: [
            "Whole Leaf Tea Sachets",
            "Pure Matcha",
            "Tea Lattes",
            "Iced Tea",
        ],
    },
    {
        title: "Collections",
        links: [
            "Matcha",
            "Chai",
            "Organic Tea",
            "Naked Tea Sachets",
            "Black Tea",
            "Green Tea",
            "Herbal Tea",
            "Caffeine-Free",
            "Gift & Samplers",
        ],
    },
    {
        title: "Lattes",
        links: [
            "Nice Matcha",
            "Barista Matcha",
            "Nice Chai",
            "Barista Chai",
            "Two Roots Golden Latte",
        ],
    },
    {
        title: "Learn",
        links: ["Our Story", "Our Spirit", "FAQ", "Reviews"],
    },
    {
        title: "Tea Journal",
        links: ["All Articles", "Tea 101", "Recipes", "Sustainability"],
    },
    {
        title: "Support",
        links: [
            "Contact",
            "My Account",
            "Loyal-Tea",
            "Shipping & Returns",
            "Privacy Policy",
            "Terms & Conditions",
        ],
    },
    {
        title: "Cafe & Wholesale",
        links: [
            "Cafe & Wholesale Partners",
            "Wholesale Login",
            "Product and Media Files",
            "Displays & Starter Kits",
            "Brew Guide",
            "Wholesale Catalog",
        ],
    },
];

const Footer = () => {

    const [faq, setFaq] = useState(null);


    return (

        
        <footer className="   pb-10 mb-0 ">

           
            {/* Newsletter */}


            {/* Footer Links */}

            {/* Desktop */}
            <div className=" md:block hidden max-w-462.5 mx-auto mb-0 mt-16 ">

                <div className="bg-[#0F1324] mb-0 rounded-2xl p-10">

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-10">

                        {footerLinks.map((item) => (
                            <div key={item.title}>

                                <h3 className="text-white text-xl font-medium font-serif mb-6">
                                    {item.title}
                                </h3>

                                <ul className="space-y-2">

                                    {item.links.map((link) => (
                                        <li
                                            key={link}
                                            className="text-gray-300 hover:text-white cursor-pointer text-md transition"
                                        >
                                            {link}
                                        </li>
                                    ))}

                                </ul>

                            </div>
                        ))}

                    </div>

                </div>

            </div>


            {/* Mobile */}
            <div className=" md:hidden block  max-w-462.5 mx-auto mt-16 px-3 ">

                <div className="bg-[#0F1324] rounded-2xl p-5">

                    <div className="grid gap-5 ">

                        {footerLinks.map((item, i) => (
                            <div key={item.title}>

                                <div className="border-b pb-2  border-gray-400 " >


                                    <h3 onClick={() => setFaq(faq == i ? null : i)} className="  text-xl text-white  cursor-pointer     font-semibold  flex justify-between items-center px-1 ">
                                        {item.title}



                                        <span
                                            className={`  rounded-full flex  justify-center items-center h-7 w-7  transition-transform duration-300
                                                 ${faq === i ? "rotate-0  bg-black text-white " : "rotate-180 bg-[#171616]  "

                                                }`}
                                        >
                                            <IoIosArrowUp />
                                        </span>


                                    </h3>

                                    <ul
                                        className={`origin-top flex flex-col gap-2 px-2 overflow-hidden transition-all duration-400 ${faq === i
                                            ? "max-h-96  scale-y-100 opacity-100"
                                            : "scale-y-0 opacity-0 max-h-0 "
                                            }`} >

                                        {item.links.map((link) => (
                                            <li
                                                key={link}
                                                className="text-gray-300 hover:text-white cursor-pointer text-md transition"
                                            >
                                                {link}
                                            </li>
                                        ))}

                                    </ul>
                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </div>


        </footer>
    );
};

export default Footer