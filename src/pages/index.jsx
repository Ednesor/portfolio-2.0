import Head from 'next/head'
import { Inter } from 'next/font/google'
import Layout from "../components/Layout/Layout"
import About from "../components/About/About"
import Services from '@/components/Services/Services'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <About />
      <Services />
    </Layout>
  )
}
