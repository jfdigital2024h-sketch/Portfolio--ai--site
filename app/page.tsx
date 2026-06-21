import ClientInit from '@/components/ClientInit'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Works from '@/components/Works'
import Journey from '@/components/Journey'
import Testimonials from '@/components/Testimonials'
import Certificates from '@/components/Certificates'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <ClientInit />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Works />
        <Journey />
        <Testimonials />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
