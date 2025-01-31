import './App.css'
import React, { useRef } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import { Projects } from './components/Project'
import Contact from './components/Contact'

const App = () => {
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToSection = (section) => {
    switch (section) {
      case 'home':
        homeRef.current.scrollIntoView({ behavior: 'smooth' })
        break
      case 'about':
        aboutRef.current.scrollIntoView({ behavior: 'smooth' })
        break
      case 'skills':
        skillsRef.current.scrollIntoView({ behavior: 'smooth' })
        break
      case 'projects':
        projectsRef.current.scrollIntoView({ behavior: 'smooth' })
        break
      case 'contact':
        contactRef.current.scrollIntoView({ behavior: 'smooth' })
        break
      default:
        break
    }
  }

  return (
    <main className='bg-slate-800 text-gray-100'>
      {/* <Header scrollToSection={scrollToSection} /> */}
      <div ref={homeRef}>
        <Hero scrollToSection={scrollToSection}/>
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </main>
  )
}

export default App
