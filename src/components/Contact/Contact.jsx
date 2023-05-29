import React from 'react'
import style from "./Contact.module.css"
import { BsMap, BsTelephone, BsCheck2Circle } from "react-icons/bs"
import { FiMail } from "react-icons/fi"
import Form from './Form'

export default function Contact() {
  return (
    <section className={style.container} id='contact'>
      <div className={style.tContainer}>
        <p className={style.t1}>Contacto</p>
        <p className={style.t2}>Contacta conmigo</p>
      </div>
      <div className={style.cards}>
        <div className={style.card}>
          <BsMap className={style.icon} />
          <p className={style.cardContent}>Maipú, Mendoza, Argentina</p>
        </div>
        <div className={style.card}>
          <BsTelephone className={style.icon} />
          <p className={style.cardContent}>+54 261 618-7293</p>
        </div>
        <div className={style.card}>
          <FiMail className={style.icon} />
          <p className={style.cardContent}>edgardoibarfunesortiz@gmail.com</p>
        </div>
        <div className={style.card}>
          <BsCheck2Circle className={style.icon} />
          <p className={style.cardContent}>Disponibilidad Freelance</p>
        </div>
      </div>
      <Form />
    </section>
  )
}
//TODO: Mostrar alerta cuando se envie un mensaje