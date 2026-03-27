import { Link, useParams } from 'react-router-dom'
import RevealSection from '../components/RevealSection'
import { projects } from '../portfolioData'

function ProjectDetailPage() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
      return (
        <main className="page inner-page site-editorial-page">
        <RevealSection className="site-editorial-page-hero" delay={40}>
          <p className="eyebrow">Project</p>
          <h1>Project not found.</h1>
          <Link className="text-link" to="/projects">
            Back to projects
          </Link>
        </RevealSection>
        </main>
      )
  }

  return (
    <main className="page inner-page site-editorial-page">
      <RevealSection className="site-editorial-page-hero" delay={40}>
        <p className="eyebrow">{project.eyebrow}</p>
        <h1>{project.name}</h1>
        <p className="lede">{project.summary}</p>
      </RevealSection>

      <RevealSection className="site-editorial-detail-grid" delay={90}>
        <article>
          <p className="card-label">Challenge</p>
          <p>{project.challenge}</p>
        </article>
        <article>
          <p className="card-label">Approach</p>
          <p>{project.solution}</p>
        </article>
        <article>
          <p className="card-label">Outcome</p>
          <p>{project.outcome}</p>
        </article>
      </RevealSection>

      <RevealSection className="site-editorial-detail-features" delay={130}>
        <div className="section-heading">
          <p className="eyebrow">Feature breakdown</p>
          <h2>Key parts of the system.</h2>
        </div>
        <ul className="bullet-list">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </RevealSection>

      <RevealSection className="site-editorial-more-link" delay={170}>
        <Link className="text-link" to="/projects">
          Browse more projects
        </Link>
      </RevealSection>
    </main>
  )
}

export default ProjectDetailPage
