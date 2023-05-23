import React, { useEffect, useState } from 'react';
import style from "./Navbar.module.css";
import Logo from "../../../public/Logo.png";
import Image from 'next/image';
import { Link } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai"
import { GiCancel } from "react-icons/gi"

export default function Navbar() {

    const [scrolled, setScrolled] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);
    const [menu, setMenu] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const selectStyle = () => {
        let menuStyle = {};
        if (scrolled && windowWidth > 900) {
            menuStyle = { boxShadow: "0 0 15px black" };
        } else if (windowWidth <= 900) {
            menuStyle = { boxShadow: "0 0 15px black" };
        }
        if (menu && windowWidth <= 900) {
            menuStyle = {
                boxShadow: "0 0 15px black",
                top: "0px"
            };
        }

        return menuStyle;
    }

    return (
        <nav
            className={style.container}
            style={selectStyle()}

        >
            <div className={style.logoContainer}>
                <Image
                    className={style.image}
                    src={Logo}
                    alt='Best Logo Ever'
                    style={
                        (menu && windowWidth <= 900) ? {
                            width: "0px"
                        } : null
                    }
                />
                <p className={style.name}>EDNESOR</p>
                {windowWidth <= 900 ?
                    menu ?
                        <GiCancel className={style.icon} onClick={() => setMenu(!menu)} /> :
                        <AiOutlineMenu className={style.icon} onClick={() => setMenu(!menu)} />
                    : null
                }
            </div>
            <div className={style.menu}>
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
            </div>
        </nav>
    )
}
