import React from 'react'
import style from "./Projects.module.css"
import Image from 'next/image'
import P1 from "./Project Img/P1.png";
import P2 from "./Project Img/P2.png";
import P3 from "./Project Img/P3.png";
import P4 from "./Project Img/P4.png";
import Link from 'next/link';

export default function Projects() {
  return (
    <section className={style.container} id='projects'>
      <div className={style.tContainer}>
        <p className={style.t1}>Mis trabajos</p>
        <p className={style.t2}>Ultimos proyectos</p>
      </div>
      <div className={style.projects}>
        <Link
          href={"http://tarjeta-aa.vercel.app/"}
          className={style.card}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image className={style.image} src={P1} alt="Tarjeta de invitacion" />
          <p className={style.title}>Tarjeta de invitación</p>
        </Link>
        <Link
          href={"https://github.com/Ednesor/peluqueria-canina"}
          className={style.card}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image className={style.image} src={P2} alt="Peluqueria canina" />
          <p className={style.title}>Peluquería canina</p>
        </Link>
        <Link
          href={"https://github.com/Ednesor/henry_pokemon"}
          className={style.card}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image className={style.image} src={P3} alt="Pokemon API" />
          <p className={style.title}>Pokemon API</p>
        </Link>
        <Link
          href={"https://github.com/PF-eCommerce"}
          className={style.card}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image className={style.image} src={P4} alt="Tres Bien" />
          <p className={style.title}>Tres Bien</p>
        </Link>
      </div>
    </section>
  )
}
