export default function SectionHeading({ eyebrow, title, children, centered = true }) {
  return <div className={`section-heading ${centered ? 'centered' : ''}`}>
    <p className="eyebrow"><span />{eyebrow}</p><h2>{title}</h2>{children && <p className="section-copy">{children}</p>}
  </div>
}
