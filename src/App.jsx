import Header from './components/Header'
import Hero from './components/Hero'
import SocialSidebar from './components/SocialSidebar'
import Contact from './components/Contact'
import Section from './components/Section'
import About from './components/About'
import Experience from './components/Experience' 
import Skills from './components/Skills' 

import './App.css'

function App() {
  return (
    <div>
      <Header />
      <SocialSidebar />
      <Hero/>
        <About />
        <Experience />

        <Section id="projects" title="Projects">
          <p>Coming soon.</p>
        </Section>

        <Skills /> 
      <Contact/>
    </div>
    )
}

export default App
