import ContactCard from './ContactCard'

import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa'

const contacts = [
  { icon: FaEnvelope, label: 'Email', value: 'work.varundarbari@gmail.com', href: 'mailto:work.varundarbari@gmail.com' },
  { icon: FaMapMarkerAlt, label: 'Location', value: 'India' },
  { icon: FaPhone, label: 'Phone', value: '+91 9999074003', href: 'tel:+919999074003' },
//  { icon: FaGithub, label: 'GitHub', value: 'github.com/Darbari-V', href: 'https://github.com/Darbari-V' },
  { icon: FaLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/varun-darbari', href: 'https://www.linkedin.com/in/varun-darbari' },
]

function Contact(){
    return(
        <section id="contact" className="contact">
            <h2>Get in touch</h2>
            <p className="section-intro">Let's Connect</p>
            <div className="card-grid">
                {contacts.map((c) => (<ContactCard key={c.label} {...c} />))}
            </div>
        </section>
    )
}

export default Contact