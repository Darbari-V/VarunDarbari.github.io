import { useEffect, useState } from 'react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

function Header(){
    const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = navItems
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean);

    if (!('IntersectionObserver' in window) || sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(`#${visibleSections[0].target.id}`);
        }
      },
      {
        // Treat a section as active when it reaches the upper-middle of the viewport.
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
    
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Back to top">
        Varun Darbari <span>| Business Analyst</span>
      </a>

      <nav className="nav-links" aria-label="Main navigation">
        {navItems.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className={activeSection === href ? 'active' : ''}
            aria-current={activeSection === href ? 'location' : undefined}
          >
            {label}
          </a>
        ))}
        <a className="nav-resume" href="/Resume.pdf" target="_blank" rel="noreferrer">
          Resume <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}

export default Header