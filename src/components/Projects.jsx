import Section from './Section'
import {useState} from 'react'

// Featured case studies: current work, shown first.
// To move to the next stage, change 'current' to 'done' and 'planned' to 'current'.
const featured = [
  {
    title: 'CRM Migration to Salesforce',
    subtitle: 'MavenTech case study · started October 2026',
    status: 'In progress',
    summary:
      'MavenTech, a fictional company that sells computer hardware to large businesses, is moving its sales pipeline data (a public-domain Maven Analytics dataset) to Salesforce. As the business analyst, I take it from project brief to user acceptance testing, adding each piece as I finish it. Built while I study for the BCS Foundation Certificate in Business Analysis.',
    stages: [
      { name: 'Discovery', state: 'current' },
      { name: 'Specification', state: 'planned' },
      { name: 'Build and test', state: 'planned' },
    ],
    tools: ['PESTLE', 'SWOT', 'Stakeholder Wheel', 'Power/Interest Grid', 'RACI Chart', 'CARDI Log', 'Swimlane Diagram', 'As-Is Process Analysis'],
    link: 'https://darbari-v.github.io/crm-migration-case-study/',
    source: 'https://github.com/Darbari-V/crm-migration-case-study',
  },
  {
    title: 'Customer 360 — CRM Transformation & Customer Data Integration',
    subtitle: 'Northstar Services · Independent BA case study · started October 2026',
    status: 'In progress',
    summary:
      'An independent fictional Business Analysis case study exploring fragmented customer information, inconsistent lead follow-ups and sales reporting challenges. Current work covers problem definition, stakeholder investigation planning, preliminary As-Is/To-Be process analysis and gap analysis. Requirements, customer-data analysis, CRM configuration and testing will follow as the project progresses.',
    stages: [
      { name: 'Discovery & process analysis', state: 'current' },
      { name: 'Requirements', state: 'planned' },
      { name: 'Build & validation', state: 'planned' },
    ],
    tools: [
      'Business Problem Analysis',
      'Stakeholder Analysis',
      'Investigation Planning',
      'As-Is / To-Be Mapping',
      'Gap Analysis',
    ],
    link: 'https://darbari-v.github.io/northstar-customer-360/',
    source: 'https://github.com/Darbari-V/northstar-customer-360',
  },
]

const areas = [
  {
    name: 'Business Analysis & Customer Success',
    projects: [
      {
        title: 'Customer Feedback Analysis & Systems Design',
        tools: ['UML', 'Draw.io', 'Jira', 'Text Analysis'],
        summary: 'Turned customer feedback into structured, actionable product requirements.',
        details:
          'Designed a structured mechanism to analyze and categorize customer feedback into actionable product requirements using text analysis and pattern matching. Developed the supporting business case and system design using SDLC concepts, use cases, and data-flow diagrams to translate customer needs into a solution.',
      },
      {
        title: 'Customer Success Lifecycle for Digital Business',
        tools: ['Databricks', 'Totango', 'Miro', 'CTS Model', 'Excel'],
        summary: 'Built a scaled Customer Success framework and customer journey model.',
        details:
          'Developed a scaled Customer Success framework and customer journey model incorporating customer segmentation, cost-to-serve, LTV:CAC, engagement strategy, and lifecycle management to support product adoption and sustainable account growth.',
      },
    ],
  },
  {
    name: 'Data & Cloud',
    projects: [
      {
        title: 'Applicant Tracking System: Data & Systems Design',
        tools: ['AWS Redshift', 'MySQL', 'ERD', 'DDL/DML', 'Python'],
        summary: 'Designed a cloud-based applicant tracking and candidate relationship architecture.',
        details:
          'Designed a cloud-based applicant tracking and candidate relationship management architecture to centralize candidate information and support end-to-end recruitment workflows using relational database design, SQL, and data management principles.',
      },
      {
        title: 'Automated Product Recommendations',
        tools: ['AWS Kinesis', 'S3', 'EMR', 'Apache Spark', 'AWS IAM'],
        summary: 'Designed a cloud pipeline for personalized e-commerce recommendations.',
        details:
          'Designed a cloud-based product recommendation pipeline for an e-commerce use case, streaming customer and order data through AWS Kinesis and Amazon S3 and processing aggregated purchasing data using Amazon EMR and Apache Spark to support personalized product recommendations.',
      },
    ],
  },
  {
    name: 'Analytics',
    projects: [
      {
        title: 'Business Analytics & Predictive Modeling',
        tools: ['Microsoft Excel', 'JMP Pro', 'Tableau', 'Power BI'],
        summary: 'Built forecasting and predictive models for industry case studies.',
        details:
          'Developed business analytics and predictive models for industry case studies, applying forecasting, k-NN, regression trees, hypothesis testing, and data visualization to identify business trends, resource constraints, and growth opportunities and translate analytical findings into actionable recommendations.',
      },
    ],
  },
]

