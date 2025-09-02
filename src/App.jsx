import React from 'react'
import Header from './components/Header.jsx'
import CustomCursor from './components/CustomCursor.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="min-h-dvh bg-slate-950 text-slate-100 cursor-none">
      <CustomCursor />
      <Header />

      <main className="mx-auto max-w-6xl px-4">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
