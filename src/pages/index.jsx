import { Inter } from 'next/font/google'
import Layout from "../components/Layout/Layout"
import About from "../components/About/About"
import Services from '@/components/Services/Services'
import Projects from '@/components/Projects/Projects'
import Contact from '@/components/Contact/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout title={"Ednesor | Portfolio"}>
      <About />
      <Services />
      <Projects />
      <Contact />
    </Layout>
  )
}
