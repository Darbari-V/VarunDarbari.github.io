function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="section">
      <h2 className="section-title">{title}</h2>
      <p className="section-intro">{intro}</p>
      {children}
    </section>
  );
}

export default Section;