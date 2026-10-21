
const tools = ['Salesforce', 'HubSpot', 'Gainsight', 'Jira']

function Hero(){
    return (
    <section className="hero">
      <h1>
        Bridging business needs and technology:{' '}
        <span className="hero-highlight">CRM, data and SaaS</span>
      </h1>
      <p className="hero-tagline">
        IT Business Analyst specializing in CRM and customer data systems, with
        consulting experience across SMB and public sector clients.
      </p>
      <div className="hero-actions">
        <a className="btn btn-primary" href="#projects">View my work</a>
        <a className="btn btn-secondary" href="#contact">Get in touch</a>
      </div>
    </section>
    )
}

export default Hero