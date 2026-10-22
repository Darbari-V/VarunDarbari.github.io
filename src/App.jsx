import Header from './components/Header'
import Hero from './components/Hero'
import SocialSidebar from './components/SocialSidebar'
import Contact from './components/Contact'
import About from './components/About'
import Experience from './components/Experience' 
import Skills from './components/Skills'
import Projects from './components/Projects' 

import './App.css'

function App() {
  return (
    <div id="top">
      <Header />
      <SocialSidebar />
      <Hero/>
        <About />
        <Experience />
        <Projects />
        <Skills /> 
      <Contact/>
    </div>
    )
}

export default App
