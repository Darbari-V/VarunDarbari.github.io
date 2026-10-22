import { useEffect, useRef, useState } from 'react';


function Section({ id, title, intro, children }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Show content immediately for browsers without IntersectionObserver.
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`section section-reveal${isVisible ? ' is-visible' : ''}`}
    >
      <h2 className="section-title">{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
      {children}
    </section>
  );
}

export default Section;