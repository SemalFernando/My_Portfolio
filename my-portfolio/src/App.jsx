import './App.css'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="app">
      <Hero />
      <Projects />
      <About />
      <Footer />
    </div>
  )
}

export default App