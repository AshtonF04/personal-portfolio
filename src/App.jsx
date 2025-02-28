import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'

function App() {

  return (
    <>
      <div className='flex w-full flex-col gap-15 px-6 py-6 md:py-8 md:px-12'>
        <Header />
        <About />
        <Skills />
      </div>
    </>
  )
}

export default App
