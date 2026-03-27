import { Link } from 'react-router-dom'
import RevealSection from '../components/RevealSection'
import { featuredNotes, highlights, profile, projects } from '../portfolioData'

function HomePage() {
  return (
    <main className="site-editorial-home">
      <section className="site-editorial-hero">
        <div className="site-editorial-location">
          <span className="site-editorial-location-dot" aria-hidden="true">
            <span className="site-editorial-globe">
              <span className="site-editorial-globe-line site-editorial-globe-line-horizontal" />
              <span className="site-editorial-globe-line site-editorial-globe-line-vertical" />
              <span className="site-editorial-globe-line site-editorial-globe-line-vert ical site-editorial-globe-line-vertical-alt" />
            </span>
          </span>
          <div>
            <p className="eyebrow">Located in</p>
            <strong>{profile.location}</strong>
          </div>
        </div>

        <div className="site-editorial-portrait" aria-hidden="true">
          <div className="site-editorial-portrait-mask">
            <img src="/profile.jpeg" alt={profile.name} className="site-editorial-portrait-image" />
          </div>
        </div>

        <div className="site-editorial-role">
          <span className="site-editorial-arrow" aria-hidden="true" />
          <p>Software Developer</p>
        </div>

        <div className="site-editorial-marquee" aria-hidden="true">
          <div className="site-editorial-marquee-track">
            <span>{profile.name} - Software Developer -</span>
            <span>{profile.name} - Software Developer -</span>
          </div>
        </div>
      </section>

      <RevealSection className="site-editorial-section site-editorial-intro" delay={80}>
        <div className="site-editorial-intro-copy">
          <p className="eyebrow">Intro</p>
          <h1>Clear, useful, and dependable systems.</h1>
          <p className="lede">{profile.longTitle}</p>
        </div>
        <div className="site-editorial-intro-meta">
          <p className="card-label">Currently</p>
          <h2>{profile.shortName}</h2>
          <p>{profile.summary}</p>
          <div className="site-editorial-meta-list">
            <span>{profile.location}</span>
            <span>{profile.phone}</span>
            <span>{profile.email}</span>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="site-editorial-section site-editorial-highlights" delay={110}>
        {highlights.map((item) => (
          <article key={item.title}>
            <p className="card-label">{item.title}</p>
            <p>{item.text}</p>
          </article>
        ))}
      </RevealSection>

      <RevealSection className="site-editorial-section site-editorial-notes" delay={130}>
        <div className="site-editorial-heading">
          <p className="eyebrow">Notes</p>
          <h2>A space with room to explore.</h2>
          <p className="lede">
            A multi-page space focused on development work, product thinking, and the systems behind the interface.
          </p>
        </div>
        <div className="site-editorial-note-list">
          {featuredNotes.map((note) => (
            <article key={note.title}>
              <p className="card-label">{note.label}</p>
              <h3>{note.title}</h3>
              <p>{note.text}</p>
            </article>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="site-editorial-section site-editorial-work" delay={150}>
        <div className="site-editorial-heading-row">
          <div className="site-editorial-heading">
            <p className="eyebrow">Selected work</p>
            <h2>Projects with real workflows behind them.</h2>
          </div>
          <Link className="text-link" to="/projects">
            View all projects
          </Link>
        </div>

        <div className="site-editorial-work-list">
          {projects.slice(0, 4).map((project, index) => (
            <article className="site-editorial-work-row" key={project.slug}>
              <div className="site-editorial-work-index">0{index + 1}</div>
              <div className="site-editorial-work-title">
                <h3>{project.name}</h3>
                <p>{project.eyebrow}</p>
              </div>
              <p className="site-editorial-work-summary">{project.summary}</p>
              <Link className="text-link" to={`/projects/${project.slug}`}>
                Read project
              </Link>
            </article>
          ))}
        </div>
      </RevealSection>

    </main>
  )
}

export default HomePage
