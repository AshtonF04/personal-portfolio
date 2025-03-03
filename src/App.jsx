import { Analytics } from "@vercel/analytics/react"

import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import Projects from './components/Projects.jsx'

function App() {

  return (
    <>
      <div className='flex w-full flex-col gap-15 px-6 py-6 md:py-8 md:px-12'>
        <div className="hidden md:inline">
        <Header />
        </div>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </>
  )
}

export default App
