import React from 'react'
import style from "./Footer.module.css"
import image from "../../../public/Logo.png"
import Image from 'next/image'
import Link from 'next/link'
import { MdWorkOutline } from "react-icons/md"
import { BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs"

export default function Footer() {
    return (
        <footer className={style.container}>
            <section className={style.tContainer}>
                <Image className={style.image} src={image} alt='Logo' />
                <p className={style.name}>EDNESOR</p>
            </section>
            <section className={style.links}>
                <Link
                    className={style.link}
                    href={"https://www.instagram.com/edgar01la/"}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <BsInstagram className={style.icon} />
                </Link>
                <Link
                    className={style.link}
                    href={"https://www.facebook.com/edgardo.funesortiz"}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <BsFacebook className={style.icon} />
                </Link>
                <Link
                    className={style.link}
                    href={"https://www.linkedin.com/in/edgardo-ibar-funes-ortiz-54ba41217/"}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <BsLinkedin className={style.icon} />
                </Link>
                <Link
                    className={style.link}
                    href={"https://www.workana.com/freelancer/811dfda34eacc29a387d19eed4ce38e7"}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <MdWorkOutline className={style.icon} />
                </Link>
            </section>
            <p className={style.copy}>
                ©2023 - Ednesor | All rights reserved
            </p>
        </footer>
    )
}
