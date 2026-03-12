import { Link } from 'react-router-dom'
import { featuredNotes, highlights, profile, projectLinks, projects, siteIntro } from '../portfolioData'

function HomePage() {
  return (
    <main>
      <section className="hero hero-home">
        <div className="hero-copy">
          <div className="hero-badges" aria-hidden="true">
            <span>React</span>
            <span>Laravel</span>
            <span>Full-stack</span>
          </div>
          <p className="eyebrow">{siteIntro.kicker}</p>
          <h1>{profile.title}</h1>
          <p className="lede">{profile.longTitle}</p>
          <div className="hero-actions">
            <Link className="button primary" to="/projects">
              Explore projects
            </Link>
            <Link className="button secondary" to="/about">
              Read my story
            </Link>
            <a className="button secondary" href="/hanna-resume.pdf" download="Hanna-Sherin-Resume.pdf">
              Download resume
            </a>
          </div>
        </div>

        <aside className="hero-card">
          <div className="portrait-scene" aria-hidden="true">
            <div className="portrait-ring ring-one" />
            <div className="portrait-ring ring-two" />
            <div className="portrait-card">
              <div className="portrait-illustration">
                <div className="hair-back" />
                <div className="neck" />
                <div className="shoulders" />
                <div className="face">
                  <span className="eye left" />
                  <span className="eye right" />
                  <span className="mouth" />
                </div>
                <div className="hair-front" />
                <div className="blazer" />
                <div className="inner-top" />
              </div>
            </div>
          </div>

          <div className="hero-card-copy">
            <p className="card-label">Currently</p>
            <h2>{profile.shortName}</h2>
            <p>{profile.summary}</p>
            <ul className="meta-list">
              <li>{profile.location}</li>
              <li>{profile.phone}</li>
              <li>{profile.email}</li>
            </ul>
          </div>
        </aside>
      </section>

      <section className="highlight-strip" aria-label="Highlights">
        {highlights.map((item) => (
          <article key={item.title}>
            <p className="strip-label">{item.title}</p>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="section split">
        <div className="section-heading">
          <p className="eyebrow">Intro</p>
          <h2>A space with room to explore.</h2>
          <p>{siteIntro.message}</p>
        </div>

        <div className="magazine-stack">
          {featuredNotes.map((note) => (
            <article className="story-card" key={note.title}>
              <p className="card-label">{note.label}</p>
              <h3>{note.title}</h3>
              <p>{note.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section home-featured">
        <div className="section-heading with-link">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>Projects with real workflows behind them.</h2>
          </div>
          <Link className="text-link" to="/projects">
            View all projects
          </Link>
        </div>

        <div className="featured-projects">
          {projects.slice(0, 3).map((project) => (
            <article className="feature-panel" key={project.slug}>
              <p className="card-label">{project.eyebrow}</p>
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
              <ul className="mini-tags">
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link className="text-link" to={`/projects/${project.slug}`}>
                Read project
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section home-directory">
        <div className="section-heading">
          <p className="eyebrow">Pages</p>
          <h2>Browse this work like a small publication.</h2>
        </div>
        <div className="directory-grid">
          <Link className="directory-card" to="/about">
            <span>About</span>
            <strong>Experience, education, skills, and background.</strong>
          </Link>
          <Link className="directory-card" to="/projects">
            <span>Projects</span>
            <strong>Project overviews with dedicated detail pages.</strong>
          </Link>
          <Link className="directory-card" to="/resume">
            <span>Resume</span>
            <strong>Read online or download the PDF version.</strong>
          </Link>
          <Link className="directory-card" to="/contact">
            <span>Contact</span>
            <strong>Ways to reach me for work or collaboration.</strong>
          </Link>
        </div>
      </section>

      <section className="section ticker-panel">
        <div className="ticker-track">
          {projectLinks.concat(projectLinks).map((project, index) => (
            <Link key={`${project.slug}-${index}`} to={project.href}>
              {project.name}
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}

export default HomePage
