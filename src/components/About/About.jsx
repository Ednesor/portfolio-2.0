import React from 'react'
import style from "./About.module.css";
import Image from 'next/image';
import personalImg from "../../../public/personalmg.png";

export default function About() {
  return (
    <section className={style.container} id='about'>
      <div className={style.info}>
        <p className={style.t1}>Bienvenidos, soy</p>
        <p className={style.t2}>Edgardo Funes</p>
        <p className={style.t3}>Desarrollador Web Fullstack</p>
        <p className={style.t4}>Un apasionado programador formado en UTN y Henry. Mi objetivo es brindar soluciones creativas y funcionales a través del diseño y desarrollo de aplicaciones. Como freelance, estoy comprometido con la excelencia y la atención meticulosa a los detalles. Busco oportunidades desafiantes para colaborar en proyectos emocionantes y hacer realidad ideas innovadoras. ¡Permíteme llevar tus ideas al siguiente nivel con mi pasión por la programación y mi dedicación al trabajo impecable!</p>
      </div>
      <div className={style.imageContainer}>
        <Image className={style.image} src={personalImg} alt='Image of a wonderful person' />
      </div>
    </section>
  )
}
//TODO: ajustar el tamaño de imagen
