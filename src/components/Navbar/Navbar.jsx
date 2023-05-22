import React, { useEffect, useState } from 'react';
import style from "./Navbar.module.css";
import Logo from "../../../public/Logo.png";
import Image from 'next/image';
import { Link } from "react-scroll";

export default function Navbar() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={style.container}
            style={
                scrolled ?
                    {boxShadow: "0 0 15px black"} :
                    null
            }

        >
            <div className={style.logoContainer}>
                <Image
                    className={style.image}
                    src={Logo}
                    alt='Best Logo Ever'
                />
                <p className={style.name}>EDNESOR</p>
            </div>
            <ul className={style.links}>
                <li>
                    <Link
                        activeClass={"active"}
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        delay={100}
                    >
                        HOME
                    </Link>
                </li>
                <li>
                    <Link
                        activeClass={"active"}
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        delay={100}
                    >
                        SERVICIOS
                    </Link>
                </li>
                <li>
                    <Link
                        activeClass={"active"}
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        delay={100}
                    >
                        PROYECTOS
                    </Link>
                </li>
                <li>
                    <Link
                        activeClass={"active"}
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        delay={100}
                    >
                        CONTACTO
                    </Link>
                </li>
            </ul>
            <button className={style.download}>DESCARGAR CV</button>
        </nav>
    )
}
