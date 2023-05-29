import React from 'react'
import style from "./Projects.module.css"
import Image from 'next/image'
import P1 from "./Project Img/P1.png";
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
          <Image className={style.image} src={P1} alt="Una imagen" />
          <p className={style.title}>Tarjeta de invitacion</p>
        </Link>
      </div>
    </section>
  )
}
