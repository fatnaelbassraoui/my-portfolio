import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from "../constants/links";
import { menu } from '../Assets';
import { close } from '../Assets';
import { logo } from "../Assets";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={scrolled ? "bg-dark sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 " : "bg-transparent sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 "
            }
        >
            <div className="w-full flex justify-between items-center mx-auto">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <img src={logo} alt="logo" className="w-14 h-14 object-contain" />
                    <p className="text-white text-[10px] font-bold cursor-pointer">
                        Fatna &nbsp;{" "}
                        {/*&nbsp; is used to create space between the elements */}
                        <span className="sm:block">El bassraoui</span>
                    </p>
                </Link>
                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className={`${active === nav.title ? "text-pink-300" : "text-white"
                                } hover:text-white text-[15px] font-medium cursor-pointer`}
                            onClick={() => setActive(nav.title)}
                        >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img
                        src={toggle ? close : menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain cursor-pointer"
                        onClick={() => setToggle(!toggle)}
                    />

                    <div
                        className={`${!toggle ? "hidden" : "flex"
                            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                    >
                        <ul className="list-none flex  justify-end items-start flex-col gap-4">
                            {navLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={`${active === nav.title ? "text-pink-400" : "text-white"
                                        } font-poppins font cursor-pointer text-[12px]`}
                                    onClick={() => setActive(nav.title)}
                                >
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar