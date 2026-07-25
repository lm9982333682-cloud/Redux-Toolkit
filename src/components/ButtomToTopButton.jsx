import React, { useEffect, useState } from 'react'

const ButtomToTopButton = ({ children }) => {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    return (
        <div onClick={() =>
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        } >
            {children}
        </div>
    )
}

export default ButtomToTopButton
