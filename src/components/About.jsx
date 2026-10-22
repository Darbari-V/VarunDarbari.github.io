import Section from './Section';
import { FaGraduationCap, FaAward } from 'react-icons/fa'

const education = [
  {
    degree: 'MS in Information Systems',
    school: 'University of San Francisco, San Francisco, USA',
    dates: 'Aug 2021 – Dec 2022',
  },
  {
    degree: 'B.Tech in Mechanical Engineering',
    school: 'Dr. A.P.J. Abdul Kalam Technical University, India',
    dates: 'Aug 2012- April 2016'
  },
]

const achievements = [
  'Beta Gamma Sigma (BΓΣ). Recognized as #1 graduating student. Lifetime Member (2022)',
  'Graduated Summa Cum Laude. Graduated top of the class.  GPA: 4.0/4.0',
]


function About() {
  return (
    <Section id="about" title="About Me">
      <p className="about-summary">
        IT Business Analyst with three years of consulting experience, backed by
        Product Specialist and Customer Success roles. I work across requirements
        discovery, process mapping, solution evaluation and UAT coordination,
        helping SMB and public sector teams implement CRM and customer data systems.
      </p>
      
       <div className="about-columns">
        <div className="about-col">
          <h3>Education</h3>
          {education.map((e) => (
            <div className="about-row" key={e.degree}>
              <FaGraduationCap className="about-icon" />
              <div>
                <p className="about-item-title">{e.degree}</p>
                <p>{e.school}</p>
                {e.dates && <p className="about-muted">{e.dates}</p>}
                {e.details && <p>{e.details}</p>}
                {e.coursework && (
                  <p className="about-muted">Coursework: {e.coursework}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="about-col">
          <h3>Key Achievements</h3>
          {achievements.map((a) => (
            <div className="about-row achievement" key={a}>
              <FaAward className="about-icon" />
              <p>{a}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default About;