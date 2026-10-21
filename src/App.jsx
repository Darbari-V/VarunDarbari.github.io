import Header from './components/Header'
import Hero from './components/Hero'
import SocialSidebar from './components/SocialSidebar'
import Contact from './components/Contact'
import Section from './components/Section'
import About from './components/About'  

import './App.css'

function App() {
  return (
    <div>
      <Header />
      <SocialSidebar />
      <Hero/>
        <About />
        
        <Section id="experience" title="Experience">
          <p>Coming soon.</p>
        </Section>

        <Section id="projects" title="Projects">
          <p>Coming soon.</p>
        </Section>

        <Section id="skills" title="Skills">
          <p>Coming soon.</p>
        </Section>  
      <Contact/>
    </div>
    )
}

export default App
