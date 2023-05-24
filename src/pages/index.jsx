import Head from 'next/head'
import { Inter } from 'next/font/google'
import Layout from "../components/Layout/Layout"
import About from "../components/About/About"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <About />
    </Layout>
  )
}
