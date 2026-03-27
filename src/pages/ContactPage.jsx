import RevealSection from '../components/RevealSection'
import { profile } from '../portfolioData'

function ContactPage() {
  return (
    <main className="page inner-page site-editorial-page">
      <RevealSection className="site-editorial-page-hero" delay={40}>
        <p className="eyebrow">Contact</p>
        <h1>Open to thoughtful software roles and collaborative product work.</h1>
        <p className="lede">
          If you want to discuss a role, a project, or a collaboration, these are the best ways to
          reach me.
        </p>
      </RevealSection>

      <RevealSection className="site-editorial-contact-grid" delay={90}>
        <article>
          <p className="card-label">Email</p>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </article>
        <article>
          <p className="card-label">Phone</p>
          <a href={`tel:${profile.phone.replace(/\s+/g, '')}`}>{profile.phone}</a>
        </article>
        <article>
          <p className="card-label">Location</p>
          <p>{profile.location}</p>
        </article>
        <article>
          <p className="card-label">Profiles</p>
          <div className="site-editorial-link-stack">
            {profile.links.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </article>
      </RevealSection>
    </main>
  )
}

export default ContactPage
