import Contact from './Contact'
import Currently from './Currently'
import Dreams from './Dreams'
import Footer from './Footer'
import Hero from './Hero'
import Journey from './Journey'
import Nav from './Nav'
import Projects from './Projects'
import Skills from './Skills'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Journey />
        <Currently />
        <Dreams />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