function Projects(){
    const [activeArea, setActiveArea] = useState(0)
    const [activeProject, setActiveProject] = useState(0)

    const area = areas[activeArea]
    const project = area.projects[activeProject]

    return(
        <Section id="projects" title="Projects">
            <h3 className="proj-subhead">Featured case studies</h3>
            <p className="proj-subintro">Self-directed business analysis case studies I'm building now. Each one grows as I finish a new piece.</p>

            <div className="featured-grid">
                {featured.map((f) => (
                    <article className="featured-card" key={f.title}>
                        <p className="featured-status">{f.status}</p>
                        <div>
                            <h4>{f.title}</h4>
                            <p className="featured-subtitle">{f.subtitle}</p>
                        </div>
                        <p>{f.summary}</p>

                        <p className="featured-label">Stages</p>
                        <ol className="stage-list">
                            {f.stages.map((s) => (
                                <li key={s.name} aria-current={s.state === 'current' ? 'step' : undefined}>
                                    <span className={`stage stage-${s.state}`}>
                                        {s.state === 'done' && '✓ '}{s.name}
                                    </span>
                                </li>
                            ))}
                        </ol>

                        <p className="featured-label">Techniques used so far</p>
                        <ul className="tag-list">
                            {f.tools.map((t) => (
                                <li className="tag" key={t}>{t}</li>
                            ))}
                        </ul>

                        <div className="hero-actions featured-link">
                            <a className="btn btn-primary" href={f.link} target="_blank" rel="noreferrer">
                                Read the case study <span aria-hidden="true">↗</span>
                            </a>
                            <a className="btn btn-secondary" href={f.source} target="_blank" rel="noreferrer">
                                Source on GitHub <span aria-hidden="true">↗</span>
                            </a>
                        </div>
                    </article>
                ))}
            </div>

            <h3 className="proj-subhead">Earlier projects</h3>
            <p className="proj-subintro">Academia–industry partnership projects.</p>

            <div className="proj-tabs" role="tablist" aria-label="Project areas">
                {areas.map((a,i)=> (
                    <button key={a.name} role="tab" aria-selected={i === activeArea}
                    className={i === activeArea ? 'proj-tab active' : 'proj-tab'}
                    onClick={()=>{
                        setActiveArea(i)
                        setActiveProject(0)
                    }}
                    >
                    {a.name}
                    </button>
                ))}
            </div>

            <div className="exp-layout proj-layout">
                <div className="exp-tabs" role="tablist" aria-label="Projects">
                    {area.projects.map((p,i) =>(
                        <button key={p.title}
                                role="tab"
                                aria-selected={i === activeProject}
                                className={i === activeProject ? 'exp-tab active' : 'exp-tab'}
                                onClick={() => setActiveProject(i)}>
                            {p.title}
                        </button>
                    ))}
                </div>

                <div className="exp-panel" role="tabpanel">
                    <div className="exp-panel-header">
                        <h3>{project.title}</h3>
                    </div>
                    <p>{project.details}</p>
                    <ul className="tag-list">
                        {project.tools.map((t) => (
                        <li className="tag" key={t}>{t}</li>
                        ))}
                    </ul>
                </div>
            </div>

        </Section>
    )
}

export default Projects
