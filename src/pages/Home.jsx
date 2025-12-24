// src/pages/Home.jsx
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Experience from '../components/Experience'
import Certificates from '../components/Certificates'
import About from '../components/About'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
    <Navbar />
      <section id="home" className="scroll-mt-32">
        <Hero />
      </section>

      <section id="certificates" className="scroll-mt-32">
        <Certificates />
      </section>

      <section id="experience" className="scroll-mt-32">
        <Experience />
      </section>

      <section id="about" className="scroll-mt-32">
        <About />
      </section>

      <Footer />
    </>
  );
}



