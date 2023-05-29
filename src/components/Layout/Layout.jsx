import Head from 'next/head'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import style from "./layout.module.css"
import Footer from '../Footer/Footer'

export default function Layout({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description}></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar></Navbar>

      <main className={style.main}>{children}</main>

      <Footer />
    </>
  )
}

Layout.defaultProps = {
  title: "Next.js | Mi sitio web",
  description: "Descripcion de mi sitio web"
}
