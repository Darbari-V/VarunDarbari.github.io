import Header from './components/Header'
import Hero from './components/Hero'
import SocialSidebar from './components/SocialSidebar'
import Contact from './components/Contact'
import Section from './components/Section'
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <SocialSidebar />
      <Hero/>
        <Section id="about" title="About" intro="A short line about you.">
          <p>Write two or three sentences here.</p>
        </Section>

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
