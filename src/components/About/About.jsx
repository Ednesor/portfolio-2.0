import React from 'react'
import style from "./About.module.css";
import Image from 'next/image';
import personalImg from "../../../public/personalmg.png";

export default function About() {
  return (
    <div  className={style.container} id='about'>
        <div className={style.info}>
            <p className={style.t1}>Bienvenidos, soy</p>
            <p className={style.t2}>Edgardo Funes</p>
            <p className={style.t3}>Desarrollador Web Fullstack</p>
            <p className={style.t4}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ad dolorum ipsum quaerat ipsam quisquam atque vel dignissimos, quibusdam asperiores maiores corrupti, vero excepturi eum sint nihil qui laudantium? Sequi cupiditate adipisci quaerat explicabo quo ratione aliquam, non aspernatur nostrum nisi quod praesentium molestiae, deserunt, obcaecati soluta nobis enim minima.</p>
        </div>
        <div className={style.imageContainer}>
            <Image className={style.image} src={personalImg} alt='Image of a wonderful person' />
        </div>
    </div>
  )
}
