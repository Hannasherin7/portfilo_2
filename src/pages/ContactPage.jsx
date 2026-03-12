import { profile } from '../portfolioData'

function ContactPage() {
  return (
    <main className="page">
      <section className="page-hero">
        <p className="eyebrow">Contact</p>
        <h1>Open to development roles, freelance work, and thoughtful product teams.</h1>
        <p className="lede narrow">
          If you want to discuss a role, a project, or a collaboration, these are the best ways to
          reach me.
        </p>
      </section>

      <section className="contact-grid">
        {profile.links.map((link) => (
          <a className="contact-card" href={link.href} key={link.label} target="_blank" rel="noreferrer">
            <span>{link.label}</span>
            <strong>{link.href.replace('mailto:', '')}</strong>
          </a>
        ))}
        <a className="contact-card" href="tel:+919539497110">
          <span>Phone</span>
          <strong>{profile.phone}</strong>
        </a>
        <div className="contact-card static">
          <span>Location</span>
          <strong>{profile.location}</strong>
        </div>
      </section>
    </main>
  )
}

export default ContactPage
