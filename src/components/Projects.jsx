import Section from './Section'
import {useState} from 'react'

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
        <Section id="projects" title="Projects" intro="Academia–industry partnership projects.">
            <br/>
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