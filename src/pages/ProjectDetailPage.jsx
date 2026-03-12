import { Link, useParams } from 'react-router-dom'
import { projects } from '../portfolioData'

function ProjectDetailPage() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <main className="page">
        <section className="page-hero">
          <p className="eyebrow">Project</p>
          <h1>Project not found.</h1>
          <Link className="text-link" to="/projects">
            Back to projects
          </Link>
        </section>
      </main>
    )
  }

  return (
    <main className="page">
      <section className="page-hero detail-hero">
        <p className="eyebrow">{project.eyebrow}</p>
        <h1>{project.name}</h1>
        <p className="lede narrow">{project.summary}</p>
        <ul className="mini-tags">
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section detail-grid">
        <article className="panel">
          <p className="group-title">Challenge</p>
          <p>{project.challenge}</p>
        </article>
        <article className="panel">
          <p className="group-title">Approach</p>
          <p>{project.solution}</p>
        </article>
        <article className="panel">
          <p className="group-title">Outcome</p>
          <p>{project.outcome}</p>
        </article>
      </section>

      <section className="section split">
        <div className="section-heading">
          <p className="eyebrow">Feature breakdown</p>
          <h2>Key parts of the system.</h2>
        </div>
        <article className="panel">
          <ul className="bullet-list">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="section contact-banner">
        <div>
          <p className="eyebrow">More work</p>
          <h2>Interested in how I approach other projects?</h2>
        </div>
        <Link className="button primary" to="/projects">
          Browse more projects
        </Link>
      </section>
    </main>
  )
}

export default ProjectDetailPage
