import RevealSection from '../components/RevealSection'
import { profile } from '../portfolioData'

function ContactPage() {
  const githubLink = profile.links.find((link) => link.label === 'GitHub')
  const linkedInLink = profile.links.find((link) => link.label === 'LinkedIn')

  return (
    <main className="page inner-page contact-soft-page">
      <RevealSection className="contact-soft-hero" delay={40}>
        <p className="eyebrow">Contact</p>
        <h1>Open to development roles, freelance work, and thoughtful product teams.</h1>
        <p className="lede">
          If you want to discuss a role, a project, or a collaboration, these are the best ways to
          reach me.
        </p>
      </RevealSection>

      <RevealSection className="contact-soft-grid" delay={90}>
        <article className="contact-soft-card">
          <p className="card-label">GitHub</p>
          <a href={githubLink?.href} target="_blank" rel="noreferrer">
            {githubLink?.href}
          </a>
          <span className="contact-soft-ring" aria-hidden="true" />
        </article>

        <article className="contact-soft-card">
          <p className="card-label">LinkedIn</p>
          <a href={linkedInLink?.href} target="_blank" rel="noreferrer">
            {linkedInLink?.href}
          </a>
          <span className="contact-soft-ring" aria-hidden="true" />
        </article>

        <article className="contact-soft-card contact-soft-card-pattern">
          <p className="card-label">Email</p>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <span className="contact-soft-ring" aria-hidden="true" />
          <span className="contact-soft-dots" aria-hidden="true" />
        </article>

        <article className="contact-soft-card">
          <p className="card-label">Phone</p>
          <a href={`tel:${profile.phone.replace(/\s+/g, '')}`}>{profile.phone}</a>
          <span className="contact-soft-ring" aria-hidden="true" />
        </article>

        <article className="contact-soft-card">
          <p className="card-label">Location</p>
          <p>{profile.location}</p>
          <span className="contact-soft-ring" aria-hidden="true" />
        </article>
      </RevealSection>
    </main>
  )
}

export default ContactPage
