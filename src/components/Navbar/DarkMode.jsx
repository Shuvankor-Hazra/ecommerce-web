import { useEffect, useState } from "react";
import darkPng from "../../assets/dark-mode-button.png";
import lightPng from "../../assets/light-mode-button.png";

const DarkMode = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    const element = document.documentElement;

    useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [element.classList, theme]);

    return (
        <div className="relative">
            <img
                src={lightPng}
                alt="Light-button"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"}`} />
            <img
                src={darkPng}
                alt="Dark-button"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300" />
        </div>
    );
}

export default DarkMode;
