import './Main.css'
import ButtonBar from "./Main/ButtonBar";
import MainContent from "./Main/MainContent";
import Footer from "./Main/Footer";
import { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";

function Main() {
    document.title = "Main Page | Mdr-C-Tutorial";
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="Main">
            <div className="MainTop">
                <p id="Title1">A</p>
                <p id="Title2">Free</p>
                <p id="Title3">C Tutorial</p>
                <p id="Subtitle">Standard, Original and Dedicated</p>
                <ButtonBar />
            </div>
            <MainContent />
            <Footer />
            {showScrollTop && (
                <div className="ScrollTopButton" onClick={scrollToTop}>
                    <FaArrowUp />
                </div>
            )}
        </div>
    )
}

export default Main