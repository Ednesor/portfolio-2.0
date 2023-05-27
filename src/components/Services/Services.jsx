import React from 'react'
import style from "./Services.module.css"
import {AiOutlineDesktop} from "react-icons/ai"
import {BiCartAlt} from "react-icons/bi"
import {RiArticleLine} from "react-icons/ri"

export default function Services() {
  return (
    <section className={style.container} id='services'>
      <div className={style.card}>
        <AiOutlineDesktop className={style.icon} />
        <p className={style.title}>Sitio Web</p>
        <p className={style.body}>Transformo tus ideas en realidad con diseños web modernos y funcionales que destacan la identidad de tu marca. Impulsa tu presencia en línea y atrae a tu audiencia con una experiencia de usuario cautivadora.</p>
      </div>
      <div className={style.card}>
        <BiCartAlt className={style.icon} />
        <p className={style.title}>E-commerce</p>
        <p className={style.body}>Abre las puertas al éxito en el mundo del comercio electrónico con una tienda en línea atractiva y fácil de usar. Potencia tus ventas, administra tus productos y llega a clientes de todo el mundo. ¡Convierte tus visitantes en clientes satisfechos!</p>
      </div>
      <div className={style.card}>
        <RiArticleLine className={style.icon} />
        <p className={style.title}>Blog</p>
        <p className={style.body}>Crea un espacio personalizado para compartir tus pensamientos, conocimientos y pasiones. Con un diseño atractivo y funciones interactivas, tu blog se convertirá en un destino favorito para los amantes de la lectura y una poderosa herramienta para promocionar tu negocio. ¡Deja que tus palabras brillen en la web!</p>
      </div>
    </section>
  )
}
