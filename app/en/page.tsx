import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'

export default function EnglishHome() {
  return (
    <main>
      <Hero locale="en" />
      <Services locale="en" />
      <About locale="en" />
      <Contact locale="en" />
    </main>
  )
} 