import Section from './Section.jsx'
import { useState } from 'react'

const jobs = [
  {
    company: 'Freelance',
    role: 'Business Analyst & Technology Consultant',
    dates: 'Jan 2023 – Present',
    bullets: [
      'Elicited and documented requirements across 30 SMB and independent client engagements in healthcare, SaaS/digital services, construction and local services, defining problems, users, pain points and success criteria before recommending solutions.',
      'Mapped AS-IS workflows and designed TO-BE process models that removed manual handoffs and digitized paper-based operations, saving about 6 hours per week across client operations.',
      'Ran solution evaluations and build-versus-buy assessments across Google Workspace, Microsoft 365, Jira, Notion and Zoom, matching requirements and budgets to fit-for-purpose tools.',
      'Led implementation end to end: configuration, data structuring and migration, UAT coordination and sign-off, documentation, training and post-go-live support.',
      'Replaced ad-hoc record keeping with defined CRM pipelines, follow-up workflows and Excel reporting, contributing to about 10% growth in qualified leads.',
      'Delivered regulated public-sector engagements (project records, Measurement Books, tender and administrative workflows) using systems including eGramSwaraj and PFMS.',
    ],
  },
  {
    company: 'Trumsy',
    role: 'Customer Success Manager',
    dates: 'Jun 2024 – Sep 2024',
    bullets: [
      'Owned the post-sales lifecycle for 33 SMB accounts, onboarding 21 customers through discovery, configuration, adoption, training and renewals, with 90%+ account retention.',
      'Handled 12 product escalations and acted as Voice of the Customer, documenting requirements and product gaps and passing them to Product Development while working with C-level executives.',
      'Drove customer acquisition and account growth through outreach, meeting qualification, product demos and solution presentations.',
      'Analyzed usage and health signals to flag at-risk and expansion accounts; converted 6 customers to annual billing and trained 2 Community Managers supporting 40+ customer communities.',
    ],
  },
  {
    company: 'iZooto',
    role: 'Product Specialist',
    dates: 'Dec 2020 – May 2021',
    bullets: [
      'Bridged customers, Product and Development: documented issues and requirements, investigated client-side JavaScript and integration defects, and coordinated fixes through to closure.',
      'Ran customer integrations and turned recurring feedback into feature inputs and prioritization recommendations; integrated Google Analytics with the iZooto dashboard for performance monitoring.',
    ],
  },
  {
    company: 'SpideysWeb',
    role: 'Business Development Manager / Sales Development Manager',
    dates: 'Jun 2017 – Nov 2020',
    bullets: [
      'Progressed across Customer Support, Sales Development and Business Development, covering prospect discovery, outreach, qualification and relationship development; generated and qualified 30+ leads per month.',
    ],
  },
]

function Experience(){
  const [active, setActive] = useState(0)
  const job = jobs[active]

  return (
    <Section id="experience" title="Professional Experience">
      <div className="exp-layout">
        <div className="exp-tabs" role="tablist" aria-label="Companies">
          {jobs.map((j, i) => (
            <button
              key={j.company}
              role="tab"
              aria-selected={i === active}
              className={i === active ? 'exp-tab active' : 'exp-tab'}
              onClick={() => setActive(i)}
            >
              {j.company}
            </button>
          ))}
        </div>

        <div className="exp-panel" role="tabpanel">
          <div className="exp-panel-header">
            <h3>{job.role}</h3>
            <p className="exp-dates">{job.dates}</p>
          </div>
          <ul>
            {job.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

export default Experience