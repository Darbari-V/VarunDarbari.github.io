import Section from './Section'

const skillAreas = [
  {
    title: 'Business Analysis',
    skills: [
      'Requirements Gathering & Documentation',
      'Stakeholder Analysis',
      'Process Mapping',
      'Use Cases',
      'Gap Analysis',
      'User Stories & Acceptance Criteria',
      'Solution Evaluation',
      'UAT Planning',
      'Business Process Improvement',
      'SDLC',
    ],
  },
  {
    title: 'CRM & Customer Systems',
    skills: [
      'Customer Lifecycle',
      'Customer Journey Mapping',
      'CRM Processes',
      'HubSpot',
      'Salesforce',
      'Voice of the Customer',
      'Customer Data',
    ],
  },
  {
    title: 'Data & Analytics',
    skills: [
      'SQL / MySQL',
      'Microsoft Excel',
      'Power BI',
      'Tableau',
      'Data Modeling',
      'ERD',
      'Data Architecture',
      'Data Visualization',
      'AWS Redshift',
    ],
  },
  {
    title: 'Systems & Implementation',
    skills: [
      'SaaS Implementation',
      'Technology Evaluation',
      'Jira',
      'Miro',
      'Change Management',
      'Cross-functional Delivery',
      'Issue & Escalation Management',
      'Solution Presentations',
      'Client Training & Adoption',
    ],
  },
]

function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="skills-grid">
        {skillAreas.map((area) => (
          <div className="skill-card" key={area.title}>
            <h3>{area.title}</h3>
            <ul className="tag-list">
              {area.skills.map((s) => (
                <li className="tag" key={s}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Skills