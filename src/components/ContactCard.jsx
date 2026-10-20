function ContactCard({ icon: Icon, label, value, href }) {
  const Tag = href ? 'a' : 'div'

  return (
    <Tag
      className="card"
      href={href}
      target={href && href.startsWith('http') ? '_blank' : undefined}
      rel={href && href.startsWith('http') ? 'noreferrer' : undefined}
    >
      <Icon className="card-icon" />
      <div className="card-text">
        <h3>{label}</h3>
        <p>{value}</p>
      </div>
    </Tag>
  )
}

export default ContactCard